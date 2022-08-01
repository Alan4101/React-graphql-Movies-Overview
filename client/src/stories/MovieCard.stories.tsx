import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../common/components";
import { movies } from "./sub";
export default {
  title: "Example/MovieCard",
  component: MovieCard,
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
};
