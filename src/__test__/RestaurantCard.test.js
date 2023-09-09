import { render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../Components/RestaurantCard" 
import mock from "../Mocks/restaurantcard.mock.json"
it("should render RestaurantCard component with Props Data", () => {
  
  render(<RestaurantCard restaurantData={mock} />)
  const name = screen.getByText("Chowman");

  expect(name).toBeInTheDocument();
})