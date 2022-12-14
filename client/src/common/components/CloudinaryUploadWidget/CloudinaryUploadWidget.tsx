import { FC, useState, useRef, ChangeEvent, useMemo } from 'react'
import { Box, CardMedia, Grid } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'

import * as S from './style'
import { convertImagesToFileImageType } from './helper'
import { TFileImage } from '../../types'

interface CloudinaryUploadWidgetProps {
  images?: string[] | string | TFileImage[]
  onChangeImage?: (field: string, value: unknown, shouldValidate?: boolean | undefined) => void
  // onChangeImage?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}

export const CloudinaryUploadWidget: FC<CloudinaryUploadWidgetProps> = ({ images, onChangeImage }) => {
  const initialsImagesArray = useMemo(() => convertImagesToFileImageType(images), [images])
  const [image, _setImage] = useState<TFileImage[] | []>(initialsImagesArray)
  // const inputFileRef = useRef<any>(null)
  const inputFileRef = useRef(null)

  const setImage = (newImage: TFileImage) => {
    _setImage([...image, newImage])
    if (onChangeImage) {
      onChangeImage('images', [...image, newImage])
    }
  }

  const handleOnChandge = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImage = e.target.files[0]

      if (newImage) {
        setImage({
          url: URL.createObjectURL(newImage),
          type: newImage.type,
          name: newImage.name
        })
      }
    }
  }

  const handleRemoveImage = (item: string) => {
    _setImage(image.filter(img => img.url !== item))
    if (onChangeImage) {
      onChangeImage('images', [...image.filter(img => img.url !== item)])
    }
  }

  return (
    <Grid item container sx={S.styles.gridContainer}>
      {image.length !== 0 &&
        image.map((item, index) => (
          <Box key={index} sx={S.styles.boxStyle}>
            <S.EditBox>
              <S.RemoveButton onClick={() => handleRemoveImage(item.url)}>
                <ClearIcon fontSize='small' />
              </S.RemoveButton>
            </S.EditBox>
            <CardMedia sx={S.styles.img} component='img' image={item.url} />
          </Box>
        ))}
      <Grid sx={{ ...S.styles.boxStyle, ...S.styles.emptyBox }}>
        <S.LableUploadFile htmlFor='upload-input'>
          <AddIcon />
        </S.LableUploadFile>
        <S.InputUploadFile id='upload-input' ref={inputFileRef} type='file' onChange={handleOnChandge} />
      </Grid>
    </Grid>
  )
}
