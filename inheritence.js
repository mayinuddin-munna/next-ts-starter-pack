class Father {
    constructor() {
        this.father = 'unknown'
    }
}
class Child extends Father {
    constructor(humanName) {
        super();
        this.name = humanName;

    }
    gwtFullName(){
        return this.name+" "+this.fatherName;
    }
}

const baby = new Child('Mohammad');
console.log(baby);
const baby2 = new Child('Abdullah');
console.log(baby2);

console.log(baby.gwtFullName());