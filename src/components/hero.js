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
    <Section variant="tint">
      <div class="w-full pt-16 lg:py-56 lg:text-left">
        <div class="px-8 pb-14 lg:pb-0 lg:w-1/2 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 class="w-full	mb-4 text-md font-bold tracking-wide title-font">
              <InlineTextarea name="tagline" />
            </h2>
            <h3
              class={`w-full relative	mb-6 text-4xl font-extrabold tracking-normal	 text-left lg:text-5xl title-font`}
            >
              <span
                className={`absolute z-10 pointer-events-none w-full h-full bg-clip-text text-transparent bg-gradient-to-r from-${theme.color}-400 to-${theme.color}-600`}
              >
                {data.headline}
              </span>
              <span className="-z-1">
                <InlineTextarea name="headline" />
              </span>
            </h3>
            <p class="w-full max-w-xl mb-8 text-base opacity-80 text-left text-lg leading-relaxed lg:text-xl lg:leading-relaxed">
              <InlineTextarea name="text" />
            </p>
            <Actions actions={data.actions} />
          </div>
        </div>
        <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <InlineGroup
            name="image"
            focusRing={{ offset: -16 }}
            insetControls={true}
            fields={IMAGE_FIELDS}
          >
            <img
              class="absolute inset-0 w-full h-full object-cover"
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
  },
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
    {
      name: "image",
      label: "Image",
      component: "group",
      fields: IMAGE_FIELDS,
    },
    ...ACTION_FIELDS,
  ],
};
