import SignInModal from "@/components/Auth/SignInModal/SignInModal";
import React from "react";
import "./sign-in.scss";

const page = () => {
  return (
    <div className="sign-in-content">
      <SignInModal closedButton />
    </div>
  );
};

export default page;
