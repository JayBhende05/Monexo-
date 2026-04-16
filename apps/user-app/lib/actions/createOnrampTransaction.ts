"use server"
import { prisma } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";


export async function createOnRampTransaction(provider : string, amount: number){

  const session = await getServerSession(authOptions)
  if(!session?.user || !session?.user?.id){
    return {
      message : "Unauthenticated Request"
    }
  }

  const token = (Math.random()*1000).toString();
  await prisma.onRampTransaction.create({
    data:{
      provider,
      token,
      amount : amount*100,
      startTime : new Date(),
      status: "Processing",
      userId: Number(session?.user?.id),
      type: "DEPOSIT"
    }
  })

  return{
    message : "Done"
  }



} 