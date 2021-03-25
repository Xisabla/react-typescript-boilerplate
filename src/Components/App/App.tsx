import './App.scss'

import React, { Component } from 'react'

import { HelloInput } from '../'
import img from './dummy.png'

// ---- Component ------------------------------------------------------------------------
export class App extends Component {
	public render() {
		return (
			<div className="app">
				{/* Example image */}
				<img src={img} />
				{/* Example sub component */}
				<HelloInput />
			</div>
		)
	}
}
