// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// 1
const body = document.querySelector('body');
console.log(body);
// 2
const title = document.getElementById('title');
console.log(title);
// 3
const list = document.querySelector('.list');
console.log(list);
// 4
const dataTopicElements = document.querySelectorAll('*[data-topic]');
console.log(dataTopicElements);
//5
console.log(dataTopicElements[0]);
//6
console.log(dataTopicElements[dataTopicElements.length - 1]);
//7
console.log(title.nextElementSibling);
//8
const subTitles = document.querySelectorAll('h3');
console.log(subTitles);
//9
subTitles.forEach(el => {
    el.classList.add('active')
})
//10
const liNavigationEl = document.querySelector('li[data-topic="navigation"]');
console.log(liNavigationEl);

//11
liNavigationEl.style.backgroundColor = 'yellow';
//12
const pElNav = liNavigationEl.querySelector('p');
pElNav.textContent = 'Я змінив тут текст!';
//13
const currentTopic = "manipulation";
const manipulationEl = document.querySelector(`li[data-topic="${currentTopic}"]`);
console.log(manipulationEl);
//14
manipulationEl.style.backgroundColor = 'lightblue'
//15
const completedTitle = document.querySelector('.completed');
console.log(completedTitle);
//16
completedTitle.closest('li').remove();
//17
const p = document.createElement('p')
p.textContent = "Об'єктна модель документа (Document Object Model)";
title.after(p)
//18 
// const newLiItem = document.createElement('li')
// const newSubTitle = document.createElement('h3');
// newSubTitle.classList.add('active')
// const newDescription = document.createElement('p');
// newSubTitle.textContent = "Властивість innerHTML";
// newDescription.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// newLiItem.append(newSubTitle, newDescription);
// list.append(newLiItem);
//19
const newLiItem = `<li>
<h3 class="active">Властивість innerHTML</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`;

list.insertAdjacentHTML('beforeend', newLiItem);
//20
list.innerHTML = '';

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;



const numberContainer = document.querySelector('.number-container');

const createMarkup = () => {
    let result = [];
    for (let i = 0; i < 100; i++) {
        const number = randomNumber();
        let item = document.createElement('div');
        item.classList.add('number')
        item.textContent = number;
        if (number % 2 === 0) {
            item.classList.add('even');
        } else {
            item.classList.add('odd');
        }
        result.push(item)
    }

    return result
}

numberContainer.append(...createMarkup());


// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


const form = document.querySelector('.js-contact-form');
const spanForm = document.querySelector('.js-username-output');

function handleInput(e) {
    if (e.target.name !== 'userName') return;

    const userName = e.target.value;

    if (e.target.value.length > 6) {
        e.target.classList.add('success');
        e.target.classList.remove('error');
    } else {
        e.target.classList.add('error');
        e.target.classList.remove('success');
    }

    userName === '' ? spanForm.textContent = 'Anonymous' : spanForm.textContent = userName;
}


function handleInputFocus(e) {
    e.target.value === '' ? e.target.style.outline = '3px solid red' : e.target.style.outline = '3px solid green';
}
function handleInputBlur(e) {
    e.target.value === '' ? e.target.style.outline = '3px solid red' : e.target.style.outline = '3px solid lime';
}

function handleInputSubmit(e) {

    e.preventDefault();

    const userName = e.target.elements.userName.value.trim();
    const checkbox = e.target.elements.accept.checked;

    if (userName === '' || !checkbox) {
        alert('Error');
        return
    }
    const data = {
        userName
    }



    
    
    console.log(data);
    
    e.target.reset();
    spanForm.textContent = 'Anonymous';

}

form.addEventListener('input', handleInput);
form.addEventListener('focus', handleInputFocus);
form.addEventListener('blur', handleInputBlur);
form.addEventListener('submit', handleInputSubmit);


 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.



const decreaseButton = document.querySelector('.js-decrease');
const increaseButton = document.querySelector('.js-increase');
const box = document.querySelector('.box');

increaseButton.addEventListener('click', e => {

    let width = box.offsetWidth;
    let height = box.offsetHeight;

    box.style.width = width + 20 + "px";
    box.style.height = height + 20 + "px";

    
})
decreaseButton.addEventListener('click', e => {

    let width = box.offsetWidth;
    let height = box.offsetHeight;

    if (width <= 20 || height <= 20) {
        return
    }

    box.style.width = width - 20 + "px";
    box.style.height = height - 20 + "px";

    
})






