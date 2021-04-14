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

//? У вас есть рабочее приложение, состоящее из отдельных функция. Представте, что
//? перед вами стоит задача переписать его так, чтобы все функции стали методом объекта personalMovieBD
//? Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

//? Создать метод toggleVisibleDB, который при вызове будет проверять свойство privat. Если
//? оно false - он переключает его в true, если true- переключает в false. Протестировать вмете с showMyBD.

//? В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
//? Если он это сделал - возвращать его к этому же вопросу.  После того , как все жанры введены -
//? при помощи метода forEach вывести в консоль сообщение в таком виде:
//? "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"


// const personalMovieBD = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
//     personalMovieBD.count = +prompt("Сколько фильмов вы уже посмотрели", "");

//     while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
//       personalMovieBD.count = +prompt("Сколько фильмов вы уже посмотрели", "");
//     }
//   },
//   detectParsonaLevel: function() {
    
//     if (personalMovieBD.count < 10) {
//       alert("Посмотрено довольно мало фильмов");
//     } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
//       alert("Вы классический зритель");
//     } else if (personalMovieBD.count >= 30) {
//       alert("Вы киноман");
//     } else {
//       alert("Error");
//     }
//   },
  
//   rememberMyFilms: function() {
    
//     for (let i = 0; i < 2; i++) {
//       const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//       const rating = prompt("На сколько оцените его?", "");
//       if (
//         nameFilm != null &&
//         rating != null &&
//         nameFilm != "" &&
//         rating != "" &&
//         nameFilm.length < 50
//         ) {
//           personalMovieBD.movies[nameFilm] = rating;
//         } else {
//           console.log("error");
//           i--;
//         }
//       }
//     },
//     toggleVisibleMyBD: function() {
//       if (personalMovieBD.privat) {
//         personalMovieBD.privat = false;
//       }
//       else {
//         personalMovieBD.privat = true;
//       }
//     },
//     wreiteYourGenres : function () {
//       for (let i = 1; i <= 3; i++) {
//         let janr = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
//         if (janr === '' || janr == null) {
//           console.log('вы ввели не корректный данные или не ввели их вовсе');
//           i--;

//         } else {
//           personalMovieBD.genres[i - 1] = janr;
//         }

//         personalMovieBD.genres.forEach((item, i) => {
//           console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//       }      
//     },
//   }
    
//     function showMyBD(hidden) {
//       if (!hidden) {
//         console.log(personalMovieBD);
//       }
//     };
//     showMyBD();
    
//     personalMovieBD.start();
    
//     personalMovieBD.rememberMyFilms();
    
//     personalMovieBD.detectParsonaLevel();
    
//     personalMovieBD.wreiteYourGenres();
    
//     console.log("personalMovieBD :>> ", personalMovieBD);
    
    
//!============================================== #5 ========================================================

//!============================================== #6 ========================================================
//?Выйдите из цикла, изменив только две отмеченные строки. Результат в консоли сейчас останавливается на 9 9. Должен на 5 4.
// for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
//   for (let j = 0; j < 10; j++) {
//     if (i === 5 && j === 5) {
//       //! Эту строку можно изменить
//     }
  
//     console.log(i, j);
//   }
//  }

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     if (i === 5 && j === 5) {
//       break
//     }
//     console.log(i, j);
//   }
//  }
//!============================================== #7 ========================================================
//?Перепишите функцию clone таким образом, чтобы она была способна клонировать переданный как параметр объект.

// onsole.log(cat.name, cat.age); // cat 5
// console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
 
// console.log(animal.name, animal.age); // animal 10
// console.log(animal.childs); // [ 'child 1', 'child 2' ]
 
// // Отличный вариант для JSON-safe объектов
// let clone = (obj) => JSON.parse(JSON.stringify(obj));
 
// // Опасен для рекурсивных объектов или когда имеется конструктор с параметрами
// let clone = obj => {
//  if (obj === null || typeof obj !== "object" || "isActiveClone" in obj)
//    return obj;
 
//  if (obj instanceof Date) var temp = new obj.constructor();
//  //or new Date(obj);
//  else var temp = obj.constructor();
 
//  for (var key in obj) {
//    if (Object.prototype.hasOwnProperty.call(obj, key)) {
//      obj["isActiveClone"] = null;
//      temp[key] = clone(obj[key]);
//      delete obj["isActiveClone"];
//    }
//  }
//  return temp;
// };
//!============================================== #8 ========================================================
//? Напишите функцию, которая пишет в консоль число в заданном диапазоне,
//? в случае, если оно успешно делится или не делится с остатком или без остатка в зависимости от параметров.

function getNumbersModulatordBy(modulus, loggerCallback) {
  // Функция, которая возвращает функцию - это подход из функционального программирования
  // Называется замыканием (Closure)
  return function(start, end) {
    loggerCallback({ message: "Конфигурация", config: configuration });
    loggerCallback({ message: "Полученный модулятор", modulus: modulus });
    loggerCallback({
      message: "Полученный start и end",
      start: start,
      end: end
    });
  
    while (start <= end) {
      // Стоит обратить внимание:
      // 1. При нестрогом равенстве true == 1 и false == 0
      // 2. Здесь мы обращаемся к глобальному контексту configuration
      // p.s. поле isEntry может меняться
      if (start % modulus == configuration.isEntry) {
        // В данном случае мы используем loggerCallback как middleware
        // Это определит дальнейшую судьбу результата
        // Позволяет убрать side-effect
        loggerCallback(start);
      }
      start++;
    }
  };
 }
  
 // Глобальный контекст не имеет блочной видимости
 // В данном случае переменная поднимается выше в самое начало кода
 // Исполнитель JavaScript видит её в независимости от места инициализации
 var configuration = {
  modulus: 10,
  isEntry: false,
  start: 45,
  end: 68
 };
  
 var loggerCallback = data => console.log(data);
  
 let tenNumbersModulator = getNumbersModulatordBy(
  configuration.modulus,
  loggerCallback
 );
  
 // Переменные с глобальным контекстом доступны из:
 // 1. globalThis (в Node.js)
 // 2. window (в браузере)
 window.configuration.modulus = 5;
  
 let fiveNumbersModulator = getNumbersModulatordBy(
  configuration.modulus,
  loggerCallback
 );
  
 tenNumbersModulator(configuration.start, configuration.end); // 50, 60
 tenNumbersModulator(10, 100); // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
  
 // Так как мы изменили поле isEntry, то теперь:
 // Функция вернёт те значения, которые не входят в модуляцию числа
 window.configuration.isEntry = true;
  
 fiveNumbersModulator(configuration.start, configuration.end); // 46, 51, 56, 61, 66
 fiveNumbersModulator(10, 21); // 11, 16, 21
//!============================================== #9 ========================================================
//!============================================== #10 =======================================================
//?  Какое будет выведено значение: let x = 5; alert( x++ ); ?
//?  Чему равно такое выражение: [ ] + false - null + true ?
//?  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//?  Чему равна сумма [ ] + 1 + 2?
//?  Что выведет этот код: alert( &quot;1&quot;[0] )?
//?  Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
//?  Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
//?  Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
//?  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//?  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
//?  Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
//?  Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?

