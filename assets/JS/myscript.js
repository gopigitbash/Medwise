// function calculateAge() {
//     var cur_date = new Date();

//     var date = document.getElementById("date").value;
//     var month = document.getElementById("month").value;
//     var year = document.getElementById("year").value;



//     var c_year = cur_date.getFullYear();
//     var c_month = cur_date.getMonth() + 1;
//     var c_date = cur_date.getDate();

//     var age = (c_year - year);
//     if (c_month < month) {
//         age = age - 1;
//     } else if (c_month === month) {
//         if (c_date < date) {
//             age = age - 1;
//         }
//     }
//     document.getElementById("result").innerHTML = `your age is ${age} years`;
//     document.getElementById("demo").innerHTML = `${date}, ${month}, ${year}`;
// }
// calculateAge();

function calculateAge() {


    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;


    if (date == 0 && month == 0 && year == 0) {
        document.getElementById("test").innerHTML = ("please select correct value")

    } else {

        var cur_date = new Date();
        var c_year = cur_date.getFullYear();
        var c_month = cur_date.getMonth() + 1;
        var c_date = cur_date.getDate();

        var age = (c_year - year);
        if (c_month < month) {
            age = age - 1;
        } else if (c_month === month) {
            if (c_date < date) {
                age = age - 1;
            }
        }


        document.getElementById("demo").innerHTML = `${date} - ${month} - ${year}`;
        document.getElementById("test").innerHTML = "your age is" + " " + age + " " + "years";

    }

    //    document.getElementById("demo").innerHTML = "your age is"+" "+age+" "+"years";   
    //    document.getElementById("test").innerHTML =  `${date} - ${month} - ${year}`;
}

// var user = "admin";
// var user1 = "normal operator"

// var arrs = ["maxwell","smith","david","clerk"]
// for(arr of arrs){
//     console.log(arr);
// }

// arrs.forEach(function(value,index)
// {
//     console.log(index+value);
// });



// var user = {
//     Name : "ramakrishna",
//     age  : 25,
//     s1   : 70,
//     s2   : 65,
//     s3   : 80,
    
// }


// for(key in user){
//     console.log(key+":"+user[key]);
// }

// total = user.s1+user.s2+user.s3
// average = total/3;
// console.log(total);
// console.log(average);
// if(user.s1>=35 && user.s2>=35 && user.s3>=35){
//     if(total>=270 && total>230){
//         console.log("1st class");
//     }
//     else if(total>=230 && total>180){
//          console.log("2nd class");
//     }
//     else if(total>=180){
//         console.log("3rd class");
//     }

// }else{
//     console.log("fail")
// }


for(i=1;i<=10;i++){
    if(i%2!=0){
        document.write(i);
    }
}


// if()
// i= 11
// do{
//         console.log(i);
//         i++;
    
//     }while( i<=10)
    
// while( i<=10){
//     console.log(i);
//     i++;

// }

// var arr= [];
// console.log(arr);
// arr.push(10);
// arr.push("hii all");
// console.log(arr);
// // arr.pop();
// console.log(arr);
// arr.unshift(20);
// arr.unshift(30);
// arr.shift();
// var dat = new Date();
// console.log(dat.getDate());
// console.log(dat.getFullYear());
// console.log(dat.toDateString());
// console.log(dat.toUTCString());
// console.log(dat.toISOString());
// console.log(dat.toLocaleDateString());
// console.log(dat.toLocaleTimeString());

// var a = 'hii all';
// console.log(a);
// console.log(a.length);
// console.log(a.startsWith('h'));
// console.log(a.toUpperCase());
// console.log(a.includes('l'));
// console.log(a.indexOf('a'));
// console.log(a.charAt(5));
// console.log(a.slice(2,6));
// console.log(a.substring(2,6));
// console.log(a.replace('i','I'));

// var a = 123;
// console.log(typeof(a))



var branch = 'ce';
switch (branch){
    case 'ece':
        console.log('yes branch is electronics')
        break;
        case 'ec':
            console.log('it not ece')
            break;
    default:
        break;
}