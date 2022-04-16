import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { breakpoints } from "../../breakpoints";

export const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 60px;
	margin-bottom: 20px;
	@media ${breakpoints.mobile} {
		margin-bottom: 10px;
	}
`;
export const Left = styled.div`
	flex: 1;
`;
export const Center = styled.div`
	flex: 2;
	font-size: 28px;
	@media ${breakpoints.mobile} {
		font-size: 24px;
	}
`;
export const Right = styled.div`
	flex: 1;
`;

export const Add = styled(FaPlusCircle)`
	width: 25px;
	height: 25px;
	cursor: pointer;
`;

export const Cancel = styled.span`
	font-size: 18px;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
export const Done = styled.span`
	font-size: 18px;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
export const Reset = styled.span`
	font-size: 18px;
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
