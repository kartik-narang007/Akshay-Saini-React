import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


jest.mock("../../../images/logo.png", () => "mock-logo.png");

it("Should load header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name:"Login"});

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", {name:"Logout"});

  expect(logOutButton).toBeInTheDocument();
});


it("Should render header components with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart - (0 items)");
  
    expect(cartItems).toBeInTheDocument();
  });
