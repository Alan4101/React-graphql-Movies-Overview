import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MovieCard } from '../common/components'
import { movies } from './sub'
import { decorators } from './preview'
import { Movie } from '../graphql'

export default {
  title: 'Example/MovieCard',
  component: MovieCard,
  argTypes: {},
  decorators: decorators
} as ComponentMeta<typeof MovieCard>

const Template: ComponentStory<typeof MovieCard> = args => <MovieCard {...args} />

export const OneMovieCardSelected = Template.bind({})
OneMovieCardSelected.args = {
  movie: movies[1] as Movie,
  styleRoot: { width: '200px' },
  status: true
}
export const OneMovieCardNotSelected = Template.bind({})
OneMovieCardNotSelected.args = {
  movie: movies[2] as Movie,
  styleRoot: { width: '200px' }
}
