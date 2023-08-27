/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import { CheckoutPageContainer } from "./styles";
import { Header } from "../../components/Header";
import { TitleText } from "../../components/Typography";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { yupResolver } from "@hookform/resolvers/yup";
import agent from "../../api/agent";
import { validationSchema } from "../../utils/checkoutValidation";
import { clearBasket } from "../CompleteOrder/basketSlice";
import { LoadingButton } from '@mui/lab';
import { StripeElementType } from "@stripe/stripe-js";
import { CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";

const steps = ['Endereço de entrega', 'Revise seu pedido', 'Escolha o pagamento'];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [cardState, setCardState] = useState<{ elementError: { [key in StripeElementType]?: string } }>({ elementError: {} });
  const [cardComplete, setCardComplete] = useState<any>({ cardNumber: false, cardExpiry: false, cardCvc: false });
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const { basket } = useAppSelector(state => state.basket);
  const stripe = useStripe();
  const elements = useElements();

  function onCardInputChange(event: any) {
    setCardState({
      ...cardState,
      elementError: {
        ...cardState.elementError,
        [event.elementType]: event.error?.message
      }
    })
    setCardComplete({ ...cardComplete, [event.elementType]: event.complete })
  }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <Review />;
      case 2:
        return <PaymentForm cardState={cardState} onCardInputChange={onCardInputChange} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(currentValidationSchema)
  });

  useEffect(() => {
    agent.Account.fetchAddress()
      .then(response => {
        if (response) {
          methods.reset({ ...methods.getValues(), ...response, saveAddress: false })
        }
      })
  }, [methods]);

  async function submitOrder(data: FieldValues) {
    setLoading(true);
    const { nameOnCard, saveAddress, ...address } = data;
    if (!stripe || !elements) return; // stripe not ready
    try {
      const cardElement = elements.getElement(CardNumberElement);
      const paymentResult = await stripe.confirmCardPayment(basket?.clientSecret!, {
        payment_method: {
          card: cardElement!,
          billing_details: {
            name: nameOnCard
          }
        }
      });
      console.log(paymentResult);
      if (paymentResult.paymentIntent?.status === 'succeeded') {
        const orderNumber = await agent.Orders.create({ saveAddress, shippingAddress: address });
        setOrderNumber(orderNumber);
        setPaymentSucceeded(true);
        setPaymentMessage('Obrigado! - Nós recebemos seu pagamento!');
        setActiveStep(activeStep + 1);
        dispatch(clearBasket());
        setLoading(false);
      } else {
        setPaymentMessage(paymentResult.error?.message!);
        setPaymentSucceeded(false);
        setLoading(false);
        setActiveStep(activeStep + 1);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleNext = async (data: FieldValues) => {
    if (activeStep === steps.length - 1) {
      await submitOrder(data);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function submitDisabled(): boolean {
    if (activeStep === steps.length - 1) {
      return !cardComplete.cardCvc
        || !cardComplete.cardExpiry
        || !cardComplete.cardNumber
        || !methods.formState.isValid
    } else {
      return !methods.formState.isValid
    }
  }

  return (
    <>
      <Header />
      <FormProvider {...methods}>
        <CheckoutPageContainer>
          <TitleText size="m" color="subtitle">
            Checkout
          </TitleText>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  {paymentMessage}
                </Typography>
                {paymentSucceeded ? (
                  <Typography variant="subtitle1">
                    Seu pedido é o número {orderNumber}.
                  </Typography>
                ) : (
                  <Button style={{ marginTop: '2rem' }} variant="contained" onClick={handleBack}>
                    Volte e tente novamente
                  </Button>
                )}
              </>
            ) : (
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Voltar
                    </Button>
                  )}
                  <LoadingButton
                    loading={loading}
                    disabled={submitDisabled()}
                    variant="contained"
                    type='submit'
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Fazer Pedido' : 'Próximo'}
                  </LoadingButton>
                </Box>
              </form>
            )}
          </>
        </CheckoutPageContainer>
      </FormProvider>
    </>
  );
}