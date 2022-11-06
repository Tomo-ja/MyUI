import React, { useState } from 'react'
import { NavLink } from '../NavLink'
import StyledNavigation from './navigation.styles'

import NAVITEMS from '../../data/navigation'

const SideMenu = () => {

	return (
		<StyledNavigation className='nav__container'>
			{NAVITEMS.map(section => (
				<section key={section.name}>
					<h4>{section.name}</h4>
					<ul className='nav__section__items'>
						{section.option.map(option => (
							<NavLink 
								href={`/${section.name}/${option}` } 
								key={option}
							>
								<p>{option}</p>
							</NavLink>
						))}
					</ul>
				</section>
			))}
		</StyledNavigation>
	)
}

export default SideMenu