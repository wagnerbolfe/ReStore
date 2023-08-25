import * as yup from 'yup';

export const validationSchema = [
  yup.object({
    fullName: yup.string().required('Nome é obrigatório'),
    address1: yup.string().required('Pelo menos um endereço é obrigatório'),
    address2: yup.string(),
    city: yup.string().required('Cidade é obrigatório'),
    state: yup.string().required('Estado é obrigatório'),
    zip: yup.string().required('Cep é obrigatório'),
    country: yup.string().required('País é obrigatório'),
  }),
  yup.object(),
  yup.object({
    nameOnCard: yup.string().required()
  })
]