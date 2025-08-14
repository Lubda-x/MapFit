export default class LocationSearch {
  constructor(data, keys) {
    if (!Array.isArray(data)) throw new Error("Data must be an array");
    if (!Array.isArray(keys)) throw new Error("Keys must be an array");
    this.data = data;
    this.keys = keys;
  }

  search(query) {
    if (!query) return this.data;
    const lowerQuery = query.toLowerCase();
    return this.data.filter(item =>
      this.keys.some(key =>
        String(item[key] || "").toLowerCase().includes(lowerQuery)
      )
    );
  }
}
