import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { decorators } from './preview'
import { ActorItem, Carousel } from '../common/components'
import { cast } from './sub'

export default {
  title: 'Example/Carousel',
  component: Carousel,
  argTypes: {},
  decorators
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = args => (
  <div style={{ width: '800px' }}>
    <Carousel {...args} />
  </div>
)

export const CarouselSlider = Template.bind({})

CarouselSlider.args = {
  children: cast.map(item => <ActorItem key={item.id} actor={item} />),
  config: { countSlide: 3 }
}

CarouselSlider.parameters = {
  docs: { source: { type: 'auto', id: 'example-mycomponent--starter' } }
}
