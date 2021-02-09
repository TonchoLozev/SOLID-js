class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends SwimmingBird {
    slide() {
        console.log('I can slide');
    }
}

function makeFlyingBirdFly(bird) {
    bird.fly();
}

function makeSwimmingBirdSwim(bird) {
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin(); 

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

//Children class can be replaced by parent class
const swimingBird = new SwimmingBird();
const flyingBird = new FlyingBird();

makeFlyingBirdFly(flyingBird);
makeSwimmingBirdSwim(swimingBird);