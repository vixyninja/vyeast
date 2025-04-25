import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './button';
import {PlusIcon} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <PlusIcon className="size-4" />
        Add
      </>
    ),
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon">
        <PlusIcon />
      </Button>
    </div>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#" className="underline">
        Link-style Button
      </a>
    ),
  },
};
