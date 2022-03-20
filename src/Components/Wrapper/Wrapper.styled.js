import styled, { css } from 'styled-components';

export const WrapperContainer = styled.div`
	${({ Display, flex, flexWrap, flexDirection, justifyContent, alignItems, alignSelf }) => css`
		display: ${Display};
		flex: ${flex};
		flex-wrap: ${flexWrap};
		flex-direction: ${flexDirection};
		justify-content: ${justifyContent};
		align-items: ${alignItems};
		align-self: ${alignSelf};
	`}

	${({ gridGap, gridTemplate }) => css`
		grid-template-columns: ${gridTemplate};
		grid-gap: ${gridGap};
	`}

	${({ position, top, bottom, left, right }) => css`
		position: ${position};
		top: ${top};
		bottom: ${bottom};
		left: ${left};
		right: ${right};
	`}

    ${({ width, height, maxWidth, maxHeight, minWidth, minHeight }) => css`
		width: ${width};
		height: ${height};
		max-width: ${maxWidth};
		max-height: ${maxHeight};
		min-width: ${minWidth};
		min-height: ${minHeight};
	`}

    ${({ margin, padding }) => css`
		margin: ${margin};
		padding: ${padding};
	`}
`;
