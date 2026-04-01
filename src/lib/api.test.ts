import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchAllCountries } from "./api";

describe("fetchAllCountries", () => {
  const mockCountries = [
    {
      name: { common: "Germany", official: "Federal Republic of Germany" },
      flags: { svg: "https://flagcdn.com/de.svg", alt: "Flag of Germany" },
      population: 83491249,
      region: "Europe",
      capital: ["Berlin"],
      cca2: "DE",
    },
  ];

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetches countries from the API with correct fields", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockCountries),
    } as Response);

    const result = await fetchAllCountries();

    expect(fetch).toHaveBeenCalledWith(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca2",
    );
    expect(result).toEqual(mockCountries);
  });

  it("throws an error when the response is not ok", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500,
    } as Response);

    await expect(fetchAllCountries()).rejects.toThrow(
      "Failed to fetch countries: 500",
    );
  });
});
