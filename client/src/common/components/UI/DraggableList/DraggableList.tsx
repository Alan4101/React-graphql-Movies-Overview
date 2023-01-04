import { FC, useState, useRef, ReactNode, Children } from 'react'
import { Box } from '@mui/material'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'
import { springCallback } from './helper'
import {styles} from './styles'

interface OwnProps {
  items: string[]
  children: ReactNode
}

export const DraggableList: FC<OwnProps> = ({ items: inputItems, children }) => {
  const [items] = useState(Children.toArray(children))
  const order = useRef(items.map((_, index) => index))

  const [springs, api] = useSprings(items.length, springCallback(order.current))

  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(springCallback(newOrder, active, originalIndex, curIndex, y))
    if (!active) order.current = newOrder
  })
  return (
    <Box sx={{...styles.container, height: items.length * 50 }}>
      {springs.map(({ zIndex, shadow, y, scale }, index) => (
        <animated.div
          {...bind(index)}
          key={index}
          style={{
            zIndex,
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale
          }}
        >
           {children}
        </animated.div>
      ))}
    </Box>
  )
}
