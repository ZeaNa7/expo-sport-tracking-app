// CounterStore.ts
import { makeAutoObservable } from "mobx";

class CounterStore {
  elapsedTime = 0;
  isRunning = false;
  locations: { latitude: number; longitude: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  startCounter() {
    this.isRunning = true;
    this.locations = [];
  }

  stopCounter() {
    this.isRunning = false;
  }

  incrementCounter() {
    if (this.isRunning) {
      this.elapsedTime += 1;
    }
  }

  addLocation(location: { latitude: number; longitude: number }) {
    if (this.isRunning) {
      this.locations.push(location);
    }
  }

  resetCounter() {
    this.elapsedTime = 0;
    this.isRunning = false;
    this.locations = [];
  }
}

const counterStore = new CounterStore();
export default counterStore;
