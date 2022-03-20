import styled, { css } from 'styled-components';

export const ListWrap = styled.div`
	position: relative;
	display: flex;
	padding-left: 7px;
	padding-right: 7px;

	${({ noWrap, flexDicorection, fullWidth, maxWidth }) => css`
		flex-direction: ${flexDicorection || 'column'};
		flex-wrap: ${noWrap ? 'nowarp' : 'wrap'};
		width: ${fullWidth && '100%'};
		max-width: ${maxWidth};
	`}
`;
