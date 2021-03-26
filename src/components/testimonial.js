import * as React from "react";
import { ThemeContext } from "./theme";
import {
  BlocksControls,
  InlineText,
  InlineTextarea,
} from "react-tinacms-inline";

export const Testimonial = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <section
      class={`py-24 bg-${theme.color}-700 bg-gradient-to-r from-${theme.color}-700 via-${theme.color}-600 to-${theme.color}-700`}
    >
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <blockquote>
            <div class="relative z-10 max-w-3xl mx-auto text-center text-4xl leading-tight font-medium text-gray-100">
              <span
                class={`block opacity-50 text-black text-${theme.color}-600 text-8xl absolute inset-y-1/2 transform translate-y-2	-left-4 leading-4 -z-1`}
              >
                &ldquo;
              </span>
              <p class="relative">
                <InlineTextarea name="quote" />
              </p>
              <span
                class={`block opacity-50 text-black text-${theme.color}-600 text-8xl absolute inset-y-1/2 transform translate-y-3	-right-4 leading-4 -z-1`}
              >
                &rdquo;
              </span>
            </div>
            <div className={`my-8 flex-grow-0`}>
              <span
                className={`block mx-auto h-0.5 w-1/6 bg-${theme.color}-800 opacity-50`}
              ></span>
            </div>
            <footer class="text-center">
              <p
                class={`tracking-wide title-font font-bold text-base text-${theme.color}-300`}
              >
                <InlineTextarea name="author" />
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export function TestimonialBlock({ data, index }) {
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: -12 }}
      insetControls={true}
    >
      <Testimonial data={data} />
    </BlocksControls>
  );
}

export const testimonial_template = {
  label: "Testimonial",
  defaultItem: {
    quote:
      "There are only two hard things in Computer Science: cache invalidation and naming things.",
    author: "Phil Karlton",
  },
  fields: [
    {
      name: "quote",
      label: "Quote",
      component: "textarea",
    },
    {
      name: "author",
      label: "Author",
      component: "text",
    },
  ],
};
