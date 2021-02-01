class student {
    constructor(StID, StName) {
        this.id = StID;
        this.name = StName;
        this.institute='IST';
    }
}

const st1 = new student(19029, 'Hossain');
const st2 = new student(19024, 'Jaman');
console.log('FirstOutput: ',st1.name, st2.name);
console.log(st1, st2);