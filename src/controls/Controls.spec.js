// Test away!
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(cleanup);

describe("<Controls/>", () => {
  describe("provide buttons to toggle the `closed` and `locked` state", () => {
    it("renders toggle button for `closed` state", () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
    });

    it("renders toggle button for `locked` state", () => {
      const { getByText } = render(<Controls />);
      getByText(/lock gate/i);
    });
  });

  describe("button text changes to reflect the state the door will be in if clicked", () => {
    it("button text displays `Unlock Gate` when gate is locked", () => {
      const mockProps = { locked: true };
      const { getByText } = render(<Controls {...mockProps} />);
      expect(getByText(/unlock gate/i).textContent).toBe("Unlock Gate");
    });
    it("button text displays `Lock Gate` when gate is locked", () => {
      const mockProps = { locked: false };
      const { getByText } = render(<Controls {...mockProps} />);
      expect(getByText(/lock gate/i).textContent).toBe("Lock Gate");
    });
    it("button text displays `Open Gate` when gate is closed", () => {
      const mockProps = { closed: false };
      const { getByText } = render(<Controls {...mockProps} />);
      expect(getByText(/close gate/i).textContent).toBe("Close Gate");
    });
    it("button text displays `Close Gate` when gate is open", () => {
      const mockProps = { closed: true };
      const { getByText } = render(<Controls {...mockProps} />);
      expect(getByText(/open gate/i).textContent).toBe("Open Gate");
    });
  });

  describe("disabled button testing", () => {
    it("close toggle button is disabled if the gate is locked", () => {});
  });
});
