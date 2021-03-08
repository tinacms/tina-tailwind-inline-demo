import "./styles.css";
import { withTina, useForm, usePlugin } from "tinacms";
import { InlineForm } from "react-tinacms-inline";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Features } from "./components/features";

const App = () => {
  // create a Tina form
  const [data, form] = useForm({
    initialValues: {
      nav: {
        name: "Company Test Name",
        items: [
          {
            label: "Pricing",
            link: "/",
          },
          {
            label: "Contact",
            link: "/",
          },
          {
            label: "Services",
            link: "/",
          },
        ],
      },
    },
    fields: [],
    onSubmit: (values) => {
      alert(
        `You control what happens with your data \n --- \n ${JSON.stringify(
          values,
          null,
          2
        )}`
      );
    },
  });

  // register the Tina form so it appears in the sidebar
  usePlugin(form);

  // use `data` in your render to access form-mutated values
  return (
    <div className="App">
      <InlineForm form={form}>
        <Nav data={data.nav} />
        <Hero />
        <Features />
        <Footer />
      </InlineForm>
    </div>
  );
};

export default withTina(App, { enabled: true, sidebar: true });
