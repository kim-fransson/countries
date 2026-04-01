import {
  ListBoxItem as AriaListBoxItem,
  composeRenderProps,
  ListBoxItemProps,
  Text,
} from "react-aria-components";

import styles from "./DropDown.module.css";

function ListBoxItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <AriaListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(props.children, (children) =>
        typeof children === "string" ? (
          <Text slot='label'>{children}</Text>
        ) : (
          children
        ),
      )}
    </AriaListBoxItem>
  );
}

export function DropDownItem(props: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);
  return (
    <ListBoxItem
      {...props}
      textValue={textValue}
      className={styles.item}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {typeof children === "string" ? (
            <Text slot='label'>{children}</Text>
          ) : (
            children
          )}
        </>
      ))}
    </ListBoxItem>
  );
}
