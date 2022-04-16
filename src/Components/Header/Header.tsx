import React, { Dispatch, SetStateAction } from "react";
import {
	Container,
	Left,
	Center,
	Right,
	Add,
	Cancel,
	Done,
	Reset,
} from "./HeaderStyle";
import { IItem } from "../../Interfaces";

interface Props {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	edit: boolean;
	setEdit: Dispatch<SetStateAction<boolean>>;
	addItem(): void;
	setItemName: Dispatch<SetStateAction<string>>;
	setQuantity: Dispatch<SetStateAction<string>>;
	updateItem(index: number): void;
	currentIndex: number;
	itemList: IItem[];
	deleteAllItems(): void;
}

const Header = ({
	show,
	setShow,
	edit,
	setEdit,
	addItem,
	setItemName,
	setQuantity,
	currentIndex,
	updateItem,
	itemList,
	deleteAllItems,
}: Props) => {
	const handleClick = () => {
		if (edit) {
			updateItem(currentIndex);
		} else {
			addItem();
		}
		setShow(false);
		setEdit(false);
	};

	const handleCancel = () => {
		if (edit) {
			setEdit(false);
			setItemName("");
			setQuantity("");
		} else {
			setItemName("");
			setQuantity("");
		}
		setShow(false);
	};
	return (
		<Container>
			<Left>
				{show || edit ? (
					<Cancel onClick={handleCancel}>Cancel</Cancel>
				) : (
					itemList && <Reset onClick={deleteAllItems}>Reset</Reset>
				)}
			</Left>
			<Center>KAIMONOTE</Center>
			<Right>
				{show || edit ? (
					<Done onClick={handleClick}>Done</Done>
				) : (
					<Add onClick={() => setShow(true)} />
				)}
			</Right>
		</Container>
	);
};

export default Header;
