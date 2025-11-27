import { ComponentProps, ReactNode } from "react";

/**
 * @function Row
 * @description a container component that has `display: flex` on it, making it act as a 'row'
 * @param {ComponentProps<"div">} props - props of a `<div>` tag
 * @returns `ReactNode`
 * @example
 * 
 * <Row>
 *  <div class="employee-card">...</div>
 *  <div class="employee-card">...</div>
 *  <div class="employee-card">...</div>
 * </Row>
 * 
*/
export default function Row(props: ComponentProps<"div">): ReactNode {
  return (
    <div className="row" {...props}>
      {props.children}
    </div>
  );
}
