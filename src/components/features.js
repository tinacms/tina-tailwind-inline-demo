import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";
import { Icon } from "./icon";
import { ACTION_FIELDS, Actions } from "./actions";

export const FeatureBlock = ({ index, data }) => {
  return (
    <div class="px-8 py-6 lg:w-1/2 xl:w-1/3 w-full">
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <div
          class={`inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 mr-3 text-gray-50 bg-${data.icon.color}-400 rounded-full`}
        >
          <Icon name={data.icon.name} />
        </div>
        <h3 class="mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font">
          <InlineTextarea name="title" />
        </h3>
        <p class="mb-4 text-base leading-relaxed">
          <InlineTextarea name="text" />
        </p>
        <Actions actions={data.actions} />
      </BlocksControls>
    </div>
  );
};

export const feature_template = {
  label: "Feature",
  defaultItem: {
    icon: {
      color: "blue",
      name: "",
    },
    title: "Feature Heading Text",
    text:
      "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
    actions: [
      {
        label: "Learn More",
        type: "link",
      },
    ],
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    {
      name: "icon",
      label: "Icon",
      component: "group",
      fields: [
        {
          name: "color",
          label: "Color",
          component: "select",
          options: [
            {
              label: "Blue",
              value: "blue",
            },
            {
              label: "Pink",
              value: "pink",
            },
            {
              label: "Green",
              value: "green",
            },
            {
              label: "Red",
              value: "red",
            },
            {
              label: "Purple",
              value: "purple",
            },
            {
              label: "Yellow",
              value: "yellow",
            },
          ],
        },
        {
          name: "name",
          label: "Icon",
          component: "select",
          options: [
            {
              label: "Random",
              value: "",
            },
            {
              label: "Code Block",
              value: "BiCodeBlock",
            },
            {
              label: "Like",
              value: "BiLike",
            },
            {
              label: "Map",
              value: "BiMapAlt",
            },
            {
              label: "Palette",
              value: "BiPalette",
            },
            {
              label: "Pie Chart",
              value: "BiPieChartAlt2",
            },
            {
              label: "Pin",
              value: "BiPin",
            },
            {
              label: "Shield",
              value: "BiShield",
            },
            {
              label: "Setting Sliders",
              value: "BiSlider",
            },
            {
              label: "Store",
              value: "BiStore",
            },
            {
              label: "Tennis Ball",
              value: "BiTennisBall",
            },
            {
              label: "Test Tube",
              value: "BiTestTube",
            },
            {
              label: "Trophy",
              value: "BiTrophy",
            },
            {
              label: "User",
              value: "BiUserCircle",
            },
            {
              label: "Beer",
              value: "BiBeer",
            },
            {
              label: "Chat",
              value: "BiChat",
            },
            {
              label: "Cloud",
              value: "BiCloud",
            },
            {
              label: "Coffee",
              value: "BiCoffeeTogo",
            },
            {
              label: "World",
              value: "BiWorld",
            },
          ],
        },
      ],
    },
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    ...ACTION_FIELDS,
  ],
};

export const Features = ({ data }) => {
  return (
    <section class="text-gray-700 body-font bg-gray-50 border-b border-t border-gray-100">
      <div class="container py-24 mx-auto">
        <InlineBlocks
          direction="horizontal"
          className="flex flex-wrap text-left"
          name="items"
          blocks={FEATURE_BLOCKS}
        />
      </div>
    </section>
  );
};

export function FeaturesBlock(props) {
  return (
    <BlocksControls
      index={props.index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Features data={props.data} />
    </BlocksControls>
  );
}

export const features_template = {
  label: "Features",
  defaultItem: {
    items: [
      {
        _template: "feature",
        icon: {
          color: "green",
          name: "BiTrophy",
        },
        title: "Longer Information 1",
        text:
          "By eleven o'clock the next day we were well upon our way to the old English capital.",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "red",
          name: "BiPieChartAlt2",
        },
        title: "Longer Information 2",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "yellow",
          name: "BiMapAlt",
        },
        title: "Longer Information 3",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
          },
        ],
      },
    ],
  },
  fields: [
    {
      label: "Features",
      name: "items",
      component: "blocks",
      itemProps: (item) => ({
        label: item.title,
      }),
      templates: {
        feature: feature_template,
      },
    },
  ],
};

const FEATURE_BLOCKS = {
  feature: {
    Component: FeatureBlock,
    template: feature_template,
  },
};
