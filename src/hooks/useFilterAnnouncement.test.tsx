import { describe, it, expect, vi, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import useFilterAnnouncement from "./useFilterAnnouncement";
import { announce } from "@react-aria/live-announcer";

vi.mock("@react-aria/live-announcer", () => ({
  announce: vi.fn(),
}));

const mockedAnnounce = vi.mocked(announce);

describe("useFilterAnnouncement", () => {
  afterEach(() => {
    mockedAnnounce.mockClear();
  });

  it("does not announce on initial render", () => {
    renderHook(() => useFilterAnnouncement(250));
    expect(mockedAnnounce).not.toHaveBeenCalled();
  });

  it("announces the count when it changes", () => {
    const { rerender } = renderHook(
      ({ count }) => useFilterAnnouncement(count),
      { initialProps: { count: 250 } },
    );

    rerender({ count: 5 });

    expect(mockedAnnounce).toHaveBeenCalledWith("5 countries found", "polite");
  });

  it("announces singular form for one result", () => {
    const { rerender } = renderHook(
      ({ count }) => useFilterAnnouncement(count),
      { initialProps: { count: 250 } },
    );

    rerender({ count: 1 });

    expect(mockedAnnounce).toHaveBeenCalledWith("1 country found", "polite");
  });

  it("announces zero results", () => {
    const { rerender } = renderHook(
      ({ count }) => useFilterAnnouncement(count),
      { initialProps: { count: 250 } },
    );

    rerender({ count: 0 });

    expect(mockedAnnounce).toHaveBeenCalledWith(
      "No countries found",
      "polite",
    );
  });

  it("announces each subsequent change", () => {
    const { rerender } = renderHook(
      ({ count }) => useFilterAnnouncement(count),
      { initialProps: { count: 250 } },
    );

    rerender({ count: 10 });
    rerender({ count: 3 });

    expect(mockedAnnounce).toHaveBeenCalledTimes(2);
    expect(mockedAnnounce).toHaveBeenNthCalledWith(
      1,
      "10 countries found",
      "polite",
    );
    expect(mockedAnnounce).toHaveBeenNthCalledWith(
      2,
      "3 countries found",
      "polite",
    );
  });
});
