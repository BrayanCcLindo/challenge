import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Plans from "./Plans";
import { RenderWithProviders } from "@/test/test-utils";

describe("Plans component", () => {
  it("renders plans message", () => {
    RenderWithProviders(<Plans />);
    expect(screen.getByText(/Planes y coberturas/i)).toBeInTheDocument();
  });
});
