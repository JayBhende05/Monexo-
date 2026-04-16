import {create} from "zustand";

type Bal = {
  amountBalance : number,
    setAmountBalance: (val: number) => void;
}

export const useAmountBalanceStore = create<Bal>((set) =>({
  amountBalance : 0,
  setAmountBalance : (val) => set({amountBalance : val }),
}))



