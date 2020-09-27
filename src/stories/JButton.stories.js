import React from 'react';
import Button from '../components/Button/Button';

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { 
    onClick: { action: 'Clicked.' },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline', 'text']
      }
    },
    startIcon: {
      control: {
        type: 'select',
        options: ['none', 'add-cart']
      }
    } 
  }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  variant: 'default',
  startIcon: 'none',
  disabled: false,
  disableShadow: false
};

export const Outline = Template.bind({});
Outline.args = {
  ...Default.args,
  label: 'Outline',
  variant: 'outline'
};

export const Text = Template.bind({});
Text.args = {
  ...Default.args,
  label: 'Text',
  variant: 'text'
};