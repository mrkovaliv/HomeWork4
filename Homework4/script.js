console.log(2 + "2" == "2" + 2); // true, бо "22" рівне "22", (2 + "2") - це string "22" і  ("2" + 2) - це теж string "22"
console.log(2 + "3" == "3" + 2); // false, бо "23" не рівне "32", (2 + "3") - це string "23", a  ("3" + 2) - це string "32"console.log("3" + "2" == 3 + 2); // false, бо "32" не рівне 5, ("3" + "2") - це string "32", a (3 + 2) - це number 5
console.log("3" + "2" == "3" + 2); // true, бо "32" рівне "32", ("3" + "2") - це string "32" і  ("3" + 2) - це теж string "32" 
console.log("3" + "2" == 2 + "3"); // false, бо "32" не рівне "23", ("3" + "2") - це string "32", a (2 + "3") - це string "23"
console.log(2+Number("3") == Number("3") + 2); // true, бо 5 рівне 5, 2+Number("3") - це number 5 і Number("3") + 2 - це теж number 5 

console.log(12 / "6"); // 2, бо знак ділення переводить string "6" в number у цьому прикладі
console.log("number" + 15 + 3); // number153, бо спочатку до string "number" додаємо 15 виходить string "number15", а потім додаємо ще "3"  і виходить стрічка "number153"
console.log(15 + 3 + "number"); // 18number, бо спочатку до 15 додаємо 3 виходить 18(звичайна арифметична дія), а потім до 18 додаємо стрічку "number" (конкатенація) і виходить "18number"
console.log([1] > null); // true, бо коли перевести [1] в number, то це рівне 1, а null якщо перевести в number це рівне 0, отже виходить 1>0 - це true
console.log("foo" + + "bar"); // fooNaN, (+"bar") - це ми пробуємо bar(string) конвертувати в number, так як не можна bar записати числом, то string "bar" переводиться в NaN, а далі проста конкатенація: до string "foo" додаємо NaN
console.log('true' == true); // false, бо "true" перетворюється в NaN, а true перетворюється в 1, a NaN не рівне 1
console.log(false == 'false');// false, бо "false" перетворюється в NaN, а false перетворюється в 0, a NaN не рівне 0 
console.log(null == '');//false, бо null є нестрого рівний тільки з undefined aбо null, з іншими значеннями чи типами він не є рівний
console.log(!!"false" == !!"true");//true, бо якщо "false" перевести в boolean то це true(бо стрічка не порожня), подвійне заперечення від true - це true, аналогічно з !!"true"
console.log([`x`] == `x`);//true, бо якщо перевести [`x`] в number це буде NaN і якщо `x` перевести в number це теж буде NaN (або якщо перевести в boolean то обидва ці значення рівні true)



const enemy = {
    name: "Bob"
};
const friend = {
    name: "Alex"
};

const me = friend;

me.name = "Bob";

console.log(friend.name); //Bob, бо об'єкт me i обєкт friend ссилаються на одну комірку пам'яті і якщо ми міняємо щось в одному об'єкті то міняється і інший
console.log(me === friend);//true, бо об'єкт me i обєкт friend абсолютно рівні бо ссилаються на одну комірку пам'яті
console.log(me === enemy);//false, бо об'єкти me і enemy різні, бо ссилаються на різні комірки пам'яті 


let month = prompt('Введіть номер місяця:', 1);

if (!isNaN(+month) && month != 'false' && month !='true' && month != null) {
    switch (+month) {
        case 1:
            alert( 'January' );
            break;
        case 2:
            alert( 'February' );
            break;
        case 3:
            alert( 'March' );
            break;
        case 4:
            alert( 'April' );
            break;
        case 5:
            alert( 'May' );
            break;
        case 6:
            alert( 'June' );
            break;
        case 7:
            alert( 'July' );
            break;
        case 8:
            alert( 'August' );
            break;
        case 9:
            alert( 'September' );
            break;
        case 10:
            alert( 'October' );
            break;
        case 11:
            alert( 'November' );
            break;
        case 12:
            alert( 'December' );
            break;
        default:
            alert( "Нет таких значений" );
    }
} else {
    switch (month) {
        case 'January':
            alert(1);
            break;
        case 'February':
            alert(2);
            break;
        case 'March':
            alert(3);
            break;
        case 'April':
            alert(4);
            break;
        case 'May':
            alert(5);
            break;
        case 'June':
            alert(6);
            break;
            case 'July':
            alert(7);
            break;
        case 'August':
            alert(8);
            break;
        case 'September':
            alert(9);
            break;
        case 'October':
            alert(10);
            break;
        case 'November':
            alert(11);
            break;
        case 'December':
            alert(12);
            break;
        default:
          alert( "Нет таких значений" );
    }
}
