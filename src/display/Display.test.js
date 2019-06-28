// Test away!
import React from "react";
import renderer from "react-test-renderer";
import Display from "./Display";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("displays closed if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} locked={false} />);
    const closed = getByText(/closed/i);
    expect(closed).toBeInTheDocument();
  });

  it("displays open if closed prop is false", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const open = getByText(/open/i);
    expect(open).toBeInTheDocument();
  });
  it("displays locked if the locked prop is true", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    const locked = getByText(/locked/i);
    expect(locked).toBeInTheDocument();
  });
  it("displays unlocked if locked prop is false", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    const unlocked = getByText(/unlocked/i);
    expect(unlocked).toBeInTheDocument();
  });
  it("uses red-led class when locked or closed", () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />);
    const locked = getByTestId("lockUnlock");
    const closed = getByTestId("closeOpen");
    expect(locked).toHaveClass("red-led");
    expect(closed).toHaveClass("red-led");
  });
  it("uses green-led clas when unlocked or open", () => {
    const { getByTestId } = render(<Display closed={false} locked={false} />);
    const unlocked = getByTestId("lockUnlock");
    const open = getByTestId("closeOpen");
    expect(unlocked).toHaveClass("green-led");
    expect(open).toHaveClass("green-led");
  });
});
