import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Tabs from "../Tabs";

const data = [
  { name: "Elephants", content: "They have trunks." },
  { name: "Jaguars", content: 12 },
  {
    name: "Pencils",
    content: (
      <div>
        <h1>Crayons</h1>
        <p>Write things.</p>
      </div>
    ),
  },
];

beforeEach(() => render(<Tabs data={data} />));

describe("components/common/Tabs", () => {
  it("renders", () => {
    expect(screen).toBeTruthy();
  });

  it("has tabs", () => {
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getAllByRole("tab")).toHaveLength(3);
    data.map(({ name }) =>
      expect(screen.getByRole("tab", { name })).toBeInTheDocument()
    );
  });

  it("shows first tab content only", () => {
    expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    expect(screen.getByRole("tabpanel")).toHaveTextContent(data[0].content);
    expect(screen.queryByText(data[1].content)).not.toBeVisible();
  });
});
