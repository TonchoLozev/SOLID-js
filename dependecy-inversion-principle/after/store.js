//In order to use paypal we have to change Store
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(qty) {
        this.paymentProcessor.pay(200 * qty);
    }

    purchaseHelmet(qty) {
        this.paymentProcessor.pay(15 * qty);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInCents) {
        this.stripe.makePayment(amountInCents * 100);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }
}

//In order to change payment provider we just change this line by changin payment processor
const store = new Store(new PaypalPaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(3);