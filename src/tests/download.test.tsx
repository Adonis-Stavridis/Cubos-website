import React from "react";
import { render, cleanup } from "@testing-library/react";
import CubosDownloadPage, {
  setOS,
  getOS,
  getFile,
  downloadInfo,
} from "../pages/download";

afterEach(cleanup);

test("Render Desktop Download Info", () => {
  const { getByTestId } = render(downloadInfo("linux"));
  expect(getByTestId("pDownloadInfo")).toHaveTextContent(
    "According to your Operating System, it is recommended you download the Linux version of Cubos!"
  );
});

test("Render Mobile Download Info", () => {
  const { getByTestId } = render(downloadInfo("mobile"));
  expect(getByTestId("pDownloadInfo")).toHaveTextContent(
    "Sorry! There are no available versions of this software for Mobile! You can download any of the available versions, yet it is not recommended!"
  );
});

test("Render Unknown Download Info", () => {
  const { getByTestId } = render(downloadInfo("unknown"));
  expect(getByTestId("pDownloadInfo")).toHaveTextContent(
    "Sorry! You're Operating System could not be detected. You can download any of the available versions, yet it is not recommended!"
  );
});

test("function: setOS", () => {
  expect(setOS()).toBe("unknown");
});

test("function: getOS", () => {
  expect(getOS("linux")).toBe("Linux");
  expect(getOS("unknown")).toBe("");
});

test("function: getFile", () => {
  expect(getFile("linux")).toBe("linux.png");
  expect(getFile("unknown")).toBe("");
});
