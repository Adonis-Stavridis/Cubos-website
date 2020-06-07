import React from "react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/app";

afterEach(cleanup);

test("Render Documentation Page", () => {
  const history = createHashHistory();
  history.push("documentation");

  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("jumbotronDocumentationPage")).toBeInTheDocument();
});
