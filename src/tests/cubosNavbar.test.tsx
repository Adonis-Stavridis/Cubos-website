import React from "react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/app";

afterEach(cleanup);

test("Render Navbar", () => {
  const history = createHashHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(document.title).toBe("Cubos");

  fireEvent.click(getByText("About"));
  expect(document.title).toBe("Cubos - About");

  fireEvent.click(getByText("Cubos"));
  expect(document.title).toBe("Cubos");

  fireEvent.click(getByText("Documentation"));
  expect(document.title).toBe("Cubos - Documentation");

  fireEvent.click(getByText("Download"));
  expect(document.title).toBe("Cubos - Download");

  fireEvent.click(getByText("Home"));
  expect(document.title).toBe("Cubos");
});
