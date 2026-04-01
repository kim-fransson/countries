import clsx from "clsx";

import styles from "./InfoList.module.css";

export interface InfoListItem {
  label: string;
  value: string;
}

interface InfoListProps {
  items: InfoListItem[];
  variant?: "compact" | "detailed";
  className?: string;
}

function InfoList({ items, variant = "compact", className }: InfoListProps) {
  return (
    <dl className={clsx(styles.infoList, styles[variant], className)}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default InfoList;
