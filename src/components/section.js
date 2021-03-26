import * as React from "react";
import { ThemeContext } from "./theme";

export const Section = ({ variant = "default", children }) => {
  const theme = React.useContext(ThemeContext);

  let variantClasses = `relative text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-t border-b border-gray-100 dark:border-gray-600 body-font overflow-hidden`;

  if (variant === "tint") {
    variantClasses = `relative text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-800 border-t border-b border-gray-50 dark:border-gray-700 body-font overflow-hidden`;
  }

  if (variant === "primary") {
    variantClasses = `relative text-gray-700 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border-t border-b border-gray-100 dark:border-gray-600 body-font overflow-hidden`;
  }

  return <section class={variantClasses}>{children}</section>;
};
