import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const cartItem=screen.getByText("Cart-(1 items)");
  // const cartItem = screen.getByText(/Cart/);

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  //   const loginButton = screen.getByText("button");
  //Assertion
  // expect(loginButton).toBeInTheDocument();
  // expect(cartItem).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
});
