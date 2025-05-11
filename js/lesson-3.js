//! Task 1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(el => Math.pow(el, 2)));

//! Task 2

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];

const newArr = [];
data.forEach(el => newArr.push(...el.values));
console.log(newArr);


//! Task 3

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

const people = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

console.log(people.some(el => el.age < 20));


//! Task 4

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers1 = [2, 4, 6, 8, 10];

console.log(numbers1.every(number => number % 2 === 0));



//! Task 5
// Знайдіть перше непарне число

const numbers2 = [2, 1, 6, 8, 9, 10, 12];

console.log(numbers2.find(number => number % 2 !== 0));


//! Task 6

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];


console.log(numbersArray.sort((a, b) => a - b));


//! Task 7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

console.log(stringArray.sort((a, b) => a.localeCompare(b)));


//! Task 8

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users1 = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
];

console.log(users1.sort((a, b) => a.age - b.age));


//! Task 9

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const users2 = [
 { name: 'John', age: 27 },
 { name: 'Jane', age: 31 },
 { name: 'Bob', age: 19 },
]

console.log(users2.filter(user => user.age > 20));



//! Task 10

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers3 = [1, 2, 3, 4, 5];

console.log(numbers.reduce((acc, el) => acc + el ,0));
 


//! Task 11

 // Розроби клас Calculator, який дозволяє виконувати арифметичні
 //  операції над числом за допомогою методів класу, підтримуючи
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
// Приклад використання:

class Calculator {
    value;

    number(value) {
        this.value = value;
        return this;
    }

    getResult() {
        return this.value;
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    divide(value) {
        if (value !== 0) {
            this.value /= value;
            return this;
        } else {
            console.log("error");
            
        }
    }

    multiply(value) {
        this.value *=value;
        return this;
    }
}

const calc = new Calculator()


 const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();


  console.log(result);



//! Task 12

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби 
// через геттер та сеттер login email

class Client {
    #login
    #email

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }
}

const user1 = new Client("Admin", "adminuser11@gmail.com");
console.log(user1.login = "Best");



//! Task 13

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю
  //та електронною поштою людини.
  
  //
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою
// співробітника та відділом, в якому він працює.
  
const userData = {
    name: "Dennis",
    age: 23,
    gender: "male",
    email: "dennis@gmail.com",
    salary: 45000,
    departament: "first-tech"
}

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.gender = obj.gender;
        this.email = obj.email;
    }

    getDetails() {
        return `Name of person is: ${this.name}, age is: ${this.age}, gender: ${this.gender}, email: ${this.email}`
    }
}


class Employee extends Person{
    constructor(obj) {
        super(obj)

        this.salary = obj.salary;
        this.departament = obj.departament;
    }

    getEmployeeDetails() {
        return `salary: ${this.salary},  departament: ${this.departament}`;
    }
}
const user = new Employee(userData);
console.log(user.getDetails());
console.log(user.getEmployeeDetails());
