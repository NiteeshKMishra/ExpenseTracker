import { StyleSheet } from "react-native";
import Text from "../components/ui/Text";
import View from "../components/ui/View";

import { RootTabScreenProps } from "../types/navigation";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text>Welcome to Expense Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
