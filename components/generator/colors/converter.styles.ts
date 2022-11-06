import styled from "styled-components";

const StyledConverter = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5em;

	h2{
		color: #5c6b77;
	}

	.option{
		width: 300px;
		margin-right: 5rem;
		&__item{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			border-bottom: solid 1px #8c8c8c;

			:hover{
				border-bottom-color: #40a9ff;
			}

			p{
				width: 100%;
				margin-bottom: 0;
				color: #8c8c8c;
			}
			
			input{
				all: unset;
				padding-block: 0.5em;
				color: #8c8c8c;
			}
		}
	}

	.preview{
		flex: 1;

		> div {
			width: 100%;
			height: calc(100% - 67.5px);
			border-radius: 2em;
		}
	}
`

export default StyledConverter