import * as React from "react";
import { ThemeContext } from "./theme";
import {
  InlineBlocks,
  InlineGroup,
  BlocksControls,
  InlineTextarea,
} from "react-tinacms-inline";

export const Footer = ({ data, name = "" }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <footer class="text-white bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-900 dark:to-gray-800 body-font">
      <InlineGroup
        name="footer"
        focusRing={{ offset: -16 }}
        insetControls={true}
        fields={FOOTER_FIELDS}
      >
        <div className="relative">
          <div className="relative container mx-auto flex pt-8 lg:pt-3 z-10">
            <div class="w-full flex flex-col lg:flex-row flex-wrap py-12 px-8">
              <div class="mb-8 lg:mr-48 flex-grow-0 inline-block">
                <a class="">
                  <h2 class="text-lg font-bold tracking-tight text-white uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500">
                    {name}
                  </h2>
                </a>
              </div>
              <InlineBlocks
                direction="horizontal"
                className="flex-grow flex flex-wrap justify-between -mx-6"
                name="navlist"
                blocks={FOOTER_BLOCKS}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden animate-pulse absolute top-0 left-0 w-full h-full flex flex-row justify-center`}
          >
            <span
              className={`absolute opacity-30 w-2/3 h-64 bg-${theme.color}-500 -bottom-48 rounded-t-full`}
              style={{ filter: "blur(10rem)" }}
            ></span>
          </div>
          <div
            className={`relative w-full h-1 z-20 bg-gradient-to-r from-gray-800 via-${theme.color}-400 to-gray-800`}
          ></div>
          <div class="bg-gray-800 dark:bg-gray-900 z-0 relative">
            <div class="container flex flex-col flex-wrap p-7 mx-auto sm:flex-row justify-center">
              <div class="flex justify-center">
                {data.social.facebook && (
                  <a
                    href={data.social.facebook}
                    class={`text-white hover:text-${theme.color}-500`}
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                )}
                {data.social.twitter && (
                  <a
                    href={data.social.twitter}
                    class={`ml-4 text-white hover:text-${theme.color}-500`}
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                )}
                {data.social.instagram && (
                  <a
                    href={data.social.instagram}
                    class={`ml-4 text-white hover:text-${theme.color}-500`}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </InlineGroup>
    </footer>
  );
};

export const FooterNavBlock = ({ index, data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div class="flex-grow px-6">
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <h3
          class={`mb-3 text-sm font-semibold tracking-widest text-${theme.color}-400 uppercase title-font`}
        >
          <InlineTextarea name="title" />
        </h3>
        <nav class="pb-8 list-none">
          {data.items &&
            data.items.map(function (item, index) {
              return (
                <li>
                  <a
                    href={item.link}
                    class="text-sm text-gray-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
        </nav>
      </BlocksControls>
    </div>
  );
};

export const footer_nav_template = {
  label: "Footer Nav",
  defaultItem: {
    title: "Product",
    items: [
      {
        label: "Form Templates",
        link: "#",
      },
      {
        label: "Landing Page",
        link: "#",
      },
      {
        label: "Figma Files",
        link: "#",
      },
      {
        label: "Background Info",
        link: "#",
      },
    ],
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "items",
      label: "Nav Items",
      component: "group-list",
      itemProps: (item) => ({
        label: item.label,
      }),
      fields: [
        {
          name: "label",
          label: "Label",
          component: "text",
        },
        {
          name: "link",
          label: "Link",
          component: "text",
        },
      ],
    },
  ],
};

const FOOTER_BLOCKS = {
  nav: {
    Component: FooterNavBlock,
    template: footer_nav_template,
  },
};

export const FOOTER_FIELDS = [
  {
    label: "Nav List",
    name: "navlist",
    component: "blocks",
    itemProps: (item) => ({
      label: item.title,
    }),
    templates: {
      nav: footer_nav_template,
    },
  },
  {
    name: "social",
    label: "Social Media",
    component: "group",
    fields: [
      {
        name: "facebook",
        label: "Facebook",
        component: "text",
      },
      {
        name: "twitter",
        label: "Twitter",
        component: "text",
      },
      {
        name: "instagram",
        label: "Instagram",
        component: "text",
      },
    ],
  },
];
