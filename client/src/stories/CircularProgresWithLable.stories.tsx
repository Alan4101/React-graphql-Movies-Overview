import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CircularProgresWithLable } from '../common/components'
import { decorators } from './preview'

export default {
  title: 'Example/CircularProgresWithLable',
  component: CircularProgresWithLable,
  argTypes: {},
  decorators
} as ComponentMeta<typeof CircularProgresWithLable>

const Template: ComponentStory<typeof CircularProgresWithLable> = args => (
  <CircularProgresWithLable {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  value: 8.1,
  textColor: '#381f75',
  progressColor: '#381f75'
}
