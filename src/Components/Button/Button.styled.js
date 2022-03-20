import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mediaMax } from '../../globalStyles';
import { outline, primary } from '../button.styles';

const shares = ({ styled = 'primary', theme }) => css`
	white-space: nowrap;
	min-width: 100px;
	padding: 8px 24px;
	border-radius: 10px;
	font-weight: 400;
	font-size: 1.2rem;
	border: 2px solid black;
	background-color: transparent;
	color: black;
	transition: all ease 0.5s;

	${mediaMax(css`
		padding: 4px 12px;
		font-size: 1rem;
	`)}

	${styled === 'primary' && primary}
	${styled === 'outline' && outline}
`;

export const ButtonWrap = styled.button`
	${shares}
`;

export const LinkWrap = styled(Link)`
	${shares}
`;
