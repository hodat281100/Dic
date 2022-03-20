import styled, { css } from 'styled-components';
import { center } from '../../globalStyles';

export const SpecialButtonWrap = styled.div`
	border-radius: 10px;
	height: 50px;
	font-weight: 600;
	font-size: 1.5rem;
	cursor: pointer;
	opacity: 0.7;

	${({ theme }) => css`
		font-family: ${theme.font.phi};
		color: ${theme.color.txtColor};
		border: 2px dashed ${theme.color.navigation};

		&:hover {
			opacity: 1;
			border-style: solid;
			box-shadow: 0 0 5px ${theme.color.navigation};
			background-color: ${theme.color.navigation};
			color: white;
		}
	`}

	${center}
`;
