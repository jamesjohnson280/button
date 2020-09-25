import React from 'react';
import Button from '../components/Button/Button';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'Clicked.' } }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  variant: 'outline'
};
