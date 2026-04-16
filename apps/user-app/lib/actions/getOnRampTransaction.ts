"use server"
import { prisma } from "@repo/db";

export async function getOnRampTransaction(userId: string) {
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(userId),
    },
  });

  return transactions.map((t) => ({
    time: t.startTime,
    amount: t.amount / 100 ,
    status: t.status,
    type : t.type,
    provider: t.provider,
  }));
}