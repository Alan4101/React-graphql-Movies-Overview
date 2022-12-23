import React, { FC } from 'react'
// mui
import { CssBaseline, Grid } from '@mui/material'
// routes
import { Route, Routes } from 'react-router-dom'
import { Home, Movie, Recomended, RecommendedList, Settings } from '../../pages'
import { PublicRoutes } from '../constants/routes'
// components
import { Nav } from '../components'

export const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container flexDirection='column'>
      <CssBaseline />
      <Nav />

      <Routes>
        <Route path={PublicRoutes.Home} element={<Home />} />
        <Route path={`${PublicRoutes.Home}/:id`} element={<Movie />} />
        <Route path={PublicRoutes.Settings} element={<Settings />} />
        <Route path={PublicRoutes.Recommended} element={<Recomended />} />
        <Route path={`${PublicRoutes.Recommended}/:id`} element={<RecommendedList />} />
      </Routes>
      <>{children}</>
    </Grid>
  )
}
