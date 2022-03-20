import styled, { css } from 'styled-components';
import { center } from '../../globalStyles';
import { shares as space } from '../button.styles';

export const ImageIconWrap = styled.span`
	${({ fontSize, size = 'medium' }) =>
		fontSize
			? css`
					width: ${fontSize};
			  `
			: css`
					${size === 'medium' &&
					css`
						width: 1.5rem;
					`};
					${size === 'small' &&
					css`
						width: 1.3rem;
					`};
					${size === 'large' &&
					css`
						width: 2rem;
					`};
			  `}
	cursor: ${({ noPointer }) => noPointer || 'pointer'};

	${center}
	${space}
`;

export const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
