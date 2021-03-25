import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineGroup } from "react-tinacms-inline";

export const Actions = ({ actions }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div class="w-full">
      <InlineGroup
        name=""
        focusRing={{ offset: 16 }}
        insetControls={true}
        fields={ACTION_FIELDS}
      >
        <div class="flex flex-wrap items-center -mx-3">
          {actions &&
            actions.map(function (action, index) {
              let element = null;
              if (action.type === "button") {
                element = (
                  <button class="flex items-center px-7 py-3 mx-3 mt-auto font-semibold text-lg text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-lg hover:bg-gray-600 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap">
                    {action.label}
                  </button>
                );
              }
              if (action.type === "link") {
                element = (
                  <a
                    href="#"
                    class={`inline-flex items-center font-semibold mx-3 text-lg text-${theme.color}-600 hover:text-${theme.color}-400`}
                  >
                    {action.label}
                    <svg
                      class="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                    </svg>
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
        component: "select",
        options: [
          { label: "Button", value: "button" },
          { label: "Link", value: "link" },
        ],
      },
    ],
  },
];
