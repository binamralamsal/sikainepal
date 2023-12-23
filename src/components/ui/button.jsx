import Link from "next/link";
import styles from "./button.module.css";

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  ...restProps
}) {
  const commonProps = {
    className: `${styles.btn} ${styles[variant]} ${styles[size]}`,
  };

  if (href)
    return (
      <Link href={href} {...commonProps} {...restProps}>
        {children}
      </Link>
    );

  return (
    <button {...commonProps} {...restProps}>
      {children}
    </button>
  );
}
