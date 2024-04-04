import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ColumnProps, RowProps } from '~/src/interface';

const Row: React.FC<RowProps> = ({ children, style }) => {
  return <View style={[style, styles.containerRow]}>{children}</View>;
};

const Column: React.FC<ColumnProps> = ({ children, style }) => {
  return <View style={[style, styles.containerColumn]}>{children}</View>;
};

const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Row, Column };
