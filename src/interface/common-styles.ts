import { StyleProp, ViewStyle } from 'react-native';

export interface RowProps {
  style?: StyleProp<ViewStyle>;
  children: any;
}

export interface ColumnProps {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element;
}
