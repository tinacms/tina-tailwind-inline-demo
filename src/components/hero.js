import { BlocksControls, InlineTextarea } from "react-tinacms-inline";

export const Hero = ({ data }) => {
  return (
    <section class="text-gray-700  body-font">
      <div class="container flex flex-col items-center px-8 py-24 mx-auto md:flex-row">
        <div class="flex flex-col    w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
          <h2 class="w-full	mb-4 text-sm font-bold tracking-wide text-black title-font">
            <InlineTextarea name="tagline" />
          </h2>
          <h1 class="w-full	mb-6 text-2xl font-bold tracking-tight text-blue-500 text-left lg:text-5xl title-font">
            <InlineTextarea name="headline" />
          </h1>
          <p class="w-full	mb-8 text-base leading-relaxed text-gray-700 text-left lg:text-1xl">
            <InlineTextarea name="text" />
          </p>
          <div class="flex flex-wrap items-center">
            <button class="flex items-center px-8 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 mr-6 whitespace-nowrap">
              Primary Action
            </button>
            <a
              href="#"
              class="inline-flex items-center font-semibold text-blue-700 hover:text-blue-400 "
            >
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="w-100 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded-lg "
            alt="hero"
            src={data.image}
          />
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
    image: "https://source.unsplash.com/collection/300768/720x600",
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
      component: "textarea",
    },
    {
      name: "text",
      label: "Text",
      component: "textarea",
    },
    {
      name: "image",
      label: "Image",
      component: "text",
    },
  ],
};
