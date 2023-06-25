import "./Buttons.scss";
import { XCircle } from "lucide-react";
export const Buttons = {
  generalButton: ({ content }: { content?: string }) => (
    <div className="general-button">
      <p>{content}</p>
    </div>
  ),
  google: () => (
    <div className="google-auth-btn">
      <div
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/32px-Google_%22G%22_Logo.svg.png)",
        }}
        className="google-icon"
      ></div>
      Google
    </div>
  ),
  closedButton: () => (
    <div className="x-btn">
      <XCircle
        size={32}
        color="grey"
        fill="#fff"
        strokeWidth={3.5}
        absoluteStrokeWidth
      />
    </div>
  ),
};
