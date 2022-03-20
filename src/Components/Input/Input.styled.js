import styled, { css } from 'styled-components';
import ButtonIcon from '../ButtonIcon';

export const InputIcon = styled(ButtonIcon)`
	color: ${({ theme }) => theme.color.txtColor};
	margin-left: 10px;
	position: relative;
`;

export const InputWrap = styled.div`
	padding: 5px 10px;
	width: 200px;
	display: flex;
	transition: background-color 0.3s ease;

	${({ theme, circle, maxWidth, width, flex }) => css`
		border-radius: ${circle ? '20px' : '8px'};
		width: ${maxWidth ? '100%' : width};
		flex: ${flex};
		background-color: ${theme.color.input};
		box-shadow: 0 0 5px ${theme.color.txtColor};

		& > ${InputIcon}:not(:nth-child(2))::before {
			content: '';
			width: 1px;
			background-color: ${theme.color.txtColor};
			position: absolute;
			top: 0;
			left: -5px;
			bottom: 0;
			pointer-events: none;
		}
	`}
`;

export const InputElement = styled.input`
	background-color: unset;
	color: ${({ theme }) => theme.color.txtColor};
	width: 100%;
	min-height: 25px;
	padding-left: 10px;
	font-size: 1rem;
	&::placeholder {
		font-style: italic;
	}
`;
