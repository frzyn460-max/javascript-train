// حلقه for...of , for...in

const person = {name: "ali" , age : 25, city: "tehran"};

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}