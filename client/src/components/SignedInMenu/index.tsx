import { Fade, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { signOut } from "../../pages/Account/accountSlice";
import { HeaderButton } from "../Header/styles";
import { User } from "@phosphor-icons/react";
import { clearBasket } from "../../pages/CompleteOrder/basketSlice";
import { Link } from "react-router-dom";

export default function SignedInMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.account);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <HeaderButton $variant="purple" onClick={handleClick}>
        <User size={20} weight="fill" />
        {(user?.email)?.toUpperCase()}
      </HeaderButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem component={Link} to='/orders'>Pedidos</MenuItem>
        <MenuItem onClick={() => {
          dispatch(signOut());
          dispatch(clearBasket());
        }}>Sair</MenuItem>
      </Menu>
    </div>
  );
}