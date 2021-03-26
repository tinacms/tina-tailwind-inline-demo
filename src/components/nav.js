import * as React from "react";
import { ThemeContext } from "./theme";
import { InlineText, InlineGroup } from "react-tinacms-inline";
import { Section } from "./section";
import { Icon, ICON_FIELDS } from "./icon";

export const Nav = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Section>
      <InlineGroup
        focusRing={{ offset: -12 }}
        insetControls={true}
        name="nav"
        fields={NAV_FIELDS}
      >
        <div class="flex flex-col flex-wrap py-8 px-8 lg:px-12 mx-auto md:items-center md:flex-row">
          <a
            href="#"
            class="pr-2 lg:pr-8 mb-8 md:mb-0 focus:outline-none flex items-center"
          >
            <div class="inline-flex items-center">
              <div class={`mr-2`}>
                <InlineGroup name="wordmark" focusRing={false}>
                  <Icon icon={data.wordmark.icon} />
                </InlineGroup>
              </div>
              <h2 class="font-bold tracking-tight transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold">
                <InlineText focusRing={{ offset: 8 }} name="wordmark.name" />
              </h2>
            </div>
          </a>
          <nav class="flex flex-wrap items-center justify-start xl:justify-end text-base md:ml-auto">
            {data.items.map(function (item, index) {
              return (
                <a
                  href="#"
                  class={`mr-10 last:mr-0 xl:ml-16 xl:mr-0 text-sm tracking-wide font-semibold text-gray-600 dark:text-gray-200`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </InlineGroup>
    </Section>
  );
};

export const NAV_FIELDS = [
  {
    label: "Wordmark",
    name: "wordmark",
    component: "group",
    fields: [
      ...ICON_FIELDS,
      {
        label: "Name",
        name: "name",
        component: "text",
      },
    ],
  },
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
