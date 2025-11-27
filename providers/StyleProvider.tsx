import { PropsWithChildren } from "react";
import "./style/reset.css";
import "./style/style.css";

export default function StyleProvider({ children }: PropsWithChildren) {
  return children;
}
