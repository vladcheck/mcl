import { ComponentProps, ReactNode } from "react";

export default function Row(props: ComponentProps<"div">): ReactNode {
  return (
    <div className="row" {...props}>
      {props.children}
    </div>
  );
}
