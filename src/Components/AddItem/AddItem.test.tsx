import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddItem from "./AddItem";

test("deleteIcon should be rendered", () => {
	render(
		<AddItem
			itemName={""}
			setItemName={jest.fn()}
			quantity={""}
			setQuantity={jest.fn()}
		/>
	);
	const deleteIconEl = screen.getByTestId("deleteIcon");
	expect(deleteIconEl).toBeInTheDocument();
});

test("nameInput should be rendered", () => {
	render(
		<AddItem
			itemName={""}
			setItemName={jest.fn()}
			quantity={""}
			setQuantity={jest.fn()}
		/>
	);
	const nameInputEl = screen.getByTestId("nameInput");
	expect(nameInputEl).toBeInTheDocument();
});

test("quantityInput should be rendered", () => {
	render(
		<AddItem
			itemName={""}
			setItemName={jest.fn()}
			quantity={""}
			setQuantity={jest.fn()}
		/>
	);
	const quantityInputEl = screen.getByTestId("quantityInput");
	expect(quantityInputEl).toBeInTheDocument();
});

test("setItemName should be called when input value changed", () => {
	const setItemName = jest.fn();
	render(
		<AddItem
			itemName={""}
			setItemName={setItemName}
			quantity={""}
			setQuantity={jest.fn()}
		/>
	);

	const nameInputEl = screen.getByTestId("nameInput");
	const testValue = "test";
	fireEvent.change(nameInputEl, { target: { value: testValue } });
	expect(setItemName).toHaveBeenCalledWith(testValue);
});

test("setQuantity should be called when input value changed", () => {
	const setQuantity = jest.fn();
	render(
		<AddItem
			itemName={""}
			setItemName={jest.fn()}
			quantity={""}
			setQuantity={setQuantity}
		/>
	);

	const quantityInputEl = screen.getByTestId("quantityInput");
	const testValue = "test";
	fireEvent.change(quantityInputEl, { target: { value: testValue } });
	expect(setQuantity).toHaveBeenCalledWith(testValue);
});
