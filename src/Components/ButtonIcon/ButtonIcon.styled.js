import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { center } from '../../globalStyles';
import { primary, outline, navigation, shares as space } from '../button.styles';

const shares = ({ theme, styled = 'primary', color = 'primary', size, circle, isHover }) => css`
	border-radius: ${circle ? '50%' : '10%'};
	padding: 5px;

	${size === 'small' &&
	css`
		padding: 4px;
	`}
	${size === 'large' &&
	css`
		padding: 6px;
	`}

	${styled === 'primary' && primary}
	${styled === 'outline' && outline}
	${styled === 'default' &&
	css`
		padding: 0;
		color: ${theme.color[color]};
		background-color: transparent;

		${isHover &&
		css`
			padding: ${circle ? '5px' : '1px'};
			&:hover {
				background-color: ${theme.color[color]};
				color: white;
			}
		`}
		${space}
	`}
	${styled === 'navigation' && navigation}
	${center}
`;

export const ButtonIconWrap = styled.button`
	${shares}
`;

export const LinkIconWrap = styled(Link)`
	${shares}
`;
