//!============================================== #1 ========================================================
//? Создать переменную numberOfLilms и в неё поместить ответ от пользователя на вопрос:
//? 'Сколько фильмов вы уже посмотрели'

//? Создать объект personalMovieBD и в него поместить такие свойства:
//?     - count - сюда передается ответ на первый вопрос
//?     - movies - в это свойство поместить пустой объект
//?     - actors - тоже поместить пустой объект
//?     - genres - сюда поместить пустой массив
//?     - privat - в это свойство поместить booleam(логическое) значение false

//? Задайте пользователю по два раза вопрос :
//?     - 'Один из последних просмотренных фильмов?'
//?     - 'На сколько оцените его?'
//? Ответы стоит поместить в отдельные переменные
//? Записать ответы в объект movies в формате :
//? movies:{
//?     'logan': '8.1'
//? }
//? Проверить что бы все работало без ошибок в консоли

// const numberOfLilms = +prompt('Сколько фильмов вы уже посмотрели', '')
// const nameFilm1 = prompt('Один из последних просмотренных фильмов?','')
// const rating1 = prompt('На сколько оцените его?','')
// const nameFilm2 = prompt('Один из последних просмотренных фильмов?','')
// const rating2 = prompt('На сколько оцените его?','')

// const personalMovieBD = {
//      count  : numberOfLilms,
//      movies : {},
//      actors : {},
//      genres : [],
//      privat : false,

// }
// personalMovieBD.movies[nameFilm1] = rating1;
// personalMovieBD.movies[nameFilm2] = rating2;

// console.log('personalMovieBD :>> ', personalMovieBD);
//!============================================== #2 ========================================================
//? Автоматизировать вопросы пользователю про фильмы при помощт цикла

//? Сделать так, чтобы пользователь не смог отставить ответ в виде пустой строки,
//? отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
//? возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
//? str.length - и получить её длину)

//? При помощи условий проверить personalMovieBD.count, и если он меньше 10 - вывести сообщение
//? "Посмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - "Вы киноман".
//? А если не подошло ни к одному варианту - "Произошла ошибка"

//? Потренироваться и переписать цикл еще двумя способами

// const numberOfLilms = +prompt("Сколько фильмов вы уже посмотрели", "");

// const personalMovieBD = {
//   count: numberOfLilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
 
// for (let i = 0; i < 2; i++) {
//   const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//   const rating = prompt("На сколько оцените его?", "");
//   if (
//     nameFilm != null &&
//     rating != null &&
//     nameFilm != "" &&
//     rating != "" &&
//     nameFilm.length < 50
//   ) {
//     personalMovieBD.movies[nameFilm] = rating;
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (personalMovieBD.count < 10) {
//   alert("Посмотрено довольно мало фильмов");
// } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
//   alert("Вы классический зритель");
// } else if (personalMovieBD.count >= 30) {
//   alert("Вы киноман");
// } else {
//   alert("Error");
// }

// console.log("personalMovieBD :>> ", personalMovieBD);

//!============================================== #3 ========================================================

//? Создать функцию showmyBD, которавя будет проверять свойство privat. Если стоит в позиции 
//? false - выводит в консоль главный объект программы.

//? Создать функцию wreiteYourGenres  в которой пользователь будет 3 раза отвечать на вопрос
//? "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres


// let numberOfLilms;

// function start() {
//     numberOfLilms = +prompt("Сколько фильмов вы уже посмотрели", "");

//     while (numberOfLilms == '' || numberOfLilms == null || isNaN(numberOfLilms)) {
//         numberOfLilms = +prompt("Сколько фильмов вы уже посмотрели", "");
//     }
// }
// start();


// const personalMovieBD = {
//   count: numberOfLilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
 
// function rememberMyFilms() {

//     for (let i = 0; i < 2; i++) {
//       const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//       const rating = prompt("На сколько оцените его?", "");
//       if (
//         nameFilm != null &&
//         rating != null &&
//         nameFilm != "" &&
//         rating != "" &&
//         nameFilm.length < 50
//       ) {
//         personalMovieBD.movies[nameFilm] = rating;
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
// }

// rememberMyFilms();

// function detectParsonaLevel() {
    
//     if (personalMovieBD.count < 10) {
//       alert("Посмотрено довольно мало фильмов");
//     } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
//       alert("Вы классический зритель");
//     } else if (personalMovieBD.count >= 30) {
//       alert("Вы киноман");
//     } else {
//       alert("Error");
//     }
// }

// detectParsonaLevel();

// function wreiteYourGenres() {
//   for (let i = 0; i < 3; i++) {
//     const janr = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
//     if (
//       janr != null &&
//       janr.length < 50
//     ) {
//       personalMovieBD.genres.push(janr)
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// wreiteYourGenres();


// console.log("personalMovieBD :>> ", personalMovieBD);
//!============================================== #4 ========================================================

const test = {
    name : 'Alex',
    age : 29,
    email : 'safas@fsf',
    status : true,
    avatar : false,
    video : {
        video1 : true,
        video2 : true,
        video3 : false
    },
    long : 1.82,
    weight : '80kg',

}

const testArr = Object.keys(test.email);

console.log(testArr);
//!============================================== #5 ========================================================

// let arr = [];

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// let arr = [1, 2, 'a', 'b', null, true, false];

//!============================================== #6 ========================================================

let a = 5,
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1,
};

function copy(mainObj) {
    let objCopy = {};

    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log('newNumbers :>> ', newNumbers);



//!=========================================== #7 ========================================================
//!============================================== #8 ========================================================
//!============================================== #9 ========================================================
//!============================================== #10 =======================================================
