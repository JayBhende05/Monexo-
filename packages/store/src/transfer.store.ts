import {create}  from 'zustand'


export const useTransferStore = create((set) => ({
  number : "",
  amount : "",
 
    setField : (field : string, value : string) => set({[field] : value})
}))