import { Settings } from '@mui/icons-material'

interface IMenuItem {
  icon: JSX.Element
  title: string
  route: string
}
export const menuItem: IMenuItem[] = [
  {
    icon: <Settings />,
    title: 'page.home',
    route: '/'
  },
  // {
  //   icon: <SettingsIcon />,
  //   title: "page.settings",
  //   route: "settings",
  // },
  {
    icon: <Settings />,
    title: 'page.recommended',
    route: 'recomended'
  }
]
