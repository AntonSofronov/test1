/* eslint-disable indent */
'use sstrict';

/* eslint-disable no-unused-vars */
// const number = 5;
// console.log(number);

// console.log(whatsup);

// Объекты..................................................

// const obj = {
// 	name: 'Anton',
// 	age: 37,
// 	isMarried: false
// };

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.isMarried);

// Массив - частный случай объекта !!!
// Массив - печень информации по порядку.

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[5]);

// const obj = {a:1, b:2, c:3} 
//объект, где а - ключ, 1 - значение.

/*let storeName = 'Kudzi';
const storeDescription = {
	budget: 10000,
	employees: ['Ann', 'Mike', 'Suzan'],
	ptoducts: {
		'milk': 50,
		'bread': 25
	},
	open: true
};*/


// Общение с пользователем..................................................

// alert('Hello!');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам есть 18?', '');
// console.log(answer);

// !!!! Вся информация от пользователя приходит в виде строк !!!!

// Интерполяция.............................................................

// const user = 'Иван';
// console.log(`Привет, ${user}`);

//  `` - бэктики

// Операторы.....................................................................

//  +4 - унарный плюс

// console.log(4 + +'4');

// let incr = 10,
// 	decr = 10;

// incr++; // оператор инкремента, увелечение на 1
// decr--; // оператор декремента, уменьшение на 1

// const isCheked = true;
// 	  isClose = true;  

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
	
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Условия...................................................................................

// if (4 == 4) {
// 	console.log('Ok!');
// } else {
// 	console.log('No!');
// }


// num = 51;

// if (num < 50) {
// 	console.log('No!');
// } else if (num > 100) {
// 	console.log('To much!');
// } else {
// 	console.log('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('No!');   // Тернарный оператор

// num = 50;

// switch (num) {
// 	case 49:
// 		console.log('No!');
// 		break;
// 	case 100:
// 		console.log('To much!');
// 		break;
// 	case 50:
// 		console.log('Ok!');
// 		break;
// 	default:
// 		console.log('Ooops!');
// 		break;
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим!');
// }


// Оператор && всегда возвращает первым ложное значение, если оно есть и дальше код уже не идёт.
// Если все значения верны, код идет до конца и возвращается значение последнего аргумента.

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 3;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим!');
// }

// let johnReport, mikeReport, samReport, kateReport = 'done';

// console.log(johnReport || mikeReport || samReport || kateReport);


// Циклы ..................................................................................

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = 1; i <= 11; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue; //пропускает шаг, но не останавливает цикл.
// 	}

// 	console.log(i);
// }

// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 5; j++) {
// 		console.log(j);
		
// 	}
// }

// let result = '';
// const lenght = 11;

// for (let i = 1; i < lenght; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}


// 	result += '\n';
// }


// console.log(result);

		
// first: for (let i = 0; i < 5; i++) {
// 		console.log(`First level: ${i}`);
// 		for (let j = 0; j < 5; j++) {
// 			console.log(`Second level: ${j}`);
// 			for (let k = 0; k < 5; k++) {
// 				if (k === 2) continue first;
// 				console.log(`Third level: ${k}`);
				
// 		}
			
// 	}
// }

// let num = 5;

// while (num <= 10) {
// 	console.log(num);
// 	num++;
// }

// for (let i = 20; i >= 10; i--) {
// 		if (i === 13) {
// 			break;
// 		}
			
// 	console.log(i);
// }


// for (let i = 2; i <= 16; i++) {
// 	    
// 	}

// let i = 2;
// while (i <= 16) {
// 	if (i % 2 === 0) {
// 			        continue;
// 			    } else {
// 			        console.log(i);
// 			    }

// 	console.log(i);
	
// 	i++;
// }


// Практика 2. Применяем циклы....................................................................

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
	
// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length <50) {
// 		personalMovieDB.movies[a] = b;	
// 		console.log('Done!');
// 	} else {
// 		console.log('Error!');
// 		i--;
// 	}
// }

// if (personalMovieDB.count < 10) {
// 	console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 	console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('Ошибка!');
// }
	

	

// console.log(personalMovieDB);


// Функции......................................................................................................


// function showFirstMessage(text) {
// 	console.log(text);
// }

// showFirstMessage('Hey!');

// function calc(a, b) {
// 	return (a + b);
	
// }
// console.log(calc(4,3));

// const usdCurr = 80;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }
// convert(500, usdCurr);

// function userName(name) {
// 	return name;
// }
// console.log(userName('Антон'));



// Методы и свойства строк и чисел.......................................................................


// const str = 'test';

// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = 'Some fruit';

// console.log(fruit.indexOf(' '));


// Практика-3. Функции....................................................................................

// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: true
// };
	


// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов?', ''),
// 			  b = prompt('На сколько оцените его?', '');
	
// 		if (a != null && b != null && a != '' && b != '' && a.length <50) {
// 			personalMovieDB.movies[a] = b;	
// 			console.log('Done!');
// 		} else {
// 			console.log('Error!');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();



// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('Ошибка!');
// 	}
// }

// detectPersonalLevel();
	
// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }
	
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		
// 	}
// }

// writeYourGenres();


// Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'


function calculateVolumeAndArea(h) {
	if (let square = 6 * h * h) {
		console.log(`площадь всей поверхности ${s}`);
	}
}


console.log(calculateVolumeAndArea(15));