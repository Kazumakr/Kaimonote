import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemList from "./ItemList";

test("todo should be rendered", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: false };
	render(
		<ItemList
			key={0}
			item={item}
			index={0}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={jest.fn()}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={jest.fn()}
		/>
	);
	const itemEl = screen.getByTestId("item-0");
	expect(itemEl).toBeInTheDocument();
	expect(itemEl).toHaveTextContent("eggs");
	expect(itemEl).toHaveTextContent("1pc");
});

test("itemName should be rendered inside Name", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: false };
	render(
		<ItemList
			key={0}
			item={item}
			index={0}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={jest.fn()}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={jest.fn()}
		/>
	);
	const nameEl = screen.getByTestId("name-0");
	const quantityEl = screen.getByTestId("quantity-0");
	expect(nameEl).toHaveTextContent("eggs");
	expect(quantityEl).toHaveTextContent("1pc");
});

test("deleteItem should be called when delete icon cliked", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: false };
	const deleteItem = jest.fn();
	const index = 0;
	render(
		<ItemList
			key={index}
			item={item}
			index={index}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={deleteItem}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={jest.fn()}
		/>
	);
	const deleteIconEl = screen.getByTestId("deleteIcon");
	fireEvent.click(deleteIconEl);
	expect(deleteItem).toHaveBeenCalledWith(index);
});

test("itemName's style should change  when checked is true", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: true };

	render(
		<ItemList
			key={0}
			item={item}
			index={0}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={jest.fn()}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={jest.fn()}
		/>
	);
	const nameEl = screen.getByTestId("name-0");
	expect(nameEl).toHaveStyle(
		"text-decoration:line-through; opacity:0.5; pointer-events:none"
	);
});

test("quantity's style should change  when checked is true", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: true };

	render(
		<ItemList
			key={0}
			item={item}
			index={0}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={jest.fn()}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={jest.fn()}
		/>
	);
	const quantityEl = screen.getByTestId("quantity-0");
	expect(quantityEl).toHaveStyle(
		"text-decoration:line-through; opacity:0.5; pointer-events:none"
	);
});

test("toggleChecked should be called when CheckBox cliked", () => {
	const item = { itemName: "eggs", quantity: "1pc", checked: false };
	const toggleCheked = jest.fn();
	const index = 0;
	render(
		<ItemList
			key={index}
			item={item}
			index={index}
			show={false}
			edit={false}
			itemName={""}
			quantity={""}
			currentIndex={0}
			deleteItem={jest.fn()}
			setEdit={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			setCurrentIndex={jest.fn()}
			toggleChecked={toggleCheked}
		/>
	);
	const checkBoxEl = screen.getByTestId("checkBox-0");
	fireEvent.click(checkBoxEl);
	expect(toggleCheked).toHaveBeenCalledWith(index);
});
