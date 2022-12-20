import Text from "./Text";
import { TextProps } from "../../types/ui";

function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export default MonoText;
