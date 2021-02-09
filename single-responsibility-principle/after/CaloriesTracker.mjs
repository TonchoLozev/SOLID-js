import logMessage from './logger.mjs';

class CaloriesTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories){
            logMessage('Max calories exceeded yes.');
        }
    }
}

const calorieTracker = new CaloriesTracker(100);
calorieTracker.trackCalories(500);