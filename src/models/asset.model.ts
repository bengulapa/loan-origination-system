export interface AssetDetails {
  condition: string;
  year: number;
  make: string;
  model: string;
  variant: string;
  description?: string;
  fullModelName: string;
  purchasePrice: number;
}

export interface AssetDisposition {
  identifierValue: string;
  disposition: 'Approve' | 'Refer' | 'Decline';
  message: string;
}
