import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
	Container,
	CheckBoxContainer,
	CheckBox,
	Checkmark,
	Name,
	Quantity,
	Delete,
	DeleteContainer,
} from "./AddItemStyle";

interface Props {
	itemName: string;
	setItemName: Dispatch<SetStateAction<string>>;
	quantity: string;
	setQuantity: Dispatch<SetStateAction<string>>;
}

const AddItem = ({ itemName, setItemName, quantity, setQuantity }: Props) => {
	return (
		<Container>
			<CheckBoxContainer>
				<CheckBox type="checkbox" />
				<Checkmark></Checkmark>
			</CheckBoxContainer>
			<Name
				type="text"
				value={itemName}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setItemName(event?.target.value)
				}
			/>
			<Quantity
				type="text"
				value={quantity}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setQuantity(event?.target.value)
				}
			/>
			<DeleteContainer>
				<Delete />
			</DeleteContainer>
		</Container>
	);
};

export default AddItem;
