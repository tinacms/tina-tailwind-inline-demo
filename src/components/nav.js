export const Nav = () => {
  return (
    <div class="text-gray-700 bg-white body-font">
      <div class="flex flex-col flex-wrap py-5 px-10 mx-auto border-b border-gray-200 md:items-center md:flex-row">
        <a
          href="./index.html"
          class="pr-2 lg:pr-8 mb-0 focus:outline-none flex items-center"
        >
          <div class="inline-flex items-center">
            <div class="w-3 h-3 p-3 mr-2 rounded-full bg-blue-400"></div>
            <h2 class="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold lg:mr-8">
              Company Name
            </h2>
          </div>
        </a>
        <nav class="flex flex-wrap items-center justify-end text-base md:ml-auto">
          <a
            href="#"
            class="ml-7 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Pricing
          </a>
          <a
            href="#"
            class="ml-7 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Contact
          </a>
          <a
            href="#"
            class="ml-7 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Services
          </a>
          <a
            href="#"
            class="ml-7 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Now
          </a>
        </nav>
      </div>
    </div>
  );
};
