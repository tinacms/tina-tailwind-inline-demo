import * as React from "react";
import { ThemeContext } from "./theme";

export const Section = ({ variant = "default", children }) => {
  const theme = React.useContext(ThemeContext);

  let variantClasses = `relative transition duration-150 ease-out text-gray-800 dark:text-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 body-font overflow-hidden`;

  if (variant === "tint") {
    variantClasses = `relative transition duration-150 ease-out text-gray-700 dark:text-gray-100 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 body-font overflow-hidden`;
  }

  if (variant === "primary") {
    variantClasses = `relative transition duration-150 ease-out text-gray-700 dark:text-gray-100 bg-${theme.color}-700 bg-gradient-to-br from-${theme.color}-500 to-${theme.color}-300 dark:from-${theme.color}-500 dark:to-${theme.color}-700 body-font overflow-hidden`;
  }

  return <section className={variantClasses}>{children}</section>;
};

export const SectionFields = [
  {
    name: "color",
    label: "Color",
    component: "select",
    options: [
      {
        label: "Default",
        value: "default",
      },
      {
        label: "Tint",
        value: "tint",
      },
      {
        label: "Primary",
        value: "primary",
      },
    ],
  },
];
