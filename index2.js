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

const numberOfLilms = +prompt('Сколько фильмов вы уже посмотрели', '')
const nameFilm1 = prompt('Один из последних просмотренных фильмов?','')
const rating1 = prompt('На сколько оцените его?','')
const nameFilm2 = prompt('Один из последних просмотренных фильмов?','')
const rating2 = prompt('На сколько оцените его?','') 

const personalMovieBD = {
     count  : numberOfLilms,
     movies : {},
     actors : {},
     genres : [],
     privat : false,

}
personalMovieBD.movies[nameFilm1] = rating1;
personalMovieBD.movies[nameFilm2] = rating2;

console.log('personalMovieBD :>> ', personalMovieBD);















//!============================================== #2 ========================================================
//!============================================== #3 ========================================================
//!============================================== #4 ========================================================
//!============================================== #5 ========================================================
//!============================================== #6 ========================================================
//!============================================== #7 ========================================================
//!============================================== #8 ========================================================
//!============================================== #9 ========================================================
//!============================================== #10 ========================================================
