import styled from 'styled-components'

const Navigation = styled.nav`

	position: fixed;
	top: 0;
	left: 0;
	width: 250px;
	height: 100vh;
	border-right: 1px solid #c4c4c4;
	padding: 1rem 0;
	overflow-y: scroll;
	font-size: 14px;

	h4{
		padding-left: 1em;
		color: #a1a1a1;
	}

	ul{
		width: 100%;
		padding: 0;

		p{
			width: 100%;
			margin: 0;
			padding: 1em;
			padding-left: 2em;

			&.active{
				background-color: #e6f7ff;
				border-right: 3px solid #1890ff;
			}
			
			:hover{
				color: #1890ff;
			}
		}
	}

	/* #e6f7ff
	#1890ff */
`

export default Navigation