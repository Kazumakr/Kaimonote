import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

test("Setshow should be called when addText clicked", () => {
	const setShow = jest.fn();
	render(
		<Header
			show={false}
			setShow={setShow}
			edit={false}
			setEdit={jest.fn()}
			addItem={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			currentIndex={0}
			updateItem={jest.fn()}
			itemList={[]}
			deleteAllItems={jest.fn()}
		/>
	);
	const addTextEl = screen.getByTestId("addText");
	fireEvent.click(addTextEl);
	expect(setShow).toHaveBeenCalledTimes(1);
});

test("done text should be rendered when show is true", () => {
	render(
		<Header
			show={true}
			setShow={jest.fn()}
			edit={false}
			setEdit={jest.fn()}
			addItem={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			currentIndex={0}
			updateItem={jest.fn()}
			itemList={[]}
			deleteAllItems={jest.fn()}
		/>
	);
	const doneTextEl = screen.getByTestId("doneText");
	expect(doneTextEl).toBeInTheDocument();
});

test("cancel text should be rendered when show is true", () => {
	render(
		<Header
			show={true}
			setShow={jest.fn()}
			edit={false}
			setEdit={jest.fn()}
			addItem={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			currentIndex={0}
			updateItem={jest.fn()}
			itemList={[]}
			deleteAllItems={jest.fn()}
		/>
	);
	const cancelTextEl = screen.getByTestId("cancelText");
	expect(cancelTextEl).toBeInTheDocument();
});

test("Reset text should be rendered when show is false and itemList.length > 0", () => {
	const itemList = [{ itemName: "eggs", quantity: "1pc", checked: false }];
	render(
		<Header
			show={false}
			setShow={jest.fn()}
			edit={false}
			setEdit={jest.fn()}
			addItem={jest.fn()}
			setItemName={jest.fn()}
			setQuantity={jest.fn()}
			currentIndex={0}
			updateItem={jest.fn()}
			itemList={itemList}
			deleteAllItems={jest.fn()}
		/>
	);
	const resetTextEl = screen.getByTestId("resetText");
	expect(resetTextEl).toBeInTheDocument();
});
