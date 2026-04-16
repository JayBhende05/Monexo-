import {create} from 'zustand';

// interface deposit {
// amount: string;
//   bank: string;
//   cardNumber: string;
//   cardName: string;
//   expiry: string;
//   cvv: string;
//   setField: () => void;
// }

export const useDepositStore = create((set) => ({
   amount: "",
  bank: "",
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: "",
  setField : (field : string, value : string) => set({[field] : value})
}))