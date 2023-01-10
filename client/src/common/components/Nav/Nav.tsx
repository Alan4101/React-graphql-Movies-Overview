import { FC, useContext, useState } from 'react'
// mui
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Hidden,
  Link,
  Select,
  SelectChangeEvent,
  MenuItem
} from '@mui/material'
//icon & style

import { Menu } from '@mui/icons-material'
// lib
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// other
import { LanguageContext } from '../../../services/context/LanguageContext'
import { MenuSidebar } from '../MenuSideBar/MenuSideBar'
import { changeLanguage } from '../../../utils'
import styles from './styles'

type Languages = 'en-US' | 'uk-UA'

export const Nav: FC = () => {
  const { t, i18n } = useTranslation()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const context = useContext(LanguageContext)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleChange = (event: SelectChangeEvent) => {
    context?.dispatch({
      type: 'setLocale',
      payload: event.target.value as Languages
    })
    i18n.changeLanguage(changeLanguage(event.target.value))
  }

  const dropdown = () => (
    <Select
      variant='standard'
      labelId='label-language'
      value={context?.state.locale || 'en-US'}
      onChange={handleChange}
      label=''
      displayEmpty
      MenuProps={{
        variant: 'menu'
      }}
      inputProps={{
        sx:{borderBottom: 'none'}
      }}
      sx={styles.select}
    >
      <MenuItem value='en-US'>EN</MenuItem>
      <MenuItem value='uk-UA'>UA</MenuItem>
    </Select>
  )

  return (
    <Box sx={{ zIndex: '2' }}>
      <AppBar position='static'>
        <Toolbar sx={styles.toolbar}>
          <Hidden only={['lg', 'xl']}>
            <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }} onClick={toggleDrawer}>
              <Menu />
            </IconButton>
          </Hidden>
          <Link component={RouterLink} to='/'>
            <Typography variant='h6' component='div' sx={{ color: '#fff', flexGrow: 1 }}>
              {t('home.header')}
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              justifyContent: 'left'
            }}
          >
            <MenuSidebar toggleDrawer={toggleDrawer} isSideBar={false}>
              {dropdown()}
            </MenuSidebar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ sx: styles.sideBar }}>
        <MenuSidebar toggleDrawer={toggleDrawer} isSideBar={true}>
          {dropdown()}
        </MenuSidebar>
      </Drawer>
    </Box>
  )
}
