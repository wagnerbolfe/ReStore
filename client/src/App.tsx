import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import LoadingComponent from "./components/LoadingComponent";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./layouts/DefaultLayout/styles";
import { Header } from "./components/Header";
import { useAppDispatch } from "./store/configureStore";
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from "./pages/Account/accountSlice";
import { fetchBasketAsync } from "./pages/CompleteOrder/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])

  if (loading) return <LoadingComponent />
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      <GlobalStyle />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
