import React from 'react'
import {StyledMain, Converter, ColorSample } from '../../components/generator/colors'

const Colors = () => {
	return (
		<StyledMain>
			<h1 className="title">Colors</h1>
			<Converter />
			<ColorSample />
		</StyledMain>
	)
}

export default Colors