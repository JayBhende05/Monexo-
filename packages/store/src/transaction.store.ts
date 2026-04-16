import { create } from "zustand";

type Transaction = {
  time: Date;
  amount: number;
  status: string;
  provider: string;
};

type TransactionStore = {
  transactions: Transaction[];
  setTransactions: (txs: Transaction[]) => void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  setTransactions: (txs) => set({ transactions: txs }),
}));