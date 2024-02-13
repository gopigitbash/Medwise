// for(i=1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }



// for(i=1;i<=10;i++){
//     if(i%2==0){
//         document.get(i);
//     }
// }



var std_dts = [
    {
      name:"candys",
      quantity:1,
      units:5,
      unitprice:20,
                  
    },
    {
      name:"fufs",
      quantity:1,
      units:5,
      unitprice:25,
  
      },
      {
        name:"cakes",
      quantity:1,
      units:5,
      unitprice:40,
  
      },
      {
        name:"biscuit",
      quantity:1,
      units:5,
      unitprice:10,
  
      }
]


for(std of std_dts){
   std.amount = std.units*std.unitprice;
   
 var details =`
 
 
 
 <td>${std.name}</td>
 <td>${std.quantity}</td>
 <td>${std.units}</td>
 <td>${std.unitprice}</td>
 <td>${std.amount}</td>
 
 
  `
 var data = document.createElement("tr");
 data.innerHTML = details;
 document.getElementById("t_body").append(data);
}


var customer = 
  {
    name:"MADHU,",
    
    phonenumber:"8808272892,",
    address:"Nellor,naidupeta,5362,",
                
  }
  var customer =`
 
 
 
 ${customer.name}
 ${customer.phonenumber}
 ${customer.address}
 
 
 
 
  `
  var max= document.createElement("div");
  max.innerHTML = customer;
  document.getElementById("dfgh").append(max);

  // document.write(customer.name,customer.phonenumber,customer.address);










