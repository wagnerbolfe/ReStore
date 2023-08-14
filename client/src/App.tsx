import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      <GlobalStyle />
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
