var s = "hii";
var a=1;
var b=2000;


// document.getElementById("demo").innerHTML = s;
// console.log(s);
// document.write(a+b);
// if(a==b){
//     document.write(a);
// }
// else{
//     document.write(b);
// }
// document.getElementById("data").value = "hi all";
// var msg = document.getElementById("data").value;
// document.write(msg);


// if(b%4==0){
//     document.write("leap");
// }
// else{
//     document.write("not leap");
// }

// if(a>b){
//     document.write("a is high")
// }else if(b>a){
//     document.write("b is high")
// }else{
//     document.write("equal");
// }
// var x = prompt("enter a no.");
// if(x%4==0){
//         document.write("leap");
//     }
//     else{
//         document.write("not leap");
//     }
// var dd = prompt("enter date");
// var mm = prompt("enter month");
// var yy = prompt("enter year");

// var c_date = new Date();
// var date = c_date.getDate();
// var year = c_date.getFullYear();
// var month = c_date.getMonth()+1;

// var age = (year-yy);

// if(month<mm){
//     age = age-1;
// }else if(month==mm){
//     if(date<dd){
//         age = age-1;
//     }
// }
// document.write(`your age is` ,age);
// document.getElementById("demo").innerText = s; 
// document.getElementById("test").innerHTML=s;
// switch (s){
//     case 'hii':
//     document.write('yes');
//     break;
//     case 'hello':
//         document.write("not");
//         break;
//         default:
//             document.write("ntg")
//             break;
// }
// var arr = [1,2,3,4,5,6];
// document.write(arr+"<br>");
// document.write(arr[0]);
// document.write(arr.reverse());
// console.log(arr.reverse());
// arr.push(7);
// arr.push("max");
// document.write(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// document.write(arr);
// arr.unshift(0);
// arr.unshift("a");
// arr.unshift("b");
// document.write(arr);
// arr.shift();
// arr.shift();
// document.write(arr);
// var obj= {
//     name : "max",
//     age : 25,
//     mobno : 889889780,
//     surname : "mavjshsh",
//     company : "tcs",
//     ismarried : true
// }
// document.write(obj.name,`your age is` ,obj.age);
// console.log(obj);
// console.log(Object.keys(obj));
// document.write(Object.keys(obj));
// document.write(Object.values(obj));

// for(i=0;i<=10;i++){
//     document.write("<br>" +"hii");
// }

// i=5;
// while(i<=8){
//     document.write("hii hello");
//     i++;
// }

// i=10;
// do{
//     document.write("abcdef");
//     i++;
// }while(i<=40);
// var arr = [1,2,3,4,5,6];
// for(are of arr){
//     document.write(are);
//     console.log(are)
// }
 
// var obj = {
//     name: "ramakrishna",
//     age : 43,
//     contact : 876905,
//     married : true,
//     surname : "max"
// }
// for(key in obj){
//     document.write("<br>"+key+obj[key])
// }

// var fib=[0,1];

// for( var i=3;i<=10;i++){
//     fib.push(fib[i-2] + fib[i-3]);
    
// }
// document.write(fib);


// function myfns(x,y){
//     document.write(10+20);
//     document.write(`sum of ${x} and ${y}=`,x+y);
    
// }
// myfns(1,3);

// var max = function(){
//     document.write("hello");
// }
// max();
// 



// function hiihello(){
//     var message = "hi all  hello";
//     function sayhii(){
//         document.write("jhgjjhik");
//     } 
//     // sayhii();

// }
// console.log(hiihello());

// function myfns(x1,x2){
//     return mesz=x1+x2;
// // return mesz;
// }

// console.log(myfns(2,4));

// function say(x,y){
//     var sum=x+y;
//     return sum;
// }

// document.write(say(1,2));
// function say(){
//     var mesz="hii ra ";
//     function bye(){
//         document.write(mesz);
//         return("good morning");
//     }
//     return bye;
// }
// document.write(say()())

// function say(callback){
//     document.write("hii hello");
//     callback();
// }
// say(function(){
//     document.write("how are u")
// });
// function recursive(max){
//     console.log(max);
//     if(max.length>1){
//         recursive(max.slice(1));
//     }
    

// }
// recursive("hii all");

// var user={
//     name:"max",
//     surname:"tod",
    
// }
// // forEach(function(user){
// //     document.write(user);
// // })
// document.write(Object.keys(user),Object.values(user));
var nmg=["max","tod","frank","well","tom"];
// nmg.forEach(function(index,value){
//     document.write(value,index)
// })

// var nmgobj=nmg.map(function(value,index){
//     return{
//         id:index,
//         name:value
//     }
// })
// console.log(nmgobj);
// var nmgs=nmg.filter(function(item){
//     return item.indexOf("a")>-1;
// })
// document.write(nmgs)
// var nmgk=[1,2,3,3,2,1];
// var sum = nmgk.reduce(function(acc,num){
//     return acc+num;
// });
// document.write(sum);
// var nmgk = nmg.sort(function(b,a){
//     if(a>b){
//         return 1;
//     }
//     else if(a<b){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// })
// document.write(nmgk)
// var num= [1,2,3,3,2,1];
// var isodd=num.every(function(num){
//     return num%2==1;
// })
// document.write("isodd")