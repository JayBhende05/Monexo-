
import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Gradient } from "@repo/ui/gradient";
import { TurborepoLogo } from "@repo/ui/turborepo-logo";

// import { prisma } from "@repo/db";
import {balanceStore} from "@repo/store"
import BalanceClient from "./trail";
export default async function Page() {
  //  const user = await prisma.user.findMany();
  return <>
  {/* <div >{user[0]?.name  ?? "No user added yet"}</div>; */}
  <BalanceClient />
  </>
  
}
