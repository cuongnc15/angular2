export interface Role {
  id: number;
  userName: string;
  fullName: string;
  agency: string;
  role: string;
  effectiveDate: Date;
  expirationDate: Date;
  status: boolean;
}
