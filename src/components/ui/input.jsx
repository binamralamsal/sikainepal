import styles from "./input.module.css";

export function Input({ children, className, href, textArea, ...restProps }) {
  const commonProps = {
    className: `${styles.input} ${className}`,
  };

  if (textArea)
    return (
      <textarea {...commonProps} {...restProps}>
        {children}
      </textarea>
    );

  return (
    <input {...commonProps} {...restProps}>
      {children}
    </input>
  );
}
