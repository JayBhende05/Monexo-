import { prisma } from "@repo/db";
import { useAmountBalanceStore, useLockedBalanceStore } from "@repo/store";
import { useSession } from "next-auth/react";
import React from "react";



function Balance() {

  const { amountBalance } = useAmountBalanceStore();
  const {lockedBalance} = useLockedBalanceStore();

  return (
    <>
      <div className="col-span-12 lg:col-span-5 space-y-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif italic">
            Monexo Balance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <span className="text-sm text-gray-500">Locked Balance</span>
              <span className="text-sm font-bold text-gray-900"> {lockedBalance / 100 || 0} </span>
            </div>
            {/* <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <span className="text-sm text-gray-500">Unlocked Balance</span>
              <span className="text-sm font-bold text-gray-900"> 0 </span>
            </div> */}
            <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
              <span className="text-sm text-gray-500">Total Balance</span>
              <span className="text-sm font-bold text-gray-900"> {amountBalance / 100 || 0} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
