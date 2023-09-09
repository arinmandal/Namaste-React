import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Components/Header"
import appStore from "../ReduxStore/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
it("Should render Header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
})

it("Should render Header with logotext", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );

  const logo = screen.getByText("The Foodie Express");
  expect(logo).toBeInTheDocument();
})

it("Should render Header with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );

  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
})

it("Should change login button to logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>

  );


  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
})