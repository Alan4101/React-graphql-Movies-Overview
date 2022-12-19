import { useState, ReactNode, FC, Children, TouchEvent, useMemo } from 'react'
import { Grid, Box, IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { styles, ContentWrapper } from './styles'

interface CarouselProps {
  children: ReactNode
  count: number
}
export const Carousel: FC<CarouselProps> = ({ children, count }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  const listLength = useMemo(() => Children.count(children), [children])
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  const nextSlide = () => {
    if (currentIndex < listLength - count) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }
  const handleTochStart = (e: TouchEvent) => {
    const tochDown = e.touches[0].clientX
    setTouchPosition(tochDown)
  }
  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      nextSlide()
    }

    if (diff < -5) {
      prevSlide()
    }

    setTouchPosition(null)
  }
  return (
    <Grid container sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.buttonWrapper}>
          <IconButton onClick={prevSlide} sx={{ ...styles.controlButton, ...styles.leftButton }}>
            <ArrowBackIos />
          </IconButton>
          <IconButton onClick={nextSlide} sx={{ ...styles.controlButton, ...styles.rightButton }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        <ContentWrapper
          sx={{
            transform: `translateX(-${currentIndex * (100 / count)}%)`
          }}
          count={count}
          onTouchStart={handleTochStart}
          onTouchMove={handleTouchMove}
        >
          {children}
        </ContentWrapper>
      </Box>
    </Grid>
  )
}
