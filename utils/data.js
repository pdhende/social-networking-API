const username = [
    'Sal',
    'Lernantino',
    'MaryJoe',
    'CoolRobin',
    'DhenWork'
];

const thoughts = [
    'Today is a great day',
    'Never give up',
    'Happiness is a state of mind',
    'Be kind',
    'You can and you will',  
];

const reactions = [
    'Cool thought',
    'So true',
    'Simply amazing',
    'Perfect',
    'Nailed it'
];

const randomArrItem = (arrName) => {
    // console.log(arr);
    let arr = [];
    if(arrName === 'username'){
        arr = username;
    }else if(arrName === 'thoughts'){
        arr = thoughts;
    }else {
        arr = reactions;
    }
    const item = arr[Math.floor(Math.random() * arr.length)];
    // console.log(item);
    return item;
}

const addUsers = () => {
    return username;
}

module.exports = { randomArrItem, addUsers };