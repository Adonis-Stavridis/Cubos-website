import React from "react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/app";

afterEach(cleanup);

test("Render App", () => {
  const history = createHashHistory();

  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(document.title).toBe("Cubos");
});

test("Render App from URL", () => {
  const history = createHashHistory();
  history.push("documentation");

  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(document.title).toBe("Cubos - Documentation");
});

test("Render App 404", () => {
  const history = createHashHistory();
  history.push("unknown");

  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(document.title).toBe("Cubos");
});
