import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
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
	toggleChecked(index: number): void;
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
	toggleChecked,
}: Props) => {
	const activeEdit = (index: number) => {
		setEdit(true);
		setCurrentIndex(index);
		setItemName(item.itemName);
		setQuantity(item.quantity);
	};

	return (
		<Container index={index} data-testid={`item-${index}`}>
			<CheckBoxContainer>
				<CheckBox
					data-testid={`checkBox-${index}`}
					checked={item.checked}
					type="checkbox"
					onChange={() => toggleChecked(index)}
				/>
				<Checkmark></Checkmark>
			</CheckBoxContainer>
			{edit && index === currentIndex ? (
				<>
					<NameInput
						data-testid={`nameInput-${index}`}
						type="text"
						value={itemName}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setItemName(event?.target.value)
						}
					/>

					<QuantityInput
						data-testid={`quantityInput-${index}`}
						type="text"
						value={quantity}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setQuantity(event?.target.value)
						}
					/>
				</>
			) : (
				<>
					<Name
						data-testid={`name-${index}`}
						show={show}
						checked={item.checked}
						onClick={() => activeEdit(index)}
					>
						{item.itemName}
					</Name>
					<Quantity
						data-testid={`quantity-${index}`}
						show={show}
						checked={item.checked}
						onClick={() => activeEdit(index)}
					>
						{item.quantity}
					</Quantity>
				</>
			)}
			<DeleteContainer>
				<Delete data-testid="deleteIcon" onClick={() => deleteItem(index)} />
			</DeleteContainer>
		</Container>
	);
};

export default ItemList;
