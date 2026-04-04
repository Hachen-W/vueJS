class User {
    #age = 0;
    #tel = null;


    constructor(age, name, tel) {
        this.age = age;
        this.name = name;
        this.tel = tel;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (typeof value === "number" && 0 <= value  && value <= 100) {
            this.#age = value;
        } else {
            console.log("Некорректный возраст");
        }
    }

    get tel() {
        return this.#tel;
    }

    set tel(value) {
        const regex = /^\+7\d{10}$/;

        if (typeof value === "string" && regex.test(value)) {
            this.#tel = value;
        } else {
            console.log("Некорректный номер телефона");
        }
    }

    hello() {
        console.log(`Hi! My name is ${this.name}.\n` + 
            `And I am ${this.age} years old.\n` +
            `My phone number is ${this.tel}\n`);
    }
}


class Student extends User {
    #knowledge = 0;

    constructor(age, name, tel, knowledge) {
        super(age, name, tel);
        this.knowledge = knowledge;
    }

    get knowledge() {
        return this.#knowledge;
    }

    set knowledge(value) {
        this.#knowledge = value;
    }

    learn() {
        this.knowledge += 1;
    }

    hello() {
        super.hello();
        console.log(`My knowledge is ${this.knowledge}\n` +
            `And I am a student!\n`
            );
    }
}


const student1 = new Student(25, "Alex", "+71234567890", 0);
student1.hello();
student1.learn()
student1.hello();
