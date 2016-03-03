import React from 'react'
import { Route, IndexRoute, Router} from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import AddPlayer from 'views/AddPlayer/AddPlayer'

export default (store) => (
	<Router>
		<Route path='/' component={CoreLayout}>
			<IndexRoute component={HomeView} />
		</Route>
		<Route path='/add-player' component={AddPlayer}/>
  	</Router>
)
