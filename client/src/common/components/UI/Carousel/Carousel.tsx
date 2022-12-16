import { useState, ReactNode, FC, useEffect, Children } from 'react'
import { Grid, Box, IconButton } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { styles } from './styles'

interface CarouselProps {
  children: ReactNode
}
const Carousel: FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [listLenght, setListLenght] = useState(0)

  useEffect(() => {
    setListLenght(Children.count(children))
  }, [children])

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }
  const nextSlide = () => {
    if (currentIndex < listLenght - 1) {
      setCurrentIndex(prevState => prevState + 1)
    }
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
        <Box
          sx={{
            ...styles.contentWrapper,
            transform: `translateX(-${currentIndex * (100 / 3)}%)`
          }}
        >
          {children}
        </Box>
      </Box>
    </Grid>
  )
}
export default Carousel
