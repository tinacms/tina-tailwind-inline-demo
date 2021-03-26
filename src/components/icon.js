import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineGroup } from "react-tinacms-inline";
import {
  BiCodeBlock,
  BiLike,
  BiMapAlt,
  BiPalette,
  BiPieChartAlt2,
  BiPin,
  BiShield,
  BiSlider,
  BiStore,
  BiTennisBall,
  BiTestTube,
  BiTrophy,
  BiUserCircle,
  BiBeer,
  BiChat,
  BiCloud,
  BiCoffeeTogo,
  BiWorld,
} from "react-icons/bi";

const iconOptions = {
  BiCodeBlock: BiCodeBlock,
  BiLike: BiLike,
  BiMapAlt: BiMapAlt,
  BiPalette: BiPalette,
  BiPieChartAlt2: BiPieChartAlt2,
  BiPin: BiPin,
  BiShield: BiShield,
  BiSlider: BiSlider,
  BiStore: BiStore,
  BiTennisBall: BiTennisBall,
  BiTestTube: BiTestTube,
  BiTrophy: BiTrophy,
  BiUserCircle: BiUserCircle,
  BiBeer: BiBeer,
  BiChat: BiChat,
  BiCloud: BiCloud,
  BiCoffeeTogo: BiCoffeeTogo,
  BiWorld: BiWorld,
};

export const Icon = ({ icon }) => {
  const theme = React.useContext(ThemeContext);

  const IconSVG = React.useMemo(() => {
    return icon.name ? iconOptions[icon.name] : randomProperty(iconOptions);
  }, [icon.name]);

  const Component = React.useMemo(() => {
    const iconColor = icon.color === "primary" ? theme.color : icon.color;

    if (!IconSVG) return null;
    if (icon.style == "circle") {
      return (
        <div
          class={`inline-flex items-center justify-center flex-shrink-0 w-14 h-14 bg-${iconColor}-400 dark:bg-${iconColor}-500 text-${iconColor}-50 rounded-full`}
        >
          <IconSVG className={`w-9 h-9`} />
        </div>
      );
    } else {
      return (
        <IconSVG
          className={`w-14 h-14 text-${iconColor}-400 dark:text-${iconColor}-500`}
        />
      );
    }
  }, [icon.style, IconSVG, icon.color, theme.color]);

  return (
    <InlineGroup
      name="icon"
      focusRing={{ offset: 16 }}
      insetControls={true}
      fields={ICON_FIELDS[0].fields}
    >
      {Component}
    </InlineGroup>
  );
};

export const ICON_FIELDS = [
  {
    label: "Icon",
    name: "icon",
    component: "group",
    fields: [
      {
        name: "color",
        label: "Color",
        component: "select",
        options: [
          {
            label: "Primary (Theme)",
            value: "primary",
          },
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
      {
        name: "name",
        label: "Icon",
        component: "select",
        options: [
          {
            label: "Random",
            value: "",
          },
          {
            label: "Code Block",
            value: "BiCodeBlock",
          },
          {
            label: "Like",
            value: "BiLike",
          },
          {
            label: "Map",
            value: "BiMapAlt",
          },
          {
            label: "Palette",
            value: "BiPalette",
          },
          {
            label: "Pie Chart",
            value: "BiPieChartAlt2",
          },
          {
            label: "Pin",
            value: "BiPin",
          },
          {
            label: "Shield",
            value: "BiShield",
          },
          {
            label: "Setting Sliders",
            value: "BiSlider",
          },
          {
            label: "Store",
            value: "BiStore",
          },
          {
            label: "Tennis Ball",
            value: "BiTennisBall",
          },
          {
            label: "Test Tube",
            value: "BiTestTube",
          },
          {
            label: "Trophy",
            value: "BiTrophy",
          },
          {
            label: "User",
            value: "BiUserCircle",
          },
          {
            label: "Beer",
            value: "BiBeer",
          },
          {
            label: "Chat",
            value: "BiChat",
          },
          {
            label: "Cloud",
            value: "BiCloud",
          },
          {
            label: "Coffee",
            value: "BiCoffeeTogo",
          },
          {
            label: "World",
            value: "BiWorld",
          },
        ],
      },
      {
        name: "style",
        label: "Style",
        component: "radio-group",
        variant: "button",
        options: [
          {
            label: "Circle",
            value: "circle",
          },
          {
            label: "Float",
            value: "float",
          },
        ],
      },
    ],
  },
];

const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
