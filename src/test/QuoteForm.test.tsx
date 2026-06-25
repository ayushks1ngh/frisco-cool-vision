import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";

describe("QuoteForm", () => {
  it("renders form fields", () => {
    render(<BrowserRouter><QuoteForm /></BrowserRouter>);
    expect(screen.getByPlaceholderText("John Smith")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("(972) 000-0000")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Send Request")).toBeInTheDocument();
  });

  it("has required name and phone fields", () => {
    render(<BrowserRouter><QuoteForm /></BrowserRouter>);
    const nameInput = screen.getByPlaceholderText("John Smith");
    const phoneInput = screen.getByPlaceholderText("(972) 000-0000");
    expect(nameInput).toBeRequired();
    expect(phoneInput).toBeRequired();
  });
});
