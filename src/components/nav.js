import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineText, InlineGroup } from "react-tinacms-inline";
import { Section } from "./section";

export const Nav = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Section>
      <div class="flex flex-col flex-wrap py-8 px-8 lg:px-12 mx-auto md:items-center md:flex-row">
        <a
          href="#"
          class="pr-2 lg:pr-8 mb-4 md:mb-0 focus:outline-none flex items-center"
        >
          <div class="inline-flex items-center">
            <div
              class={`w-7 h-7 mr-2 rounded-full bg-${theme.color}-500 flex content-center items-center justify-center`}
            >
              <span class="text-white text-lg leading-none font-bold title-font absolute">
                {data.name ? data.name.charAt(0) : ""}
              </span>
            </div>
            <h2 class="font-bold tracking-tight transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold">
              <InlineText focusRing={{ offset: 8 }} name="nav.name" />
            </h2>
          </div>
        </a>
        <nav class="flex flex-wrap items-center justify-end text-base md:ml-auto">
          <InlineGroup
            focusRing={{ offset: 16 }}
            insetControls={true}
            name="nav"
            fields={NAV_FIELDS}
          >
            {data.items.map(function (item, index) {
              return (
                <a
                  href="#"
                  class={`ml-8 text-sm tracking-wide font-semibold text-gray-600 dark:text-gray-200`}
                >
                  {item.label}
                </a>
              );
            })}
          </InlineGroup>
        </nav>
      </div>
    </Section>
  );
};

export const NAV_FIELDS = [
  {
    label: "Nav Items",
    name: "items",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Nav Link",
      link: "/",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Link",
        name: "link",
        component: "text",
      },
    ],
  },
];
