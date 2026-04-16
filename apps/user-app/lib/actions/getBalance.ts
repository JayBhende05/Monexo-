'use server'

import { prisma } from "@repo/db"


export default async function getBalance(userId: number|string){
    const balance = await prisma.balance.findFirst({
      where: {
        userId : Number(userId)
      }
    })
    if(balance){
      return{
        amount : balance?.amount || 0,
        locked : balance?.locked || 0
      }
    }
}
