import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { center, Container, mediaMax, mediaMin } from '../../globalStyles';
import ButtonIcon from '../ButtonIcon';

export const NavbarContainer = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	width: 100%;
	background-color: transparent;
	box-shadow: 0 2px 5px transparent;
	transition: all ease 0.5s;
	display: flex;
	align-items: center;
	padding: 20px;

	${({ active, theme }) =>
		active &&
		css`
			box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
			background-color: ${theme.color.navbar};

			${mediaMax(
				css`
					transform: translateY(-40%);
				`
			)}
		`}
`;

export const NavbarLogo = styled(Link)`
	font-size: 2rem;
	font-family: 'Philosopher', sans-serif;
	user-select: none;
	${({ theme }) => css`
		color: ${theme.color.txtColor};
	`};

	${mediaMax(
		css`
			margin-bottom: 15px;
		`
	)}
`;

export const NavbarItem = styled.div`
	flex: ${({ flex }) => flex};
	${center}

	${({ side }) => css`
		${side === 'left' &&
		css`
			justify-content: flex-start;
		`}
		${side === 'right' &&
		css`
			justify-content: flex-end;
		`}
		${side === 'between' &&
		css`
			justify-content: space-between;
		`}
	`}
`;

export const NavbarWrap = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	& > ${NavbarItem}:first-child {
		opacity: 1;
		transition: opacity 0.5s ease;
	}
	${mediaMax(
		css`
			flex-direction: column;
			${({ active }) =>
				active &&
				css`
					& > ${NavbarItem}:first-child {
						opacity: 0;
					}
				`}
		`
	)}
`;

export const NavbarSearchForm = styled.form`
	width: 100%;
`;

export const NavbarSpace = styled.div`
	height: 100px;

	${mediaMax(
		css`
			height: 150px;
		`
	)}
`;

export const OnTopBtn = styled(ButtonIcon)`
	${mediaMin(
		css`
			position: fixed;
			right: 80px;
			bottom: 50px;
			z-index: 999;
		`,
		'pc'
	)}
`;
