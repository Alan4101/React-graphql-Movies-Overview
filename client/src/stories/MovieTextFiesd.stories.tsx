import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { decorators } from './preview'
import { MovieTextField } from '../common/components'

export default {
  title: 'Example/MovieTextField',
  component: MovieTextField,
  argTypes: {},
  decorators
} as ComponentMeta<typeof MovieTextField>

const Template: ComponentStory<typeof MovieTextField> = args => <MovieTextField {...args} />

export const Primary = Template.bind({})

Primary.args = {}
