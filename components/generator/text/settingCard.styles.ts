import styled from "styled-components";

const StyledSettingCard = styled.div`
	margin-bottom: 2rem;
	padding: 1.25rem;
	border-radius: 0.375rem;
	box-shadow: 0 1px 3px rgb(0 0 0 / 0.3);

	input[type='range']{
		height: 0.25rem;
    width: 100%;
		appearance: none;
    border-radius: 9999px;
		background-color: #262626;
		margin-bottom: 1em;
	}

	span{
		display: block;
		border-bottom: solid 1px #8c8c8c;
	}

	input[type='text']{
		all: unset;
		display: inline-block;
		margin-left: 1em;
		padding-block: 0.5em;
	}

	button{

		&.selected{
			
		}
	}

	.option{
		font-size: 18px;
		font-weight: 700;
	}
`

export default StyledSettingCard