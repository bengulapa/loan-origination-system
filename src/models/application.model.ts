export interface Guarantor {
  name: string;
  email: string;
  phone: string;
}

export type Deal = {
  number: string;
  borrower: string;
  loanAmount: number;
  decision: string;
  status: string;
  tasks: number;
  guarantors: Guarantor[];
};
