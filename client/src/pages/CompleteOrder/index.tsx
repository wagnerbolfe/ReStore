import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedProducts } from "./components/SelectedProducts";
import { CompleteOrderContainer } from "./styles";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export interface Basket {
  id: number;
  buyerId: string;
  items: BasketItem[];
}

export interface BasketItem {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
  tag: string;
}

enum PaymentMethods {
  stripe = "stripe",
  pix = "pix"
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    { data.paymentMethod == "stripe" ? navigate("/orderConfirmed", { state: data }) : navigate("/orderConfirmed", { state: data }) }
  }

  return (
    <>
      <Header />
      <FormProvider {...confirmOrderForm}>
        <CompleteOrderContainer
          className="container"
          onSubmit={handleSubmit(handleConfirmOrder)}
        >
          <CompleteOrderForm />
          <SelectedProducts />
        </CompleteOrderContainer>
      </FormProvider>
    </>
  );
}
