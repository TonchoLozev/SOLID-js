function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        switch(question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False');
                break;
            case 'multipleChoice': 
                question.options.forEach((option, index)=>{
                    console.log(`${option} ${index}`);
                });
                break;
            case 'text': 
                console.log('Answer: ____________')
                break;
            // Here comes the problem when you add new type
            case 'range': 
                console.log('Minimum: __________');
                console.log('Maxim: __________');
                break;

        }
        console.log('');
    });
}

const question = [
    {
        type: 'boolean',
        description: 'This video is useful.'
    },
    {
        type: 'multipleChoice',
        description: 'What is your fav language?',
        options: ['JS', 'JS', 'JS'],
    },
    {
        type: 'text',
        description: 'Describe your fav js feature'
    },
    //When you want to add new type of question you have to modify printQuiz function
    {
        type: 'range',
        description: 'What is the speed limit in your city?'
    }
];

printQuiz(question);