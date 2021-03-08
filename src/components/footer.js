import { InlineText } from "react-tinacms-inline";

export const Footer = () => {
  return (
    <footer class="text-gray-700 border-t body-font">
      <div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
        <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start ">
            <h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400">
              <InlineText focusRing={{ offset: 8 }} name="nav.name" />
            </h2>
          </a>
        </div>
        <div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
              Product
            </h1>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Email Templates
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Web Templates
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Figma Files
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Sketch Files
                </a>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
              Company
            </h1>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Carriers
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  {" "}
                  Security
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  {" "}
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
          <div class="w-full px-4 lg:w-1/3 md:w-1/2">
            <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
              Legal
            </h1>
            <nav class="mb-10 list-none">
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Trademark Policy
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">
                  Inactivity Policy
                </a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800"> DPA</a>
              </li>
              <li>
                <a class="text-sm text-gray-600 hover:text-gray-800">SLA</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-black">
        <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
          <p class="text-sm text-center text-gray-200 sm:text-left ">© 2021</p>
          <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a class="text-white hover:text-blue-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-white hover:text-blue-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-white hover:text-blue-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
