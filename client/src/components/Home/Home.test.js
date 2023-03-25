import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Home from "./Home.jsx";
import "react-dom/test-utils";
import Carts from "../Carts/Carts.jsx"

describe("App component", () => {
  const initialState = { dogs: [{ id: 1 }, { id: 2 }] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  jest.mock("../Carts/Carts.jsx", () => {
    const originalModule = jest.requireActual("../components/Carts/Carts.jsx");
    return {
      __esModule: true,
      ...originalModule,
      default: jest.fn(() => 'mocked carts')
    }
  });

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  test("home se renderiza", () => {
    // screen.debug();
  });
});
