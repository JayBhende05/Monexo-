import express from 'express';
import { prisma } from '@repo/db'

const app = express()

app.use(express.json());

interface paymentInformation {
  token: string,
  userId: number,
  amount: number
}

app.post('/hdfbWebhook', async (req, res) => {
  const paymentInformation: paymentInformation = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount
  }

  try {
    await prisma.$transaction([prisma.balance.updateMany({
      where: {
        userId: Number(paymentInformation.userId)
      },
      data: {
        amount: {
          // You can also get this from your DB
          increment: Number(paymentInformation.amount)
        }
      }
    }),
    prisma.onRampTransaction.updateMany({
      where: {
        token: paymentInformation.token
      },
      data: {
        status: "Success",
      }
    })
    ])
    res.json({
      message: "Captured"
    })
  } catch (e) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook"
    })
  }

})

app.listen(3003);