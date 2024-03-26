import { Meta, StoryObj } from "@storybook/react";
import { LabelProps, MyLabel } from "../components/MyLabel";

const meta: Meta<LabelProps> = {
  title: "MyLabel",
  component: MyLabel,

  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
    color: "text-tertiary"
  },
};

export const Secundary: Story = {
  args: {
    label: "Secundary label",
    color: 'text-secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color label",
    fontColor: 'orange',
  },
};
export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom  BackgrundColor label",
    backgroundColor: '#532db1',
    fontColor: 'white'
  },
};
