import "./styles.css";
import { withTina, useForm, usePlugin } from "tinacms";
import { Hero } from "./components/hero";

const App = () => {
  // create a Tina form
  const [data, form] = useForm({
    initialValues: {
      title: "Tina Demo",
      content: "Click the pencil icon to edit",
    },
    fields: [
      {
        name: "title",
        component: "text",
      },
      {
        name: "content",
        component: "textarea",
      },
    ],
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
      <Hero />
    </div>
  );
};

export default withTina(App, { enabled: true, sidebar: true });
