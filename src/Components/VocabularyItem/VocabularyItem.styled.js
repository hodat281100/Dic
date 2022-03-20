import styled, { css } from 'styled-components';
import { center, mediaMin } from '../../globalStyles';
import ImageIcon from '../ImageIcon';
import Text from '../Text';

export const OptionWrap = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background-color: transparent;
	opacity: 0;
	pointer-events: none;
	${center}
`;

export const VocabularyItemWrap = styled.div`
	${({ theme, isHighlight }) => css`
		background-color: ${theme.color.listItem};
		box-shadow: 0 0 2px ${isHighlight ? theme.color.highlight : '#222'};
	`}
	transition: all ease .5s;
	width: 100%;
	display: flex;
	border-radius: 5px;
	justify-content: space-between;
	padding: 10px 15px;
	margin: 6px 0;
	position: relative;

	& > * {
		user-select: none;
	}

	${mediaMin(css`
		&:hover > p {
			color: transparent;
			pointer-events: none;
			text-shadow: 0 0 8px ${({ theme }) => theme.color.shadowDark};
		}
		&:hover > ${OptionWrap} {
			opacity: 1;
			pointer-events: all;
		}
	`)}
`;

export const Favorite = styled(ImageIcon)`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(50%, -50%) rotate(20deg);
`;

export const VocabularyText = styled(Text)`
	flex: 1;
	${({ align }) => css`
		text-align: ${align};

		${align === 'left' &&
		css`
			padding-right: 15px;
		`}

		${align === 'right' &&
		css`
			padding-left: 15px;
		`}
	`}
`;
