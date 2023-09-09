import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Components/Body"
import mock_data from "../Mocks/mockRestraList.data.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data)
    }
  })
})

describe("Body component test case", () => {

  // Helper function 
  beforeAll(() => {
    console.log("Before All")
  })
  beforeEach(() => {
    console.log("Before Each")
  })

  afterEach(() => {
    console.log("After Each")
  })
  afterAll(() => {
    console.log("After All")
  })
  
 
  // Test cases for Search "dhaba" text input inside Body
it("Should Search for dhaba text input", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ))


  // render initially load cards
  const cardBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardBeforeSearch.length).toBe(102);
  // find search button inside body component
  const searchButton = screen.getByRole("button", { name: "Search" })
  // console.log(searchButton)

  const inputBox = screen.getByTestId("searchInput");

  // search text
  fireEvent.change(inputBox, { target: { value: "dhaba" } })
  // console.log(inputBox)

  fireEvent.click(searchButton)
  // find card by test id
  const cardAfterSearch = screen.getAllByTestId("resCard")
  expect(cardAfterSearch.length).toBe(4);
})

it("Should Filter Top Rated Restaurant", async () => {
  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ))

  // render initially load cards
  const cardBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardBeforeSearch.length).toBe(102);

  const topRestaurantButton = screen.getByRole("button", { name: "Top Rated Restaurants" })

  fireEvent.click(topRestaurantButton);
  const topCards = screen.getAllByTestId("resCard");
  // console.log(topCards.length)
  expect(topCards.length).toBe(71);
})

})
