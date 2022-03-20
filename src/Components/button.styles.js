import { css } from 'styled-components';

export const shares = () => css`
	transition: all ease 0.3s;
	&:hover {
		opacity: 0.85;
	}
	& + span,
	& + button,
	& + a {
		margin-left: 20px;
	}
`;

export const primary = ({ color = 'primary', theme }) =>
	css`
		color: white;
		background-color: ${theme.color[color]};
		border: 2px solid ${theme.color[color]};

		${shares}
	`;

export const outline = ({ color = 'primary', theme }) =>
	theme.mode === 'light'
		? css`
				color: ${theme.color[color]};
				background-color: transparent;
				border: 2px solid ${theme.color[color]};

				&:hover {
					color: white;
					background-color: ${theme.color[color]};
				}

				${shares}
		  `
		: primary;

export const navigation = ({ theme }) => css`
	border-radius: 50%;
	box-shadow: 0 0 10px ${theme.color.navigation};

	${theme.mode === 'light'
		? css`
				color: ${theme.color.navigation};
				background-color: white;
				border: 2px solid transparent;

				&:hover {
					background-color: ${theme.color.navigation};
					color: white;
				}

				${shares}
		  `
		: primary};
`;
