import React from 'react';
import { storiesOf } from '@storybook/react' // eslint-disable-line
import MediaUploader from '.';

console.log('HI');

storiesOf('Media Uploader', module)
  .add('with camera roll', () => (
    <MediaUploader />
  ));
