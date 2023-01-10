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

export const MovieCardSelected = Template.bind({})
MovieCardSelected.args = {
  movie: movies[1] as unknown as Movie,
  styleRoot: { width: '200px' },
  status: true
}
export const MovieCardUnselected = Template.bind({})
MovieCardUnselected.args = {
  movie: movies[2] as unknown as Movie,
  styleRoot: { width: '200px' }
}
