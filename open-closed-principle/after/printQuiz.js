class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('1. True');
        console.log('1. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoice() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('Answer: __________');
    }
}

//Creating new class
class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    printQuestionChoice() {
        console.log('Minimum: __________');
        console.log('Maxim: __________');
    }
}

//Never changing anything in this function
function printQuiz(questions) {
    questions.forEach((question) => {
        console.log(question.description);
        question.printQuestionChoice();
        console.log('');
    })
}

const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion(
        'What is your favourite language?',
        ['JS', 'JS', 'JS']
    ),
    new TextQuestion('Describe your favourite feature.'),
    //Here comes boom, just adding new instance of RangeQuestion
    new RangeQuestion('What is the speed limit in your city?')
];

printQuiz(questions);