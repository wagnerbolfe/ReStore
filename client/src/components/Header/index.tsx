import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import LogoImg from "../../assets/logo.png";
import { Info, Key, ShoppingCart, UserPlus } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/configureStore";
import SignedInMenu from "../SignedInMenu";

export function Header() {
  const { basket } = useAppSelector(state => state.basket);
  const { user } = useAppSelector(state => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <div className="container">
        {user ? (
          <NavLink to="/catalog">
            <img src={LogoImg} alt="" />
          </NavLink>
        ) : (
          <NavLink to="/">
            <img src={LogoImg} alt="" />
          </NavLink>
        )}

        <HeaderButtonsContainer>
          <NavLink to="/about">
            <HeaderButton $variant="purple">
              <Info size={20} weight="fill" />
              Sobre
            </HeaderButton>
          </NavLink>

          {user ? (
            <SignedInMenu />
          ) : (
            <>
              <NavLink to="/login">
                <HeaderButton $variant="purple">
                  <Key size={20} weight="fill" />
                  Login
                </HeaderButton>
              </NavLink>

              <NavLink to="/register">
                <HeaderButton $variant="purple">
                  <UserPlus size={20} weight="fill" />
                  Registrar
                </HeaderButton>
              </NavLink>
            </>
          )}

          {itemCount! >= 1 && (
            <NavLink to="/completeOrder">
              <HeaderButton $variant="yellow">
                {itemCount! >= 1 && <span>{itemCount}</span>}
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </NavLink>
          )}
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer >
  );
}