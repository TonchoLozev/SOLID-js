class CaloriesTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories){
            this.logCaloriesSurplus();
        }
    }

    logCaloriesSurplus() {
        console.log('Max calories exceeded');
    }
}

const calorieTracker = new CaloriesTracker(100);
calorieTracker.trackCalories(500);