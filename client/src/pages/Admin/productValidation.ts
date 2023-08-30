import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  brand: yup.string().required("Marca é obrigatória"),
  type: yup.string().required("Categoria é obrigatória"),
  price: yup.number().required().moreThan(10, "Valor mínimo é R$10"),
  quantityInStock: yup.number().required().min(0, "Deve ser maior que zero"),
  description: yup.string().required("Descrição é obrigatória"),
  file: yup.mixed().when('productUrl', {
    is: (value: string) => !value,
    then: (schema) => schema.required('Selecione uma imagem')
  })
})