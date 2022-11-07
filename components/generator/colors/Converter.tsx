import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import StyledConvertor from './converter.styles'


const hexToRgb = (hex: string): number[]=> {
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

const hexToHsl = (hex: string): string => {
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

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, '0')
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

enum Option {
	hex, rgb, hsl
}

const Convertor = () => {

	const [ color, setColor ] = useState('#1890ff')
	const hexRef = useRef<HTMLInputElement>(null)
	const rgbRef = useRef<HTMLInputElement>(null)
	const hslRef = useRef<HTMLInputElement>(null)

	const onChangeHex = (hex: string) => {
		if(!hexRef.current || !rgbRef.current || !hslRef.current) return
		rgbRef.current.value = 'rgb(' + hexToRgb(hex).join(', ') + ')'
		hslRef.current.value = hexToHsl(hex)
		setColor(hex)
	}

	const onChangeRgb = (rgb: string) => {
		if(!hexRef.current || !rgbRef.current || !hslRef.current) return
		const rgbArray = rgb.slice(4, (rgb.length)).slice(0, -1).replace(/\s/g, '').split(',').map(num => Number(num))
		const hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2])

		hexRef.current.value = hex
		hslRef.current.value = hexToHsl(hex)

		setColor(hex)
	}

	const onChangeHsl = (hsl: string) => {
		if(!hexRef.current || !rgbRef.current || !hslRef.current) return
		const hslArray = hsl.slice(4, (hsl.length)).slice(0, -1).replace(/\s/g, '').replace(/%/g, '').split(',').map(num => Number(num))
		const hex = hslToHex(hslArray[0], hslArray[1], hslArray[2])
		rgbRef.current.value = 'rgb(' + hexToRgb(color).join(', ') + ')'
		hexRef.current.value = hex
		setColor(hex)
	}

	const copyColor = (type: Option) => {
		// TODO: pop up when it's copied
		switch(type) {
			case Option.hex: 
				navigator.clipboard.writeText(hexRef.current!.value)
				break
			case Option.hsl: 
				navigator.clipboard.writeText(hslRef.current!.value)
				break
			case Option.rgb: 
				navigator.clipboard.writeText(rgbRef.current!.value)
				break
		}

	}

	const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			e.currentTarget.blur()
		}
	}
	
	useEffect(()=> {
		if(!hexRef.current || !rgbRef.current || !hslRef.current) return
		hexRef.current.value = color
		rgbRef.current.value = 'rgb(' + hexToRgb(color).join(', ') + ')'
		hslRef.current.value = hexToHsl(color)
	}, [])


	return (
		<StyledConvertor>
			<div className='option'>
				<div className='option__item'>
					<p>HEX</p>
					<input 
						ref={hexRef}
						type="text" 
						onBlur={(e) => onChangeHex(e.target.value)}
						onKeyUp={(e) => onKeyUp(e)}
					/>
					<FontAwesomeIcon icon={faClone} size='lg' color='#8c8c8c'
						onClick={() => copyColor(Option.hex)}
					/>
				</div>
				<div className='option__item'>
					<p>RGB</p>
					<input 
						ref={rgbRef}
						type="text" 
						onKeyUp={(e) => onKeyUp(e)}
						onBlur={(e) => onChangeRgb(e.target.value)}
					/>
					<FontAwesomeIcon 
						icon={faClone} size='lg' color='#8c8c8c'
						onClick={() => copyColor(Option.rgb)}
					/>
				</div>
				<div className='option__item'>
					<p>HSL</p>
					<input
						ref={hslRef}
						type="text" 
						onKeyUp={(e) => onKeyUp(e)}
						onBlur={(e) => onChangeHsl(e.target.value)}
					/>
					<FontAwesomeIcon 
						icon={faClone} size='lg' color='#8c8c8c'
						onClick={() => copyColor(Option.hsl)}
					/>
				</div>
			</div>
			<div className='preview'>
				<h2>Preview</h2>
				<div style={{backgroundColor: color}}/>
			</div>
		</StyledConvertor>
	)
}

export default Convertor