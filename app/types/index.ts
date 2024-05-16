export interface ContactUsForm {
  name: string;
  email: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
  
}

export interface Option {
  id: string;
  name: string;
}
