import './HelloInput.scss'

import React, { ChangeEvent, Component, Fragment } from 'react'

// ---- Properties -----------------------------------------------------------------------
export interface HelloInputProps {
	name?: string
}

// ---- State ----------------------------------------------------------------------------
export interface HelloInputState {
	name: string
}

// ---- Component ------------------------------------------------------------------------
export class HelloInput extends Component<HelloInputProps, HelloInputState> {
	constructor(props: HelloInputProps) {
		super(props)

		this.state = {
			name: props.name ?? ''
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event: ChangeEvent<HTMLInputElement>) {
		const name = event.target.value

		this.setState({ name })
	}

	render() {
		const { name } = this.state

		return (
			<Fragment>
				<h1>{name === '' ? <i>Who are you ?</i> : <Fragment>Hello {name}</Fragment>}</h1>
				<input onChange={this.handleChange} type="text" placeholder="Your name here" value={name} autoFocus />
			</Fragment>
		)
	}
}
