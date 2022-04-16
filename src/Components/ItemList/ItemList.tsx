import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {
	Container,
	CheckBoxContainer,
	CheckBox,
	Checkmark,
	Name,
	NameInput,
	Quantity,
	QuantityInput,
	Delete,
	DeleteContainer,
} from "./ItemListStyle";
import { IItem } from "../../Interfaces";

interface Props {
	item: IItem;
	index: number;
	show: boolean;
	edit: boolean;
	itemName: string;
	quantity: string;
	currentIndex: number;
	deleteItem(index: number): void;
	setEdit: Dispatch<SetStateAction<boolean>>;
	setItemName: Dispatch<SetStateAction<string>>;
	setQuantity: Dispatch<SetStateAction<string>>;
	setCurrentIndex: Dispatch<SetStateAction<number>>;
}
const ItemList = ({
	item,
	index,
	show,
	edit,
	itemName,
	quantity,
	currentIndex,
	deleteItem,
	setEdit,
	setItemName,
	setQuantity,
	setCurrentIndex,
}: Props) => {
	const [checked, setChecked] = useState<boolean>(false);

	const activeEdit = (index: number) => {
		setEdit(true);
		setCurrentIndex(index);
		setItemName(item.itemName);
		setQuantity(item.quantity);
	};
	const checkHandler = () => {
		setChecked(!checked);
	};

	return (
		<Container index={index}>
			<CheckBoxContainer>
				<CheckBox type="checkbox" onChange={() => checkHandler()} />
				<Checkmark></Checkmark>
			</CheckBoxContainer>
			{edit && index === currentIndex ? (
				<>
					<NameInput
						type="text"
						value={itemName}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setItemName(event?.target.value)
						}
					/>

					<QuantityInput
						type="text"
						value={quantity}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setQuantity(event?.target.value)
						}
					/>
				</>
			) : (
				<>
					<Name show={show} checked={checked} onClick={() => activeEdit(index)}>
						{item.itemName}
					</Name>
					<Quantity
						show={show}
						checked={checked}
						onClick={() => activeEdit(index)}
					>
						{item.quantity}
					</Quantity>
				</>
			)}
			<DeleteContainer>
				<Delete onClick={() => deleteItem(index)} />
			</DeleteContainer>
		</Container>
	);
};

export default ItemList;