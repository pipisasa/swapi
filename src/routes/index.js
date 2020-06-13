import React, {lazy} from 'react'
import { Redirect, Route } from 'react-router-dom'

// Dev pages
const FeatherIcons = lazy(()=>import('../pages/other/FeatherIcons'))

const Starships = lazy(()=>import('../pages/Starships'))
const Detail = lazy(()=>import('../pages/Detail'))

// root routes
const rootRoute = {
  path: '/',
  exact: true,
  component: () => <Redirect to="/type/starships" />,
  route: Route,
}

const featherIconsRoute = {
  exact:true,
  path:'/icons',
  component: FeatherIcons,
  route: Route
}

const starshipsRoutes = {
  name:'Home',
  path:'/type',
  children:[
    {
      path:'/type/:type',
      exact:true,
      route: Route,
      component: Starships,
    },{
      path:'/type/:type/:id',
      exact:true,
      route: Route,
      component: Detail,
    }
  ]
}

const error404Route = {
  name: 'Error 404',
  component: () => <h1>Error 404</h1>,
  route: Route,
}

const flattenRoutes = routes => {
  let flatRoutes = []
  routes = routes || []
  routes.forEach(item => {
    flatRoutes.push(item)
    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
    }
  })
  return flatRoutes
}

const allRoutes = [
  rootRoute,
  featherIconsRoute,
  
  starshipsRoutes,
]

allRoutes.push(error404Route)

const allFlattenRoutes = flattenRoutes(allRoutes)
export { allRoutes, allFlattenRoutes }
