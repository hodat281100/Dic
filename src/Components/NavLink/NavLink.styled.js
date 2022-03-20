import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { center } from '../../globalStyles';

export const NavLinkWrap = styled(NavLink)`
	padding: 10px 15px;
	color: #666;
	transition: border-bottom ease 0.5s;

	${({ active }) => css`
		border-bottom: 3px solid ${active ? 'red' : 'transparent'};
	`}

	& + & {
		margin-left: 20px;
	}

	${center}
`;
