import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 14px;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.color.body};
        transition: background-color 1s ease;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }
    input{
        outline: none;
        border: none;
    }
`;

export default GlobalStyled;

export const Container = styled.div`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: 12px;
	padding-right: 12px;

	${({ theme, fuild }) => css`
		max-width: ${fuild ? '100%' : theme.screen.pc};
		@media (max-width: ${theme.screen.mobile}) {
			max-width: ${fuild ? '100%' : '600px'};
			padding-left: 8px;
			padding-right: 8px;
		} ;
	`}
`;

export const mediaMax = (content, screen = 'mobile') => css`
	@media (max-width: ${({ theme }) => theme.screen[screen]}) {
		${content}
	}
`;

export const mediaMin = (content, screen = 'mobile') => css`
	@media (min-width: ${({ theme }) => theme.screen[screen]}) {
		${content}
	}
`;

export const center = () => css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const centerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
