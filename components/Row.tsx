import { ComponentProps } from "react";

export default function Row(props: ComponentProps<"div">) {
  return (
    <div className="row" {...props}>
      {props.children}
    </div>
  );
}
