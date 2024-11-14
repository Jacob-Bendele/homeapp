import * as fs from 'fs';

export default class DataLoader {
    constructor(private filePath: string) {
        this.filePath = filePath
    }
    readJsonFromFile<T>(): T {
      try {
        const data = fs.readFileSync(this.filePath, 'utf-8'); // Read file asynchronously
        const parsedData: T = JSON.parse(data); // Parse JSON data
        return parsedData; // Return parsed data of type T
      } catch (error) {
        console.error("Error reading JSON from file:", error);
        throw error; // Rethrow or handle error appropriately
      }
    }
}
    