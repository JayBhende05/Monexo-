import {create} from 'zustand';

interface Loc {
  lockedBalance : number,
  setLockedBalance : (val:number) => void
}

export const useLockedBalanceStore = create<Loc>((set)=>({
  lockedBalance : 0,
  setLockedBalance : (vla) => set({lockedBalance : vla})
}));
