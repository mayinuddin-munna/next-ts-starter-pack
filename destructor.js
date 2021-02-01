// First part ...
const person = { nam: 'aluu', age: 22, job: 'bekar', company: 
'bekarGroupOfIndustries' }


const { age, nam, job } = person;
//const nam = person.nam;
//const age = person.age;
console.log(nam, age);
console.log(nam, job);

// part two...
const complexObject = {
    name: 'Rohim',
    info: {
        address: 'Mohammadpur',
        head: 'everybody'
    }
}
const { head } = complexObject.info;
console.log(head);

// patr three...
const friend = ['Sajol', 'jaman', 'asif', 'chisty', 'anik'];
const [firstFriend, secondFriend, ...upToRest] = friend;
console.log(upToRest);