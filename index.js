//Task 1
// function checkAge(age) {
//   age = (age > 18) ? true : confirm("Родители разрешили?");
//   return age;
//   }
// alert(checkAge(18));

//Task 2
// let sum = 1;
// let pow = (x, n) => {
//     for(let i = 0; i < n; i++){
//     sum *= x;
// }
// return sum;
// }
// alert(pow(4,3));

//Task 3
// let ask = (question, yes, no) =>{
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

//Task 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a,b)  {
//     return b-a;
// });
// alert(arr);

//Task 5
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha];

// let names = users.map(user => user.name);

// alert(names);

//Task 6
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => [user.name + " " + user.surname, user.id]); 


// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

//Task 7
//Не понял что надо делать дается только код

//Task 8
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];
// let sum = 0;
// function getAverageAge(array){
//     let ages = array.map(({ age }) => age);
//     for(let i = 0; i < array.length; i++){
//         sum += ages[i]
//     }
//     return sum;
// }
// alert(getAverageAge(arr));
