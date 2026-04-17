// components/BalanceClient.tsx
"use client";
import {balanceStore} from "@repo/store"

export default function BalanceClient() {
   const {balance, increase} = balanceStore((state) => state )
    // kkjj
  return (<><p>{balance}</p>
  <button onClick={increase} > Increment</button>
  
  
  </>)
}