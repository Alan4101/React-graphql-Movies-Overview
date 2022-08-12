import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieButton } from "../common/components";
import { decorators } from "./preview";

export default {
  title: "Example/MovieButton",
  component: MovieButton,
  argTypes: {},
  decorators,
} as ComponentMeta<typeof MovieButton>;

const Template: ComponentStory<typeof MovieButton> = (args) => (
  <MovieButton {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  color: "primary",
  variant: "contained",
  children: "Some text1",
};
Secondary.args = {
  color: "secondary",
  variant: "outlined",
  children: "Some text",
};
