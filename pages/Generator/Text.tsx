import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import { StyledMain, StyledCard } from '../../components/generator/text'

const initStyles = {
	size: '16px',
	color: '#1f1f1f',
	bgColor: '#ffffff',
	lineHight: '1.25',
	align: 'left' as CanvasTextAlign,
	decoration: 'none',
	wordSpace: '0px',
	textTransform: 'none' as const,
	textShadow: 'none'
}

const Text = () => {
	const [fontSize, setFontSize] = useState(initStyles.size)
	const [color, setColor] = useState(initStyles.color)
	const [backgroundColor, setBackgroundColor] = useState(initStyles.bgColor)
	const [lineHeight, setLineHeight] = useState(initStyles.lineHight)
	const [textAlign, setTextAlign] = useState(initStyles.align)
	const [textDecoration, setTextDecoration] = useState(initStyles.decoration)
	const [wordSpacing, setWordSpacing] = useState(initStyles.wordSpace)
	const [textTransform, setTextTransform] = useState(initStyles.textTransform)
	const [textShadow, setTextShadow] = useState('none')

	const styles = {fontSize, color, backgroundColor, lineHeight, textAlign, textDecoration, wordSpacing, textTransform, textShadow}

	const onClickCopy = () => {
		navigator.clipboard.writeText(
			`font-size: ${fontSize};
			color: ${color};
			background-color: ${backgroundColor};
			line-height: ${lineHeight};
			text-align: ${textAlign};
			text-decoration: ${textDecoration};
			text-transform: ${textTransform};
			word-spacing: ${wordSpacing};
			text-shadow: ${textShadow};
		`
		)
	}

	const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			e.currentTarget.blur()
		}
	}

	return (
		<StyledMain>
			<h1>Text</h1>
			<div>
				<section className='setter'>
					<h2>Options</h2>
					<StyledCard>
						<p className='option'>Font Color</p>
						<span>
							HEX
							<input type='text'
								defaultValue={color}
								onBlur={(e) => setColor(e.target.value)}
								onKeyUp={(e) => onKeyUp(e)}
							/>
						</span>
					</StyledCard>
					<StyledCard>
						<p className='option'>Background Color</p>
						<span>
							HEX
							<input type='text'
								defaultValue={backgroundColor}
								onBlur={(e) => setBackgroundColor(e.target.value)}
								onKeyUp={(e) => onKeyUp(e)}
							/>
						</span>
					</StyledCard>
					<StyledCard>
						<p className='option'>Font Size</p>
						<input type="range" min='1' max='50' defaultValue='16' step='1' onChange={(e) => setFontSize(`${e.target.value}px`)}/>
						<p>{fontSize}</p>
					</StyledCard>
					<StyledCard>
						<p className='option'>Line Height</p>
						<input type="range" min='0.75' max='3' defaultValue='1' step='0.05' onChange={(e) => setLineHeight(`${e.target.value}`)}/>
						<p>{lineHeight}</p>
					</StyledCard>
					<StyledCard>
						<p className='option'>Text Align</p>
						<button className={textAlign === 'center' ? 'selected' : ''} onClick={() => setTextAlign('center')}>Center</button>
						<button className={textAlign === 'left' ? 'selected' : ''} onClick={() => setTextAlign('left')}>Left</button>
						<button className={textAlign === 'right' ? 'selected' : ''} onClick={() => setTextAlign('right')}>Right</button>
					</StyledCard>
				</section>
				<section className='result'>
					<div className='result__preview'>
						<h2>Preview</h2>
						<StyledCard style={styles} >
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore autem rerum mollitia maxime ipsam, praesentium accusamus corrupti quas quasi? Quae accusantium amet corporis sit, corrupti, reiciendis magni perferendis animi maiores necessitatibus incidunt voluptate sunt vitae unde quas? Voluptate, vel unde.
						</StyledCard>
					</div>
					<div className="result__code">
						<h2>
							Code
							<FontAwesomeIcon 
								icon={faClone} 
								size='sm' 
								color='#8c8c8c' 
								style={{marginLeft: '1em'}} 
								onClick={() => onClickCopy()}
							/>
						</h2>
						<StyledCard>
							<p>font-size: {fontSize};</p>
							<p>color: {color};</p>
							<p>background-color: {backgroundColor};</p>
							<p>line-height: {lineHeight};</p>
							<p>text-align: {textAlign};</p>
							<p>text-decoration: {textDecoration};</p>
							<p>text-transform: {textTransform};</p>
							<p>word-spacing: {wordSpacing};</p>
							<p>text-shadow: {textShadow};</p>
						</StyledCard>
					</div>
				</section>
			</div>
		</StyledMain>
	)
}

export default Text