import { View, Text } from "react-native";

import { ThemeProps } from "./theme";

export type ViewProps = ThemeProps & View["props"];

export type TextProps = ThemeProps & Text["props"];
