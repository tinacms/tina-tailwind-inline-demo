import { InlineText, InlineGroup } from "react-tinacms-inline";

export const Nav = ({ data }) => {
  return (
    <div class="text-gray-700 bg-white body-font">
      <div class="flex flex-col flex-wrap py-8 px-12 mx-auto border-b border-gray-200 md:items-center md:flex-row">
        <a
          href="./index.html"
          class="pr-2 lg:pr-8 mb-4 md:mb-0 focus:outline-none flex items-center"
        >
          <div class="inline-flex items-center">
            <div class="w-3 h-3 p-3 mr-2 rounded-full bg-blue-400 flex content-center items-center justify-center">
              <span class="text-white font-bold title-font">
                {data.name.charAt(0)}
              </span>
            </div>
            <h2 class="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold">
              <InlineText focusRing={{ offset: 8 }} name="nav.name" />
            </h2>
          </div>
        </a>
        <nav class="flex flex-wrap items-center justify-end text-base md:ml-auto">
          <InlineGroup
            focusRing={{ offset: 16 }}
            insetControls={true}
            name="nav"
            fields={NAV_FIELDS}
          >
            {data.items.map(function (item, index) {
              return (
                <a
                  href="#"
                  class="ml-7 text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  {item.label}
                </a>
              );
            })}
          </InlineGroup>
        </nav>
      </div>
    </div>
  );
};

export const NAV_FIELDS = [
  {
    name: "name",
    label: "Name",
    component: "text",
  },
  {
    label: "Nav Items",
    name: "items",
    component: "group-list",
    itemProps: (item) => ({
      label: item.label,
    }),
    defaultItem: () => ({
      label: "Nav Link",
      link: "/",
    }),
    fields: [
      {
        label: "Label",
        name: "label",
        component: "text",
      },
      {
        label: "Link",
        name: "link",
        component: "text",
      },
    ],
  },
];
