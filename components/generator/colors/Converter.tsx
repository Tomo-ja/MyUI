import React, { useState } from 'react'
import StyledConvertor from './converter.styles'


const hexToRgb = (hex: string) => {
	const rgbArray =   hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
											.substring(1).match(/.{2}/g)!
											.map(x => parseInt(x, 16))
	return rgbArray
}

const rgbToHex = (r: number, g: number, b: number) => {
	const hexString = '#' + [r, g, b].map(code => {
		const hex = code.toString(16)
		return hex.length === 1 ? '0' + hex : hex 
	}).join('')
	return hexString
}

const hexToHsl = (hex: string) => {
	const rgb = hexToRgb(hex)
	const r = rgb[0] / 255
	const g = rgb[1] / 255
	const b = rgb[2] / 255

	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	let h, s, l = (max + min) / 2
	
	if ( max === min ) {
		h = s = 0
	} else {
		const diff = max - min
		s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)
		switch(max) {
			case r:
				h = (g - b) / diff + (g < b ? 6 : 0)
				break
			case g:
				case g: h = (b - r) / diff + 2
				break
			case b:
				h = (r - g) / diff + 4
				break
		}
		h = h ? h / 6 : 0
	}

	s = s * 100
	s = Math.round(s)
	l = l * 100
	l = Math.round(l)
	h = Math.round(360 * h)

	return 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
}

const Convertor = () => {

	const [ color, setColor ] = useState('#1890ff')


	return (
		<StyledConvertor>

		</StyledConvertor>
	)
}

export default Convertor