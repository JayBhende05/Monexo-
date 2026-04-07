import {create} from "zustand";

type Bal = {
  balance : number,
  increase : ()=>void,
  decrease : ()=>void
}

export const balanceStore = create<Bal>((set) =>({
  balance : 0,
  increase : () => 
    set((state) => ({balance : state.balance + 1})),
  decrease :() =>
    set((state) => ({balance : state.balance - 1 }))

}))
