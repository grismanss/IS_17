/*alert("Сообщение");
var a,b,c;//объявление переменных
a=4;
a="fghdghd";
alert(a);
alert(b);
b=3;
c=6;
alert(b/c);
c++;
c+=6;
alert('abc'*3); //выведет NaN
//обычные массивы, нумерация с 0
var mas=[], mas2=['fg','rrr','fgdfgf'];
alert(mas2[2]);
//ассоциативные массивы
//ключ указывается в явном виде, обращение к обьекту идет через
//название ключа
var obj = {'Коля': 200, 'Вася': 300, 'Петя': 400};
alert(obj['Вася']); //выведет 300
var obj = {key1: 200, key2: 300, key2: 400};
alert(obj['key1']); //выведет 200
alert(obj.key2);

//как создать  пустой массив??
var arr = Array(10);//массив из 10 элементов arr = [,,,,,,,,,];

//Многомерные массивы
//Многомерный массив студентов:
var students = {
	'boys': ['Миша', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
alert(students['boys'][0] );
//ветвление
if (students['boys'][0]=='Коля'){
    alert('Коля первый в списке');
}
else{
    alert('Коля не первый в списке');
}

//Конструкция switch-case
var day=1;
switch (day){
    case 1:alert('ПН');
        break;
    case 2:alert('ВТ');
        break;
    
    default: alert('Неверные значения') ;
        break;
}
//циклы
//обычный for
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i <= arr.length-1; i++) {
	alert(arr[i]); //выведет 1, 2, 3, 4, 5
}

//Цикл for-in
var obj = {Коля: 200, Вася: 300, Петя: 400};
for (k in obj) {
	alert(k); //выведет 'Коля', 'Вася', 'Петя'
}
for (k in obj) {
	alert(obj[k]); //выведет 200, 300, 400
}
//Математические функции находятся в модуле Math
// Math.abs, Math.round, Math.ceil, 
//Math.floor, Math.min, Math.max, Math.sqrt

//Работа со строками Конкатенация 
var s="fdgfg";
var s2="33333";
var s3=s+s2;*/

function metod1(){
    var num = 3;
    alert(num);
}

function metod2(){
    var str = '111111';
    document.write('<h1>'+str+'</h1>');
}