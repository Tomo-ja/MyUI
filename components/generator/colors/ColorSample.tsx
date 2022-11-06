import React from 'react'

import COLORS from '../../../data/colors'
import StyledColorSample from './colorSample.styles'

const ColorSample = () => {

	const copyColorCode = (code: string) => {
		// TODO: create pop up when it's copied
		navigator.clipboard.writeText(code)
	}

	return (
		<StyledColorSample>
			{COLORS.map(color => (
				<div key={color.kind}>
					<h3>{color.kind}</h3>
					{color.code.map((code, index) => (
						<p 
							key={code} 
							onClick={() => copyColorCode(code)}
							style={{backgroundColor: code, color: index > 4 ? '#fafafa' : '#141414'}}
						>
							{code}
						</p>
					))}
				</div>
			))}
		</StyledColorSample>
	)
}

export default ColorSample