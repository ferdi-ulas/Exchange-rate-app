class Currency {
  constructor() {
    this.url =
      "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
  }

  async exchangeValue(amount, firstCurrency, secondCurrency) {
    try {
      const response = await fetch(`${this.url}${firstCurrency}`);
      const result = await response.json();

      if (result.error) {
        throw new Error("Döviz kuru alınırken bir hata oluştu.");
      }

      const exchangedResult = amount * result.data[secondCurrency];

      return exchangedResult;
    } catch (error) {
      throw new Error("Döviz kuru alınırken bir hata oluştu.");
    }
  }
}
