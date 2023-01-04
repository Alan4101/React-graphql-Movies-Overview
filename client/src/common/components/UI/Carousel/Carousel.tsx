import { useState, ReactNode, FC, Children, TouchEvent, useMemo, useEffect } from 'react'
import { Grid, Box, IconButton, useMediaQuery } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { styles, ContentWrapper } from './styles'

type CarouselConfig = {
  countSlide: number
}

interface OwnProps {
  children: ReactNode
  config: CarouselConfig
}
export const Carousel: FC<OwnProps> = ({ children, config }) => {
  const query1023 = useMediaQuery('(max-width:1023px) and (min-width:769px)')
  const query768 = useMediaQuery('(max-width:769px)')
  const query425 = useMediaQuery('(max-width:425px)')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)
  const [countSlides, setCountSlides] = useState(config.countSlide)
  useEffect(() => {
    if (query1023) {
      setCountSlides(3)
    } else if (query768) {

      setCountSlides(2)
    } else if (query425) {
      setCountSlides(1)
    }
  }, [query1023, query768, query425])
  // console.log(countSlides)

  const listLength = useMemo(() => Children.count(children), [children])
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  const nextSlide = () => {
    if (currentIndex < listLength - config.countSlide) {
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
            transform: `translateX(-${currentIndex * (100 / countSlides)}%)`
          }}
          count={countSlides}
          onTouchStart={handleTochStart}
          onTouchMove={handleTouchMove}
        >
          {children}
        </ContentWrapper>
      </Box>
    </Grid>
  )
}
