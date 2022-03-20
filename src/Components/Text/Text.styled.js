import styled, { css } from 'styled-components';

export const TextWrap = styled.p`
	${({ theme, bold, noWrap, fontSize }) => css`
		color: ${theme.color.txtColor};
		font-weight: ${bold ? 'bold' : 400};
		white-space: ${noWrap ? 'nowrap' : 'normal'};
		font-size: ${fontSize || '1rem'};
		font-family: ${theme.font.phi}, sans-serif;

		${noWrap &&
		css`
			overflow: hidden;
			text-overflow: ellipsis;
		`}
	`}

	letter-spacing: 1px;
	line-height: 1.2rem;
`;
