import * as React from "react";
import { ThemeContext } from "./theme";
import {
  InlineBlocks,
  InlineGroup,
  BlocksControls,
  InlineTextarea,
} from "react-tinacms-inline";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = ({ data, name = "" }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <footer className="text-white bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-900 dark:to-gray-800 body-font">
      <InlineGroup
        name="footer"
        focusRing={{ offset: -16 }}
        insetControls={true}
        fields={FOOTER_FIELDS}
      >
        <div className="relative">
          <div className="relative container mx-auto flex pt-8 lg:pt-3 z-10">
            <div className="w-full flex flex-col lg:flex-row flex-wrap py-12 px-8">
              <div className="mb-8 lg:mr-48 flex-grow-0 inline-block">
                <a className="">
                  <h2 className="text-lg font-bold tracking-tight text-white uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500">
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
            className={`overflow-hidden absolute top-0 left-0 w-full h-full flex flex-row justify-center`}
          >
            <span
              className={`absolute opacity-30 w-2/3 h-64 bg-${theme.color}-500 -bottom-48 rounded-t-full`}
              style={{ filter: "blur(10rem)" }}
            ></span>
          </div>
          <div
            className={`relative w-full h-1 opacity-90 z-10 bg-gradient-to-r from-gray-800 via-${theme.color}-400 to-gray-800`}
          ></div>
          <div className="bg-gray-800 dark:bg-gray-900 z-0 relative">
            <div className="container flex flex-col flex-wrap p-7 mx-auto sm:flex-row justify-center">
              <div className="flex justify-center">
                {data.social.facebook && (
                  <a
                    href={data.social.facebook}
                    target="_blank"
                    className="mx-2"
                  >
                    <FaFacebookF
                      className={`h-6 w-auto text-white hover:text-${theme.color}-500`}
                    />
                  </a>
                )}
                {data.social.twitter && (
                  <a
                    href={data.social.twitter}
                    target="_blank"
                    className="mx-2"
                  >
                    <FaTwitter
                      className={`h-6 w-auto text-white hover:text-${theme.color}-500`}
                    />
                  </a>
                )}
                {data.social.instagram && (
                  <a
                    href={data.social.instagram}
                    target="_blank"
                    className="mx-2"
                  >
                    <FaInstagram
                      className={`h-6 w-auto text-white hover:text-${theme.color}-500`}
                    />
                  </a>
                )}
                {data.social.github && (
                  <a href={data.social.github} target="_blank" className="mx-2">
                    <FaGithub
                      className={`h-6 w-auto text-white hover:text-${theme.color}-500`}
                    />
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
    <div className="flex-grow px-6">
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <h3
          className={`mb-3 text-sm font-semibold tracking-widest text-${theme.color}-400 uppercase title-font`}
        >
          <InlineTextarea name="title" />
        </h3>
        <nav className="pb-8 list-none">
          {data.items &&
            data.items.map(function (item, index) {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm text-gray-200 hover:text-white"
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
      {
        name: "github",
        label: "Github",
        component: "text",
      },
    ],
  },
];
