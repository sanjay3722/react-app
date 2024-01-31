import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurentCard from "../Restaurent";
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render restaurent compoent with props data", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const title = screen.getByText("Mens Cotton Jacket");
  //   Assertion
  expect(title).toBeInTheDocument();
});

it("Should render restaurent compoent with promoted label", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const title = screen.getByText("Mens Cotton Jacket");
  //   Assertion
  expect(title).toBeInTheDocument();
});
