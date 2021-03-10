import { InlineGroup, InlineText } from "react-tinacms-inline";

export const Footer = ({ data, name = "" }) => {
  return (
    <footer class="text-white bg-gray-700 border-t body-font">
      <InlineGroup
        name="footer"
        focusRing={{ offset: -16 }}
        insetControls={true}
        fields={FOOTER_FIELDS}
      >
        <div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start ">
              <h2 class="text-lg font-bold tracking-tight text-white uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500">
                {name}
              </h2>
            </a>
          </div>
          <div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase title-font">
                Product
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Email Templates
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Web Templates
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Figma Files
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Sketch Files
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase title-font">
                Company
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Carriers
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    {" "}
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    {" "}
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-blue-400 uppercase title-font">
                Legal
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Trademark Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    Inactivity Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    {" "}
                    DPA
                  </a>
                </li>
                <li>
                  <a href="#" class="text-sm text-gray-300 hover:text-white">
                    SLA
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-black">
          <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row justify-center">
            <div class="flex justify-center">
              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  class="text-white hover:text-blue-500"
                >
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
              )}
              {data.social.twitter && (
                <a
                  href={data.social.twitter}
                  class="ml-4 text-white hover:text-blue-500"
                >
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
              )}
              {data.social.instagram && (
                <a
                  href={data.social.instagram}
                  class="ml-4 text-white hover:text-blue-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </InlineGroup>
    </footer>
  );
};

export const FOOTER_FIELDS = [
  {
    name: "social",
    label: "Social Media",
    component: "group",
    fields: [
      {
        name: "facebook",
        label: "Facebook",
        component: "text",
      },
      {
        name: "twitter",
        label: "Twitter",
        component: "text",
      },
      {
        name: "instagram",
        label: "Instagram",
        component: "text",
      },
    ],
  },
];
