import * as React from "react";
import {
  BiCodeBlock,
  BiLike,
  BiMapAlt,
  BiPalette,
  BiPieChartAlt2,
  BiPin,
  BiShield,
  BiSlider,
  BiStore,
  BiTennisBall,
  BiTestTube,
  BiTrophy,
  BiUserCircle,
  BiBeer,
  BiChat,
  BiCloud,
  BiCoffeeTogo,
  BiWorld,
} from "react-icons/bi";

const iconOptions = {
  BiCodeBlock: BiCodeBlock,
  BiLike: BiLike,
  BiMapAlt: BiMapAlt,
  BiPalette: BiPalette,
  BiPieChartAlt2: BiPieChartAlt2,
  BiPin: BiPin,
  BiShield: BiShield,
  BiSlider: BiSlider,
  BiStore: BiStore,
  BiTennisBall: BiTennisBall,
  BiTestTube: BiTestTube,
  BiTrophy: BiTrophy,
  BiUserCircle: BiUserCircle,
  BiBeer: BiBeer,
  BiChat: BiChat,
  BiCloud: BiCloud,
  BiCoffeeTogo: BiCoffeeTogo,
  BiWorld: BiWorld,
};

export const Icon = ({ name }) => {
  const Component = React.useMemo(() => {
    return name ? iconOptions[name] : randomProperty(iconOptions);
  }, [name]);

  return <Component className="w-8 h-8" />;
};

const randomProperty = (obj) => {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};
