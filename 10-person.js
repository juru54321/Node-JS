class person {
    constructor(name , age){
        this.name= name;
        this.age =age;
    }
    introduce(){
        console.log(`My name is ${this.name} and am ${this.age} years old. `);
    }
}
const p = new person("John", 30);
p.introduce();
