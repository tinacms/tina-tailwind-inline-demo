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
                  <button
                    class={`flex items-center px-7 py-3 mx-3 mt-auto font-semibold text-lg text-white transition duration-500 ease-in-out rounded-lg transform bg-${theme.color}-500 hover:bg-${theme.color}-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap`}
                  >
                    {action.label}
                    <BiRightArrowAlt
                      className={`ml-1 -mr-1 w-6 h-6 text-${theme.color}-50`}
                    />
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
                    <BiRightArrowAlt
                      className={`ml-0 mr-0 w-6 h-6 text-${theme.color}-500`}
                    />
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
