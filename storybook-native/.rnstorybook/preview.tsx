import React from 'react';
import type { Preview } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider } from '../../src/theme';

const rnStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#15180E',
    justifyContent: 'center',
    padding: 16,
  },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <View style={rnStyles.container}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
