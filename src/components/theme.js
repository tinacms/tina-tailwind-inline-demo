import * as React from "react";
import { useForm, useFormScreenPlugin } from "tinacms";
import ThemeData from "../theme.json";

export const ThemeContext = React.createContext(ThemeData);

export const Theme = ({ children }) => {
  const [themeData, themeForm] = useForm({
    initialValues: ThemeData,
    label: "Theme",
    fields: [
      {
        name: "color",
        label: "Primary Color",
        component: "select",
        options: [
          {
            label: "Blue",
            value: "blue",
          },
          {
            label: "Teal",
            value: "teal",
          },
          {
            label: "Green",
            value: "green",
          },
          {
            label: "Red",
            value: "red",
          },
          {
            label: "Pink",
            value: "pink",
          },
          {
            label: "Purple",
            value: "purple",
          },
          {
            label: "Orange",
            value: "orange",
          },
          {
            label: "Yellow",
            value: "yellow",
          },
        ],
      },
      {
        name: "button.style",
        label: "Button Style",
        component: "select",
        options: [
          {
            label: "Rounded Full",
            value: "round",
          },
          {
            label: "Rounded Partial",
            value: "rounded",
          },
          {
            label: "Square",
            value: "square",
          },
        ],
      },
    ],
    onSubmit: (values) => {},
  });

  useFormScreenPlugin(themeForm);

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};
