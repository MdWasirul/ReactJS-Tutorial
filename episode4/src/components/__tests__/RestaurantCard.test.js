import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_Data from "../mocks/resCardMocks.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_Data[0]} />);

  //query
  const name = screen.getByText("Theobroma");
  //assertion
  expect(name).toBeInTheDocument();
});
