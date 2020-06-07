import React from "react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "../components/app";

afterEach(cleanup);

test("Render About Page", () => {
  const history = createHashHistory();
  history.push("about");

  const { getByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(getByTestId("jumbotronAboutPage")).toBeInTheDocument();

  fireEvent.click(getByText("Download page"));
  expect(document.title).toBe("Cubos - Download");
});
