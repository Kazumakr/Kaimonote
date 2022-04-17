import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
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
