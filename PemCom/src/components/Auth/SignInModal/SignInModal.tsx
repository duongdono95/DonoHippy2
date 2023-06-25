import { Icons } from "@/components/Icons/Icons";
import React from "react";
import UserAuthForm from "../UserAuthForm/UserAuthForm";
import "./SignInModal.scss";
import { Buttons } from "@/components/Buttons/Buttons";
import 'Link' from 'next/Link'
const SignInModal = ({ closedButton }: { closedButton?: boolean }) => {
  return (
    <div className="sign-in-modal">
      {closedButton ? (
        <div className="close-btn">
          <Buttons.closedButton />
        </div>
      ) : (
        <p>Back to Home Page</p>
      )}
      <Icons.logo />
      <h1>Welcome Back</h1>
      <p className="policy">
        By continuing, you are setting up a PemTalk account and agree to our
        User Agreement and Privacy Policy.
      </p>
      <UserAuthForm />
      <p className="option">
        New to PemTalk? <span>Sign Up</span>
      </p>
    </div>
  );
};

export default SignInModal;
