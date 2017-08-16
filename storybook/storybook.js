/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require, max-len */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import 'babel-polyfill';

// import stories
const req = require.context('../src/components', true, /\.stories\.js$/);

console.log(req);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent('kitsu_mobile', () => StorybookUI);
export default StorybookUI;
