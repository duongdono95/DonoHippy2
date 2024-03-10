import Logo from "@/assets/Logo";
import { Badge, Button, Divider } from "@mui/material";
import { ShoppingCart, UserCircle } from "lucide-react";
import React from "react";

const NavBar = () => {
  const user = true;
  return (
    <div
      className="sticky top-0 z-50 max-w-7xl w-full mx-auto p-2.5 flex justify-between "
      style={{ borderBottom: "1px solid var(--primary02)" }}
    >
      <Logo />

      {user ? (
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <UserCircle /> <p>My Account</p>
          </div>
          <Divider orientation="vertical" />
          <Badge badgeContent={1} color="primary">
            <ShoppingCart size={20} />
          </Badge>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            color="secondary"
            sx={{ color: "var(--text)" }}
          >
            Login
          </Button>
          <Divider orientation="vertical" />
          <Button color="primary">
            Create Account with us
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
