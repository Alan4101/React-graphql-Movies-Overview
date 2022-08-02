import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCardSelected } from "../common/components";
import { movies } from "./sub";
export default {
  title: "Example/Movie cards selected",
  component: MovieCardSelected,
  argTypes: {},
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args) => (
  <MovieCardSelected {...args} />
);

export const MovieMain = Template.bind({});
MovieMain.args = {
  movie: movies[0],
};
export const MoviePrimary = Template.bind({});

MoviePrimary.args = {
  movie: movies[3],
};
