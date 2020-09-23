import React from 'react';
import Button from '../components/Button/Button';

// This default export determines where you story goes in the story list
export default {
  title: 'Jim\'s Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};

