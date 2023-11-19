export interface CheckoutReadDTO {
  address: {
    city: string;
    lastName: string;
    name: string;
    postalCode: string;
    street: string;
  },
  gift: {
    enabled: boolean;
    recipient?: string;
    from?: string;
  }
}
