import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
} from "react-tinacms-inline";
import { Icon, ICON_FIELDS } from "./icon";
import { Actions, ACTION_FIELDS } from "./actions";

export const FeatureBlock = ({ index, data }) => {
  return (
    <div class="px-8 py-6 lg:w-1/2 xl:w-1/3 w-full">
      <BlocksControls
        index={index}
        focusRing={{ offset: 16 }}
        insetControls={false}
      >
        <div class={`mb-5`}>
          <Icon icon={data.icon} />
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
      color: "primary",
      name: "",
      style: "circle",
    },
    title: "Feature Heading Text",
    text:
      "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
    actions: [
      {
        label: "Learn More",
        type: "link",
        icon: "true",
      },
    ],
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    ...ICON_FIELDS,
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
    <section class="text-gray-700 body-font bg-gray-50 border-b border-t border-gray-100 h-full">
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
          style: "circle",
        },
        title: "Longer Information 1",
        text:
          "By eleven o'clock the next day we were well upon our way to the old English capital.",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "primary",
          name: "BiPieChartAlt2",
          style: "circle",
        },
        title: "Longer Information 2",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "yellow",
          name: "BiMapAlt",
          style: "circle",
        },
        title: "Longer Information 3",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
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
