import React from "react";
import { render, cleanup } from "@testing-library/react";
import CubosPage from "../components/cubosPage";

afterEach(cleanup);

test("Render Cubos Page", () => {
  const { getByTestId } = render(<CubosPage />);
  expect(getByTestId("divCubosPage")).toBeInTheDocument();
})
