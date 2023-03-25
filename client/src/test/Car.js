// import React from "react";
// import { Router } from "react-router-dom";
// import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { createMemoryHistory } from "history";
// import Cart from "../components/Carts/Cart/Cart.jsx";
// import { Provider } from "react-redux";
// import store from "../redux/store/index";
// import { screen, getByLabelText } from "@testing-library/dom";
// import renderer from "react-test-renderer";

// describe("App component", () => {
//   const history = createMemoryHistory();
//   let component

//   const item = {
//     id: 1,
//     image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
//     weight: "3 - 6",
//   };

//   beforeEach(() => {
//     component = render(
//       <Provider store={store}>
//         <Router history={history}>
//           <Cart item={item} />
//         </Router>
//       </Provider>
//     );
//   });

//   // test("renderizar el componente Cart", () => {
//   //   screen.debug();
//   // });

//   test("debe mostrar el componente Cart", () => {
//     expect(component.container).toBeInTheDocument();
//   });

//   it("changes the class when hovered", () => {
//     const component = renderer.create(
//       <Provider store={store}>
//         <Router history={history}>
//           <Cart item={item} />
//         </Router>
//       </Provider>
//     );
    
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();


//   });
// });
