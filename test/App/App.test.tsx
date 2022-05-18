/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/Home";

test("The app title displays correctly in the home", async () => {
  render(<Home />);

  expect(screen.getByRole("h1")).toHaveTextContent("Boss tries tracker");
});
