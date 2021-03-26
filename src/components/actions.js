import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineGroup } from "react-tinacms-inline";
import { BiRightArrowAlt } from "react-icons/bi";

export const Actions = ({ actions }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div class="w-full">
      <InlineGroup
        name=""
        focusRing={{ offset: { x: 16, y: 8 } }}
        insetControls={true}
        fields={ACTION_FIELDS}
      >
        <div class="flex flex-wrap items-center -mx-3 -my-2">
          {actions &&
            actions.map(function (action, index) {
              let element = null;
              if (action.type === "button") {
                element = (
                  <button
                    class={`z-10 relative flex items-center px-7 py-3 mx-3 my-2 font-semibold text-lg text-white transition duration-500 ease-in-out ${
                      theme.button.style === "rounded" && `rounded-lg`
                    } ${
                      theme.button.style === "round" && `rounded-full`
                    } transform bg-${theme.color}-500 hover:bg-${
                      theme.color
                    }-600 bg-gradient-to-r from-${theme.color}-400 to-${
                      theme.color
                    }-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                    style={{ textShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
                  >
                    {action.label}
                    {action.icon && (
                      <BiRightArrowAlt
                        className={`ml-1 -mr-1 w-6 h-6 text-${theme.color}-50`}
                      />
                    )}
                    <div
                      class={`pointer-events-none absolute top-2 opacity-30 dark:opacity-50 left-0 w-full h-full rounded-full bg-${theme.color}-400 -z-1`}
                      style={{ filter: "blur(3rem)" }}
                    ></div>
                  </button>
                );
              }
              if (action.type === "link" || action.type === "linkExternal") {
                element = (
                  <a
                    href="#"
                    class={`inline-flex items-center font-semibold mx-3 my-2 text-lg text-${theme.color}-600 dark:text-${theme.color}-400 hover:text-${theme.color}-400 dark:hover:text-${theme.color}-500`}
                  >
                    {action.label}
                    {action.icon && (
                      <BiRightArrowAlt
                        className={`ml-0 mr-0 w-6 h-6 text-${theme.color}-500`}
                      />
                    )}
                  </a>
                );
              }
              return element;
            })}
        </div>
      </InlineGroup>
    </div>
  );
};

export const ACTION_FIELDS = [
  {
    label: "Actions",
    name: "actions",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Action Label",
      type: "button",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Type",
        name: "type",
        component: "radio-group",
        variant: "button",
        options: [
          { label: "Button", value: "button" },
          { label: "Link", value: "link" },
        ],
      },
      {
        label: "Icon",
        name: "icon",
        component: "toggle",
      },
    ],
  },
];
