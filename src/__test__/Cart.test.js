import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../Pages/RestaurantMenu"
import Header from "../Components/Header"
import Cart from "../Components/Cart"
import {clearCart} from "/src/ReduxStore/cartSlice"
import { BrowserRouter } from "react-router-dom"
import Restaurant_mock_data from "../Mocks/RestaurantMock.json"
import { Provider } from "react-redux"
import appStore from "../ReduxStore/appStore"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Restaurant_mock_data)
    }
  })
})

describe("Should load Restaurant Menu and Accordion list", () => {
it("Should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>);
  })

  const accordionHeader = screen.getByText("Tarka(10)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(10)

  const addBtn = screen.getAllByRole("button", { name: "ADD +" })
  fireEvent.click(addBtn[0])

  expect(screen.getByText("Cart (1items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2items)")).toBeInTheDocument();

  // expect(screen.getAllByTestId("foodItems").length).toBe(10)
})
})
