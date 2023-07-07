import { render } from "@testing-library/react";

// pages
import Home from "../../pages";

describe("tests for the Home page", () => {
  it("should render the Home page", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("home-page")).toBeInTheDocument();
  });
});
