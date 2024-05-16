import { object, string } from 'yup'

export const contactUsSchema = object({
  name: string().required('Name is required'),
  email: string().required('email is required'),
  addressLine1: string().required('addressLine1 is required'),
  city: string().required('city is required'),
  state: string().required('state is required'),
  postalCode: string().required('postalCode is required'),
})
