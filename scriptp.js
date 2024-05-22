// Creating an array of objects
let people = [
    { 
        name: 'NOBIN', 
        user: 'nobin', 
        pin: 1234,
        transactions: [
        { type: 'withdrawl', amount: 20 , dates: '11/3/2024 4:45:48 PM',p:'abhay'},
        { type: 'deposit', amount: 100,dates: '11/3/2024 4:45:48 PM',p:'nobin' }
        ],
        positive:100,
        negative:20
    }
    // { 
    //     name: 'ABHAY', 
    //     user: 'abhay', 
    //     pin: 1234,
    //     transactions: [
    //     { type: 'withdrawl', amount: 50 , dates: '11/3/2024 4:45:48 PM'},
    //     { type: 'deposit', amount: 30,dates: '11/3/2024 4:45:48 PM' },
    //     { type: 'deposit', amount: 70,dates: '11/3/2024 4:45:48 PM' }
    //     ],
    //     positive:100,
    //     negative:50
    // },
    // { 
    //     name: 'GAUTAM', 
    //     user: 'gautam', 
    //     pin: 1234,
    //     transactions: [
    //     { type: 'withdrawl', amount: 100 , dates: '11/3/2024 4:45:48 PM'},
    //     { type: 'deposit', amount: 300,dates: '11/3/2024 4:45:48 PM' },
    //     { type: 'deposit', amount: 70,dates: '11/3/2024 4:45:48 PM' }
    //     ],
    //     positive:370,
    //     negative:100
    // },
    // { 
    //     name: 'DEVESH',
    //     user: 'devesh', 
    //     pin: 1234,
    //     transactions: [
    //     { type: 'withdrawl', amount: 100 , dates: '11/3/2024 4:45:48 PM'},
    //     { type: 'deposit', amount: 400, dates: '11/3/2024 4:45:48 PM'},
    //     { type: 'deposit', amount: 70, dates: '11/3/2024 4:45:48 PM'}
    //     ],
    //     positive:470,
    //     negative:100
    //  }
];

export {people};
