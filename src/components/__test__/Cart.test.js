import { render } from "react-dom";
import RestaurentMenu from "../RestaurentMenu";
import { act } from "react-dom/test-utils";
import Mock_Data from "../../components/mocks/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(Mock_Data),
  });
});

it("Should load restaurent menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurentMenu />
      </BrowserRouter>
    )
  );
});
