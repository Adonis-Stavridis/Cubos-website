import React from "react";
import { render } from "@testing-library/react";
import CubosPage from "../components/cubosPage";

test("Render Cubos Page", () => {
  const { getByTestId } = render(<CubosPage />);
  expect(getByTestId("divCubosPage")).toBeInTheDocument();
})
