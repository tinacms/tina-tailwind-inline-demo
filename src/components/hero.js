export const Hero = () => {
  return (
    <section class="text-gray-700 body-font">
      <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row">
        <div class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:text-left md:mb-0 lg:text-center">
          <h2 class="mb-1 text-xs font-medium tracking-widest text-black title-font">
            Your tagline
          </h2>
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-black lg:text-left lg:text-5xl title-font">
            Medium length display headline.
          </h1>
          <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
            Deploy your mvp in minutes, not days. WT offers you a a wide
            selection swapable sections for your landing page.
          </p>
          <div class="flex justify-center">
            <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              Action
            </button>
            <p class="mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
              It will take you to candy shop.
              <br class="hidden lg:block" />
              <a
                href="#"
                class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 "
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
            </p>
          </div>
        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded-lg "
            alt="hero"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
      </div>
    </section>
  );
};
