export interface Agency {
  id: number;
  agencyCode: string;
  agencyName: string;
  phoneNumber: string;
  domain: string;
  category: string;
  account: string;
  servicePack: string;
  effectiveDate: Date;
  expirationDate: Date;
  status: boolean;
}
