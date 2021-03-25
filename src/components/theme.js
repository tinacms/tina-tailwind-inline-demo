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
            label: "Pink",
            value: "pink",
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
            label: "Purple",
            value: "purple",
          },
          {
            label: "Yellow",
            value: "yellow",
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
