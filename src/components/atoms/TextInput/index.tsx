import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native';
import { THEME } from '~/src/theme';

interface TextInputProps {
  inputContainerStyle?: StyleProp<TextStyle>;
  rightIcon?: JSX.Element;
  onPressRightIcon?: () => void;
  error?: any;
}

const TextInput: React.FC<TextInputProps & RNTextInputProps> = ({
  inputContainerStyle,
  rightIcon,
  error,
  onPressRightIcon,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <RNTextInput
          {...props}
          placeholderTextColor={THEME.colors.lightBlack}
          style={[styles.wrapper, inputContainerStyle]}
        />
        {rightIcon && (
          <TouchableOpacity style={styles.rightIcon} onPress={onPressRightIcon}>
            <Text>{'dasdsa'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  subContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: THEME.colors.blackShade2,
  },
  wrapper: {
    color: THEME.colors.black,
    ...THEME.typography.normalTextWithNormalSize,
    paddingLeft: 10,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  errorStyle: {
    ...THEME.typography.smallTextWithNormalSize,
    color: THEME.colors.red,
    marginTop: 5,
  },
});

export { TextInput };
