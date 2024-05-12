import { object, string } from 'yup'

export const contactUsSchema = object({
  name: string().required('Name is required'),
  email: string().required('email is required'),
  address: string().required('Address is required'),
  message: string().required('Message is required'),
})
