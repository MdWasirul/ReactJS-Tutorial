import { render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResLIstData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body Component with search Bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  console.log(searchBtn);

  expect(searchBtn).toBeInTheDocument();
});
