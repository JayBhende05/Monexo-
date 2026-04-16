"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "@repo/db";

export const transferTransaction = async (num: number, amount: number) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return {
      message: "Unauthenticated Request",
    };
  }

  const senderId = Number(session.user.id);

  // Find sender balance
  const senderBalance = await prisma.balance.findUnique({
    where: {
      userId: senderId,
    },
  });

  if (!senderBalance || senderBalance.amount < Number(amount)) {
    return {
      message: "Insufficient Funds",
    };
  }

  // Find recipient
  const recipientUser = await prisma.user.findFirst({
    where: {
      number: num.toString(),
    },
  });

  if (!recipientUser) {
    return {
      message: "Recipient not found",
    };
  }

  // Prevent self-transfer
  if (recipientUser.id === senderId) {
    return {
      message: "Cannot transfer to yourself",
    };
  }

  // Transaction: debit sender, credit recipient
  await prisma.$transaction([
    prisma.balance.update({
      where: {
        userId: senderId,
      },
      data: {
        amount: {
          decrement: Number(amount) * 100,
        },
      },
    }),
    prisma.balance.update({
      where: {
        userId: recipientUser.id,
      },
      data: {
        amount: {
          increment: Number(amount) * 100,
        },
      },
    }),
    prisma.p2pTransfer.create({
      data :{
        toUserId : recipientUser.id,
        fromUserId : senderId,
        timestamp : new Date(),
        amount: Number(amount) * 100
      }
    }),
   
  ]);

  return {
    message: "Transfer successful",
  };
};