import {prisma} from "./../src/client"
import bcrypt from "bcrypt";



async function main() {
  const rahul = await prisma.user.upsert({
    where: { number: '1111111111' },
    update: {},
    create: {
      number: '1111111111',
      password: await bcrypt.hash('Rahul@123', 10),
      name: 'Rahul Sharma',
      Balance: {
        create: {
          amount: 45250,
          locked: 500       
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date('2026-03-25T10:15:00'),
          status: "Success",
          amount: 15000,
          token: "txn_HDFC_9834XYZ",
          provider: "HDFC Bank",
        },
      },
    },
  })

  const priya = await prisma.user.upsert({
    where: { number: '2222222222' },
    update: {},
    create: {
      number: '2222222222',
      password: await bcrypt.hash('Priya@123', 10),
      name: 'Priya Mehta',
      Balance: {
        create: {
          amount: 12800,
          locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date('2026-04-01T14:45:00'),
          status: "Success",
          amount: 5000,
          token: "txn_ICICI_45KLMN",
          provider: "ICICI Bank",
        },
      },
    },
  })

  console.log({ rahul, priya })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })