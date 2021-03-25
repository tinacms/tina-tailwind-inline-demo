import * as React from "react";
import "./styles.css";
import { useCMS, withTina, useForm, usePlugin } from "tinacms";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";
import { HeroBlock, hero_template } from "./components/hero";
import {
  TestimonialBlock,
  testimonial_template,
} from "./components/testimonial";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { FeaturesBlock, features_template } from "./components/features";
import { TinaModal } from "./components/modal";
import { Theme } from "./components/theme";
import HomeData from "./home.json";

const App = () => {
  const cms = useCMS();
  cms.plugins.remove({
    __type: "screen",
    name: "Media Manager",
  });

  const [showModal, setShowModal] = React.useState(false);

  const [data, form] = useForm({
    initialValues: HomeData,
    fields: [],
    onSubmit: (values) => {
      setShowModal(true);
    },
  });

  usePlugin(form);

  return (
    <div className="App">
      <InlineForm form={form}>
        <Theme>
          <Nav data={data.nav} />
          <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
          <Footer name={data.nav.name} data={data.footer} />
        </Theme>
      </InlineForm>
      {showModal && (
        <TinaModal
          data={data}
          close={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

const PAGE_BLOCKS = {
  hero: {
    Component: HeroBlock,
    template: hero_template,
  },
  testimonial: {
    Component: TestimonialBlock,
    template: testimonial_template,
  },
  features: {
    Component: FeaturesBlock,
    template: features_template,
  },
};

export default withTina(App, { enabled: true, sidebar: false, toolbar: true });
