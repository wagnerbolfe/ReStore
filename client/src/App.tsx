import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutContainer } from "./layouts/DefaultLayout/styles";
import { useAppDispatch } from "./store/configureStore";
import { fetchCurrentUser } from "./pages/Account/accountSlice";
import { fetchBasketAsync } from "./pages/CompleteOrder/basketSlice";
import LoadingComponent from "./components/LoadingComponent";
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from "./pages/Catalog";

function App() {
  const location = useLocation();
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      <GlobalStyle />
      {loading ? <LoadingComponent />
        : location.pathname === '/' ? <HomePage />
          : <LayoutContainer>
            <Outlet />
          </LayoutContainer>
      }

    </ThemeProvider>
  );
}

export default App;
