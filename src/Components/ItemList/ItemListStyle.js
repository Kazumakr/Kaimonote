import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { breakpoints } from "../../breakpoints";
export const Container = styled.div`
	max-width: 900px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	margin: 0 auto;
	border: 1px solid gray;
	padding: 15px 0;
	border-top: ${(props) => (props.index === 0 ? "1px solid gray" : "none")};
	@media ${breakpoints.mobile} {
		width: 100%;
	}
`;

export const CheckBoxContainer = styled.label`
	position: relative;
	cursor: pointer;
	flex: 5%;
`;

export const Checkmark = styled.span`
	position: absolute;
	top: -14px;
	left: 20px;
	height: 25px;
	width: 25px;
	background-color: #eee;
	::after {
		content: "";
		position: absolute;
		display: none;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		border: solid black;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;
export const CheckBox = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
	&:checked + ${Checkmark}::after {
		display: block;
	}
`;
export const Name = styled.span`
	font-size: 18px;
	flex: 60%;
	text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
	opacity: ${(props) => props.checked && 0.5};
	pointer-events: ${(props) => (props.checked || props.show) && "none"};
`;
export const Quantity = styled.span`
	font-size: 18px;
	flex: 20%;
	text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
	opacity: ${(props) => props.checked && 0.5};
	pointer-events: ${(props) => (props.checked || props.show) && "none"};
	border-left: 1px solid gray;
	border-right: 1px solid gray;
`;

export const NameInput = styled.input`
	font-size: 18px;
	min-width: 0;
	flex: 60%;
	color: white;
	background-color: black;
	border: none;
	text-align: center;
	&:focus {
		outline: none;
	}
`;
export const QuantityInput = styled.input`
	font-size: 18px;
	min-width: 0;
	flex: 20%;
	color: white;
	background-color: black;
	border: none;
	text-align: center;
	border-left: 1px solid gray;
	border-right: 1px solid gray;

	&:focus {
		outline: none;
	}
`;

export const DeleteContainer = styled.div`
	flex: 15%;
`;
export const Delete = styled(FaTrashAlt)`
	color: #ff3f3f;
`;
