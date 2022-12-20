import { View as DefaultView } from "react-native";

import useThemeColor from "../../theme/useThemeColor";
import { ViewProps } from "../../types/ui";

function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;
