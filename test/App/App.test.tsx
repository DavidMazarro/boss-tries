/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../src/pages/Home";

test("The app title displays correctly in the home", async () => {
  render(<Home />);

  expect(screen.getByRole("heading")).toHaveTextContent("Boss tries tracker");
});

// test("The form to add a boss displays when clicking the 'Add boss' button in the navbar", async () => {
//   render(<Home />);
//   const links = screen.getByRole("link");
//   fireEvent.click(addBossButton)
//   expect(screen.getByRole("test")).toHaveTextContent("aaaa");
// });
