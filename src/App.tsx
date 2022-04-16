import React, { Fragment, FC, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import AddItem from "./Components/AddItem/AddItem";
import ItemList from "./Components/ItemList/ItemList";
import { IItem } from "./Interfaces";
import GlobalStyle from "./globalStyle";

const App: FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const [edit, setEdit] = useState<boolean>(false);
	const [itemName, setItemName] = useState<string>("");
	const [quantity, setQuantity] = useState<string>("");
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [itemList, setItemList] = useState<IItem[]>(() => {
		const savedItemList = localStorage.getItem("itemList");
		if (savedItemList) {
			return JSON.parse(savedItemList);
		} else {
			return [];
		}
	});

	const addItem = (): void => {
		if (itemName !== "") {
			const newItem = { itemName: itemName, quantity: quantity };
			setItemList([...itemList, newItem]);
		}
		setItemName("");
		setQuantity("");
	};

	const deleteItem = (index: number): void => {
		setItemList((itemList) => itemList.filter((item, i) => i !== index));
	};

	const updateItem = (index: number): void => {
		console.log("itemName&quantity", itemName, quantity);
		const newItems = itemList.map((item, i) => {
			if (i === index) {
				return { itemName, quantity };
			}
			return item;
		});
		console.log("newItems", newItems);
		setItemList(newItems);
		setItemName("");
		setQuantity("");
	};

	useEffect(() => {
		localStorage.setItem("itemList", JSON.stringify(itemList));
	}, [itemList]);
	return (
		<Fragment>
			<GlobalStyle />
			<Header
				show={show}
				setShow={setShow}
				edit={edit}
				setEdit={setEdit}
				addItem={addItem}
				setItemName={setItemName}
				setQuantity={setQuantity}
				currentIndex={currentIndex}
				updateItem={updateItem}
			/>
			{show && (
				<AddItem
					itemName={itemName}
					setItemName={setItemName}
					quantity={quantity}
					setQuantity={setQuantity}
				/>
			)}
			{itemList.map((item: IItem, index: number) => (
				<ItemList
					key={index}
					item={item}
					index={index}
					show={show}
					edit={edit}
					itemName={itemName}
					quantity={quantity}
					currentIndex={currentIndex}
					deleteItem={deleteItem}
					setEdit={setEdit}
					setItemName={setItemName}
					setQuantity={setQuantity}
					setCurrentIndex={setCurrentIndex}
				/>
			))}
		</Fragment>
	);
};

export default App;
