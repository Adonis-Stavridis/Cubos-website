import React from "react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/app";

afterEach(cleanup);

test("Render Home Page", () => {
  const history = createHashHistory();
  
  const { getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("jumbotronHomePage")).toBeInTheDocument();

  fireEvent.click(getByText("Download now !"));
  expect(document.title).toBe("Cubos - Download");
});
