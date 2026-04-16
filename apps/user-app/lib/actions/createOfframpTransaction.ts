"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db";



export const createOfframpTransaction = async (amount: number)=>{

  const session = await getServerSession(authOptions);
  if(!session.user.id){
    return {
      msg : "Unauthenticated Request"
    }
  }

  const balance = await prisma.balance.findFirst({where : { id : Number(session?.user?.id) }});

  if (balance?.amount < amount) {
  return {
      msg : "Insufficient Funds"
    }
}
   const token = (Math.random()*1000).toString();

   await prisma.$transaction([
    prisma.onRampTransaction.create({
      data:{
         provider : "Wallet",
      token,
      amount: amount * 100,
      status: "Processing",
      startTime: new Date(),
      userId : Number(session?.user?.id),
      type: "WITHDRAWAL"
      }
    }),

    prisma.balance.update({
      where : { userId :Number(session?.user?.id) },
      data :{
        amount : {
            decrement : Number(amount) * 100
        },
        locked : {
           increment : Number(amount) * 100
        }
      }

    })

   ]);

   return {
    msg : "Withdrawal Initiated"
   }

}