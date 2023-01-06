import { FC, useState } from 'react'
// mui
import { Grid, Typography, IconButton, Card, CardContent, CardActions, Collapse, Tooltip, Divider } from '@mui/material'
import { Delete, ExpandMore as ExpandMoreIcon, Share } from '@mui/icons-material'
// other
import { DraggableList } from '../UI'
import { RecomendedMovies } from '../../../graphql'
import { ExpandMore, styles } from './styles'
// import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface OwnProps {
  collection: RecomendedMovies
  onShareList: (id: string) => void
  onDeleteList: (collection: RecomendedMovies) => void
}

export const RecommendedCard: FC<OwnProps> = ({ collection, onShareList, onDeleteList }) => {
  const { t } = useTranslation()

  const [expanded, setExpanded] = useState(false)
  // const navigate = useNavigate();
  const moviesNameCollection = collection.movies.map(({ title }) => title)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Grid sx={{ width: '100%' }}>
      <Card>
        <CardContent sx={styles.cardHeader}>
          <Typography sx={styles.title}>{collection.title}</Typography>
          <Typography sx={styles.description}>{collection.description}</Typography>

          <Tooltip title={t('tooltipText.recomendedCard.deleteBtn')} placement='top-end'>
            <IconButton sx={styles.deleteButton} onClick={() => onDeleteList(collection)}>
              <Delete />
            </IconButton>
          </Tooltip>
        </CardContent>
        <Divider />
        <CardActions disableSpacing sx={{ padding: '0 16px' }}>
          <Tooltip title={t('tooltipText.recomendedCard.sharelistBtn')} placement='bottom'>
            <IconButton aria-label='share' onClick={() => onShareList(collection._id as string)}>
              <Share />
            </IconButton>
          </Tooltip>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <DraggableList items={moviesNameCollection} />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
