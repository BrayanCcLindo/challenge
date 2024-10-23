import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Header from "./Header";
import { RenderWithProviders } from "@/test/test-utils";

describe("Header component", () => {
  it("renders header message", () => {
    RenderWithProviders(<Header />);
    expect(screen.getByText(/¡Compra por este medio!/i)).toBeInTheDocument();
  });
});
