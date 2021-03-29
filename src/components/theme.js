import * as React from "react";
import { useForm, useFormScreenPlugin } from "tinacms";
import ThemeData from "../theme.json";

export const ThemeContext = React.createContext(ThemeData);

const getInitialThemeMode = (_) => {
  if (typeof window !== "undefined") {
    if (window.localStorage) {
      const storedPrefs = window.localStorage.getItem("theme-mode");

      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

const updateRenderColorMode = (themeMode) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(themeMode);
  }
};

export const Theme = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState(getInitialThemeMode);

  const toggleThemeMode = () => {
    let newMode = "";

    if (themeMode === "light") {
      newMode = "dark";
    } else {
      newMode = "light";
    }

    setThemeMode(newMode);

    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("theme-mode", newMode);
    }
  };

  React.useEffect(() => {
    updateRenderColorMode(themeMode);
  }, [themeMode]);

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
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode, ...themeData }}>
      {children}
    </ThemeContext.Provider>
  );
};
