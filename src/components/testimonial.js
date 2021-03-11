import { BlocksControls } from "react-tinacms-inline";

export const Testimonial = () => {
  return (
    <section class="py-12 bg-blue-800 md:py-20 lg:py-24">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <blockquote class="mt-10">
            <div class="max-w-3xl mx-auto text-center text-3xl leading-9 font-medium text-gray-100">
              <p>
                <span class="text-black text-blue-500">&ldquo;</span>
                There are only two hard things in Computer Science: cache
                invalidation and naming things.
                <span class="text-black text-blue-500">&rdquo;</span>
              </p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div class="tracking-wide text-black title-font text-blue-300">
                    <span className="text-blue-500 mr-2">—</span>Phil Karlton
                  </div>
                </div>
              </div>
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
  defaultItem: {},
  fields: [],
};
