import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import { CheckoutPageContainer } from "./styles";
import { Header } from "../../components/Header";
import { TitleText } from "../../components/Typography";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/configureStore";
import { yupResolver } from "@hookform/resolvers/yup";
import agent from "../../api/agent";
import { validationSchema } from "../../utils/checkoutValidation";
import { clearBasket } from "../CompleteOrder/basketSlice";
import { LoadingButton } from '@mui/lab';

const steps = ['Endereço de entrega', 'Revise seu pedido', 'Escolha o pagamento'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(currentValidationSchema)
  })

  useEffect(() => {
    agent.Account.fetchAddress()
      .then(response => {
        if (response) {
          methods.reset({ ...methods.getValues(), ...response, saveAddress: false })
        }
      })
  }, [methods])

  const handleNext = async (data: FieldValues) => {
    const { nameOnCard, saveAddress, ...shippingAddress } = data;
    if (activeStep === steps.length - 1) {
      setLoading(true);
      try {
        const order = await agent.Orders.create({ saveAddress, shippingAddress });
        setOrderNumber(order);
        setActiveStep(activeStep + 1);
        dispatch(clearBasket());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #{orderNumber}. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
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
                    disabled={!methods.formState.isValid}
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