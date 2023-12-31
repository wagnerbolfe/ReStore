import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Money } from "@phosphor-icons/react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
  stripe: {
    label: "Stripe",
    icon: <CreditCard size={16} />,
  },
  pix: {
    label: "PIX",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
}
