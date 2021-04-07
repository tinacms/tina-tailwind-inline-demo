import * as React from "react";
import { ThemeContext } from "./theme";
import {
  InlineGroup,
  BlocksControls,
  InlineTextarea,
} from "react-tinacms-inline";
import { ACTION_FIELDS, Actions } from "./actions";
import { Section } from "./section";

export const Hero = ({ data }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Section variant={data.style.color}>
      <div className="w-full pt-20 lg:py-56 lg:text-left">
        <div className="px-8 pb-20 lg:pb-0 lg:w-1/2 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="w-full	mb-5 text-md font-bold tracking-wide title-font">
              <InlineTextarea name="tagline" />
            </h2>
            <h3
              className={`w-full relative	mb-6 text-5xl font-extrabold tracking-normal text-left title-font`}
            >
              {data.style.color === "primary" ? (
                <span
                  className={`absolute z-20 pointer-events-none w-full top-0 -bottom-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800`}
                  style={{
                    textShadow: `0 0.5rem 3rem rgba(var(--color-rgb-${theme.color}-600),0.35)`,
                  }}
                >
                  {data.headline}
                </span>
              ) : (
                <span
                  className={`absolute z-20 pointer-events-none w-full top-0 -bottom-4 bg-clip-text text-transparent bg-gradient-to-r from-${theme.color}-400 to-${theme.color}-600`}
                  style={{
                    textShadow: `0 0.5rem 3rem rgba(var(--color-rgb-${theme.color}-600),0.35)`,
                  }}
                >
                  {data.headline}
                </span>
              )}

              <span className="-z-1">
                <InlineTextarea name="headline" />
              </span>
            </h3>
            <p className="w-full max-w-xl mb-8 opacity-80 transition duration-150 ease-out text-left text-lg leading-relaxed lg:text-xl lg:leading-relaxed">
              <InlineTextarea name="text" />
            </p>
            <Actions actions={data.actions} />
          </div>
        </div>
        <div className="relative w-full h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <InlineGroup
            name="image"
            focusRing={{ offset: 0, borderRadius: 0 }}
            insetControls={true}
            fields={IMAGE_FIELDS}
          >
            <img
              className="lg:absolute lg:inset-0 w-full h-auto max-h-96 md:max-h-128 lg:max-h-full lg:h-full object-cover"
              alt={data.image.alt}
              src={data.image.src}
            />
          </InlineGroup>
        </div>
      </div>
    </Section>
  );
};

export function HeroBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Hero data={data} />
    </BlocksControls>
  );
}

export const IMAGE_FIELDS = [
  {
    name: "src",
    label: "Image Source",
    component: "text",
  },
  {
    name: "alt",
    label: "Alt Text",
    component: "text",
  },
];

export const hero_template = {
  label: "Hero",
  defaultItem: {
    tagline: "TAGLINE ABOVE TEXT",
    headline: "This is a large display heading.",
    text:
      "Give your team a contextual, intuitive editing experience without sacrificing code quality.",
    image: {
      src: "/canal.jpg",
      alt: "Photo from Unsplash",
    },
    actions: [
      {
        label: "Primary Action",
        type: "button",
        icon: "true",
      },
      {
        label: "Learn More",
        type: "link",
      },
    ],
    style: {
      color: "tint",
    },
  },
  fields: [
    {
      name: "",
      label: "Text",
      component: "group",
      fields: [
        {
          name: "tagline",
          label: "Tagline",
          component: "text",
        },
        {
          name: "headline",
          label: "Headline",
          component: "text",
        },
        {
          name: "text",
          label: "Text",
          component: "textarea",
        },
      ],
    },
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },
    ...ACTION_FIELDS,
    {
      name: "style",
      label: "Style",
      component: "group",
      fields: [
        {
          name: "color",
          label: "Color",
          component: "select",
          options: [
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Tint",
              value: "tint",
            },
            {
              label: "Primary",
              value: "primary",
            },
          ],
        },
      ],
    },
  ],
};
