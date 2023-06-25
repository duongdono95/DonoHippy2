import React from "react";
import "./user-auth-form.scss";
import { Buttons } from "@/components/Buttons/Buttons";
const UserAuthForm = () => {
  return (
    <div className="user-auth-form">
      <div className="form-group">
        <label htmlFor="username"></label>
        <input type="text" id="username" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="username"></label>
        <input type="password" id="username" placeholder="Password" />
      </div>
      <div className="form-group">
        <Buttons.generalButton content="login" />
      </div>
      <div className="form-group">
        <Buttons.google />
      </div>
    </div>
  );
};

export default UserAuthForm;
