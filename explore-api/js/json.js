// JavaScript Object Notation (JSON)
const user = {id: 1, name: 'Gorib Aamir', job: 'actor'};

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

console.log(shop);
// console.log(typeof shop);
const shopJSON = JSON.stringify(shop);  // Convert Object to JSON string
console.log(shopJSON);
// console.log(typeof shopJSON);
const shopObj = JSON.parse(shopJSON);  // Convert JSON String to normal Object
console.log(shopObj);