import {
  ComponentProps,
  HTMLInputTypeAttribute,
  PropsWithChildren,
} from "react";
import Row from "../Row.tsx";

export interface InputBlockProps extends Omit<ComponentProps<"input">, "id"> {
  label: string;
  id: string | number;
  type: HTMLInputTypeAttribute;
  horizontal?: boolean;
}

export default function InputBlock(props: InputBlockProps) {
  if (props.horizontal === undefined) {
    props.horizontal = true; // default
  }

  const Container = props.horizontal
    ? ({ children }: PropsWithChildren) => <Row>{children}</Row>
    : ({ children }: PropsWithChildren) => <div>{children}</div>;

  return (
    <Container>
      <label htmlFor={props.id.toString()}></label>
      <input {...props} id={props.id.toString()} type={props.type} />
    </Container>
  );
}
