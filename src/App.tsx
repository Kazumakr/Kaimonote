import React, { Fragment, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import AddItem from "./Components/AddItem/AddItem";
import ItemList from "./Components/ItemList/ItemList";
import { IItem } from "./Interfaces";
import GlobalStyle from "./globalStyle";

const App = () => {
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
			const newItem = {
				itemName: itemName,
				quantity: quantity,
				checked: false,
			};
			setItemList([...itemList, newItem]);
		}
		setItemName("");
		setQuantity("");
	};

	const deleteItem = (index: number): void => {
		setItemList((itemList) => itemList.filter((item, i) => i !== index));
	};
	const toggleChecked = (index: number): void => {
		const newItems = itemList.map((item, i) => {
			if (i === index) {
				if (item.checked === false) {
					return { ...item, checked: true };
				} else {
					return { ...item, checked: false };
				}
			}
			return item;
		});

		setItemList(newItems);
	};

	const updateItem = (index: number): void => {
		const newItems = itemList.map((item, i) => {
			if (i === index) {
				return { itemName, quantity, checked: false };
			}
			return item;
		});

		setItemList(newItems);
		setItemName("");
		setQuantity("");
	};

	const deleteAllItems = (): void => {
		localStorage.removeItem("itemList");
		setItemList([]);
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
				itemList={itemList}
				deleteAllItems={deleteAllItems}
			/>
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
					toggleChecked={toggleChecked}
				/>
			))}
			{show && (
				<AddItem
					itemName={itemName}
					setItemName={setItemName}
					quantity={quantity}
					setQuantity={setQuantity}
				/>
			)}
		</Fragment>
	);
};

export default App;
