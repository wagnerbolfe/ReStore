import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getCookie } from "./utils/util";
import agent from "./api/agent";
import LoadingComponent from "./components/LoadingComponent";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./layouts/DefaultLayout/styles";
import { Header } from "./components/Header";
import { useAppDispatch } from "./store/configureStore";
import { setBasket } from "./pages/CompleteOrder/basketSlice";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [dispatch])

  if (loading) return <LoadingComponent />
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
