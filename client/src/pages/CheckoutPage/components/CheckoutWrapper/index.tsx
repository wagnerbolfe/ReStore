import { useEffect, useState } from "react";
import agent from "../../../../api/agent";
import { loadStripe } from '@stripe/stripe-js';
import { setBasket } from "../../../CompleteOrder/basketSlice";
import { useAppDispatch } from "../../../../store/configureStore";
import LoadingComponent from "../../../../components/LoadingComponent";
import CheckoutPage from "../..";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51Nj3U3DKLrF4AT2cSaF2irkynbcsl3A1RKSbfMCsTo9DnC1iGXPfNErLNoQLj3pR1dIO7z6zaJ57T0NOhdi4qAqA00UMPFiWdz');

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Payments.createPaymentIntent()
      .then(response => dispatch(setBasket(response)))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [dispatch]);

  if (loading) return <LoadingComponent />

  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  )
}