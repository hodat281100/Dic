import styled from 'styled-components';
import { center } from '../../globalStyles';

export const BoxBoxBorder = styled.div`
	background: rgb(187, 75, 174);
	background: ${({ color }) => color};
	border-radius: 20px;
	padding: 3px;
`;

export const BoxBoxWrap = styled.div`
	border-radius: 20px;
	width: 250px;
	height: 250px;
	background-color: ${({ theme }) => theme.color.listItem};
	overflow: hidden;
	cursor: pointer;
	transition: background-color ease 1s;
	color: ${({ theme }) => theme.color.txtColor};
`;

export const BoxBoxHeader = styled.div`
	padding: 20px 0 10px 18px;
	height: 55px;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: rgb(187, 75, 174);
		background: ${({ color }) => color};
	}
`;

export const BoxBoxTitle = styled.h2`
	font-weight: 500;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 140px;
`;

export const BoxBoxCircle = styled.div`
	position: absolute;
	z-index: 1;
	right: 0;
	top: 100%;
	transform: translate(-50%, -50%);

	width: 60px;
	height: 60px;
	border-radius: 50%;
	${center}

	background: rgb(187, 75, 174);
	background: ${({ color }) => color};
`;

export const BoxBoxIcon = styled.img`
	width: 70%;
`;

export const BoxBoxBody = styled.div`
	position: relative;
	height: calc(100% - 55px);
	overflow: hidden;
`;

export const BoxBoxContent = styled.span`
	font-size: 3rem;
	font-weight: 400;
	position: absolute;
	right: 30px;
	left: 30px;
	bottom: 30px;
	text-align: right;
	max-height: 100px;
	overflow: hidden;
`;
