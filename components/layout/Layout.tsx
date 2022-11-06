import React, { Component, ReactNode} from 'react'
import StyledLayout from './layout.styles'
import SideMenu from '../sideMenu'


class Layout extends Component {
	render(): ReactNode {
			const { children } = this.props as any
			return (
				<StyledLayout>
					<SideMenu />
					{children}
				</StyledLayout>
			)
	}
}

export default Layout