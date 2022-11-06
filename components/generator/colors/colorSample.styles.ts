import styled from "styled-components";

const StyledColorSample = styled.section`
	display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 15px 30px;
  grid-auto-flow: row;

	h3{
		color: #5c6b77;
		font-weight: 600;
		font-size: 22px;
		text-align: center;
	}

	p{
		margin: 0;
		padding: 0 12px;
		line-height: 44px;
		cursor: pointer;
		transform-origin: left;
		transition: ease 0.3s;

		:hover{
			transform: scaleX(1.05);
		}
	}

`

export default StyledColorSample