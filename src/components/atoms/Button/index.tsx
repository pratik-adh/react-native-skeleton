import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
  ActivityIndicator,
  StyleProp,
} from 'react-native';
import { THEME } from '~/src/theme';
import { Row } from '~/src/utilities';

export interface ButtonProps {
  onPress?: () => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  children?: JSX.Element;
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingIndicatorColor?: string;
  touchDisabled?: boolean;
  disabledStyle?: ViewStyle;
  onBlur?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  textStyle,
  title,
  onPress,
  onBlur,
  children,
  isLoading,
  loadingIndicatorColor = THEME.colors.white,
  isDisabled,
  touchDisabled,
  disabledStyle,
}) => {
  let child: JSX.Element = (
    <Text style={[styles.text, textStyle]}>{title}</Text>
  );

  if (children) {
    child = children;
  }

  if (isLoading) {
    child = (
      <Row style={styles.rowStyle}>
        <ActivityIndicator color={loadingIndicatorColor} />
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Row>
    );
  }

  return (
    <TouchableOpacity
      disabled={isDisabled || touchDisabled}
      onPress={isLoading ? undefined : onPress}
      onBlur={onBlur}
      style={[
        styles.button,
        style,
        isDisabled && (disabledStyle ? disabledStyle : styles.disableStyle),
      ]}
    >
      {child}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // these styles can be overridden by main button style
  button: {
    height: 48,
    width: 200,
    backgroundColor: THEME.colors.red,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: THEME.colors.white,
    alignSelf: 'center',
    ...THEME.typography.normalTextWithNormalSize,
  },
  rowStyle: {
    gap: 10,
  },
  disableStyle: {},
});
