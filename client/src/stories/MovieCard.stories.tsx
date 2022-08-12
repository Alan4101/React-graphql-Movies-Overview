import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MovieCard } from "../common/components";
import { movies } from "./sub";
import { IMovie } from "../services/models/models";
import { decorators } from "./preview";

export default {
  title: "Example/MovieCard",
  component: MovieCard,
  argTypes: {},
  decorators: decorators,
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[1] as IMovie,
};
