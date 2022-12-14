import { FC, ReactNode } from 'react'
// mui
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Link,
  Divider,
  Button,
  Typography
} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

// lib
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// other
import { menuItem } from '../Nav/Nav.helper'

interface MenuSidebarProps {
  isSideBar: boolean
  toggleDrawer: () => void
  children: ReactNode
}
export const MenuSidebar: FC<MenuSidebarProps> = ({ isSideBar, toggleDrawer, children }) => {
  const { t } = useTranslation()

  return (
    <>
      {isSideBar ? (
        <Box role='presentation' onClick={toggleDrawer}>
          <List>
            {menuItem.map(item => (
              <Link component={RouterLink} to={item.route} key={item.route} sx={{ textDecoration: 'none' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
                    <Typography sx={{ color: '#fff' }}>{t(item.title)}</Typography>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  <LanguageIcon />
                </ListItemIcon>
                {/* <Typography sx={{ color: '#fff' }}>{t('home.language')}</Typography> */}

                {children}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        <>
          {menuItem.map(item => (
            <Button key={item.route} sx={{ my: 2, display: 'block' }}>
              <Link sx={{ color: '#fff', textDecoration: 'none' }} component={RouterLink} to={item.route}>
                {t(item.title)}
              </Link>
            </Button>
          ))}
          {children}
        </>
      )}
    </>
  )
}
