/* @flow */
import React from 'react'
import VisiblePlayerList from '../../containers/VisiblePlayerList'

export class HomeView extends React.Component {
	render () {
		return (
		  <div>
		    <h1>Players</h1>
		    <VisiblePlayerList />
		  </div>
		)
	}
}

export default HomeView
