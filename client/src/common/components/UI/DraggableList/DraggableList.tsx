import { FC, useState, useRef } from 'react'
import { Box } from '@mui/material'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import swap from 'lodash-move'
import {styles} from './styles'

interface OwnProps {
  items: string[]
}
const fn = (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) => (index: number) =>
  active && index === originalIndex
    ? {
        y: curIndex * 50 + y,
        scale: 1.1,
        zIndex: 1,
        shadow: 15,
        immediate: (key: string) => key === 'y' || key === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 50,
        scale: 1,
        zIndex: 0,
        shadow: 1,
        immediate: false,
      }

export const DraggableList: FC<OwnProps> = ({ items: inputItems }) => {
  const [items] = useState(inputItems)
  const order = useRef(items.map((_, index) => index))

  const [springs, api] = useSprings(items.length, fn(order.current))
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y))
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
            <span>{index}</span>
          {items[index]}
        </animated.div>
      ))}
    </Box>
  )
}
