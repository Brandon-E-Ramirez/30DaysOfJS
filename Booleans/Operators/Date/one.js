//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
/*
Exercises: Level 1
    Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
    Check if type of '10' is equal to 10
    Check if parseInt('9.8') is equal to 10
*/
let firstName = 'Brandon', lastName = 'Ramirez', country ='US', city = 'La Marque', age = 22, isMarried = false, year = 2022;
console.log(parseInt('9.8') == 10)


/*
    Boolean value is either true or false.
        Write three JavaScript statement which provide truthy value.
        Write three JavaScript statement which provide falsy value.
*/
let $guitar_player = true;
let $piano_player = false;
let $drummer = false

console.log($drummer == $piano_player);


/*
    Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
        4 > 3   t
        4 >= 3  t
        4 < 3   f
        4 <= 3  f
        4 == 4  t
        4 === 4 t
        4 != 4  f
        4 !== 4 f
        4 != '4'    t
        4 == '4' f
        4 === '4' f
        */

        /*
        Find the length of python and jargon and make a falsy comparison statement. 
        */

        let strp = 'python7658^&*^$5785*&$90)(^$6$%27876'
        console.log(strp.length == 15)




/*
    Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
        4 > 3 && 10 < 12
        4 > 3 && 10 > 12
        4 > 3 || 10 < 12
        4 > 3 || 10 > 12
        !(4 > 3)
        !(4 < 3)
        !(false)
        !(4 > 3 && 10 < 12)
        !(4 > 3 && 10 > 12)
        !(4 === '4')
        There is no 'on' in both dragon and python

    Use the Date object to do the following activities
        What is the year today?
        What is the month today as a number?
        What is the date today?
        What is the day today as a number?
        What is the hours now?
        What is the minutes now?
        Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
//getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
