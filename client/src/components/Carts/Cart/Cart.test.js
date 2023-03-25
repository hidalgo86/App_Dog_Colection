import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Cart from "./Cart";

describe("Componente Cart", () => {
  const initialState = { dogs: [{ id: 1 }] };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  beforeEach(() => {
      render(
        <Provider store={store}>
          <Cart item={initialState.dogs[0]}/>
        </Provider>
      );
  });

  test("contiene el texto (Peso:)", () => {
    screen.getByText("Peso:");
  });

  test("contiene el texto (Peso:)", () => {
    screen.getByText("Peso:");
  });

});