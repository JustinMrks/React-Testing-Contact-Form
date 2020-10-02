import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
// import { act } from "react-dom/test-utils";

test("able to fill out form and submit it", async () => {
  render(<ContactForm />);

  const fNameInput = screen.getByLabelText(/first name/i);
  const lNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const button = screen.getByRole("button", { type: "submit" });

  fireEvent.change(fNameInput, { target: { value: "Justin" } });
  fireEvent.change(lNameInput, { target: { value: "Marks" } });
  fireEvent.change(emailInput, { target: { value: "jm@gmail.com" } });
  fireEvent.change(messageInput, { target: { value: "dasfasd" } });

  fireEvent.click(button);

  await screen.findByText(/justin/i);
  await screen.findByText(/marks/i);
  await screen.findByText(/jm@gmail.com/i);
  await screen.findByText(/dasfasd/i);
});
