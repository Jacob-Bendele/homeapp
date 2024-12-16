import * as fs from 'fs';

export default class DataLoader {
    constructor(private filePath: string) {
        this.filePath = filePath
    }
    readJsonFromFile<T>(): T {
      try {
        const data = fs.readFileSync(this.filePath, 'utf-8'); 
        const parsedData: T = JSON.parse(data); 
        return parsedData; 
      } catch (error) {
        console.error("Error reading JSON from file:", error);
        throw error; 
      }
    }
}
    