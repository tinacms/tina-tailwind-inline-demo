import {
  InlineGroup,
  BlocksControls,
  InlineTextarea,
} from "react-tinacms-inline";
import { ACTION_FIELDS, Actions } from "./actions";

export const Hero = ({ data }) => {
  return (
    <section class="text-gray-700  body-font">
      <div class="container flex flex-col items-center px-8 py-24 mx-auto md:flex-row">
        <div class="flex flex-col    w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:w-3/5 md:pr-24 md:items-start md:mb-0 ">
          <h2 class="w-full	mb-4 text-sm font-bold tracking-wide text-black title-font">
            <InlineTextarea name="tagline" />
          </h2>
          <h1 class="w-full	mb-6 text-2xl font-bold tracking-tight text-blue-500 text-left lg:text-5xl title-font">
            <InlineTextarea name="headline" />
          </h1>
          <p class="w-full	mb-8 text-base leading-relaxed text-gray-700 text-left lg:text-1xl">
            <InlineTextarea name="text" />
          </p>
          <Actions actions={data.actions} />
        </div>
        <div class="w-100 md:w-1/2 lg:w-2/5">
          <InlineGroup
            name="image"
            focusRing={{ offset: 16 }}
            insetControls={true}
            fields={IMAGE_FIELDS}
          >
            <img
              class="object-cover object-center rounded-lg "
              alt={data.image.alt}
              src={data.image.src}
            />
          </InlineGroup>
        </div>
      </div>
    </section>
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

export const hero_template = {
  label: "Hero",
  defaultItem: {
    tagline: "TAGLINE ABOVE TEXT",
    headline: "This is a large display heading.",
    text:
      "Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page.",
    image: {
      src: "https://source.unsplash.com/collection/300768/720x500",
      alt: "Photo from Unsplash",
    },
    actions: [
      {
        label: "Primary Action",
        type: "button",
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
    ,
    ...ACTION_FIELDS,
  ],
};

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
