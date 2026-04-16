import {create} from "zustand"

export const useWithdrawalStore = create((set)=>({
  amount : 0,
  setWithdrawalAmount : (val: number) => set({amount : val})
}))