import { Home, Recommend } from '@mui/icons-material'

interface IMenuItem {
  icon: JSX.Element
  title: string
  route: string
}
export const menuItem: IMenuItem[] = [
  {
    icon: <Home />,
    title: 'page.home',
    route: '/'
  },
  // {
  //   icon: <Settings />,
  //   title: "page.settings",
  //   route: "settings",
  // },
  {
    icon: <Recommend />,
    title: 'page.recommended',
    route: 'recomended'
  },
  {
    icon: <Recommend />,
    title: 'page.signUp',
    route: 'sign-up'
  },
  {
    icon: <Recommend />,
    title: 'page.signIn',
    route: 'sign-in'
  }

]
