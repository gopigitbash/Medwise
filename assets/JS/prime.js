for (var i = 2; i <= 100; i++){
    for(var j=2; j<i; j++){
      // if(i%j == 0){
      //  break;
      // }
      }
      if(i==j && i%j != 0){
        document.write(i+"<br>")
      }
    }











var std_dts = [
  {
    name:"madhu",
    sno:1,
    regno:20,
    sub1:35,
    sub2:40,
    sub3:50,
    result:'A Grade'

  },
  {
      name:"raju",
      sno:2,
      regno:21,
      sub1:75,
      sub2:60,
      sub3:55,
      result:'B Grade'

    },
    {
      name:"Ramu",
      sno:3,
      regno:23,
      sub1:40,
      sub2:45,
      sub3:58,
      result:'C Grade'

    },
    {
      name:"Harikrishna",
      sno:4,
      regno:24,
      sub1:35,
      sub2:45,
      sub3:55,
      result: 'D Grade'

    }
]


for(std of std_dts){
 std.total = std.sub1 + std.sub2 + std.sub3;
 std.avarage =std.total/3;
var details =`

<td>${std.sno}</td>
<td>${std.name}</td>
<td>${std.regno}</td>
<td>${std.sub1}</td>
<td>${std.sub2}</td>
<td>${std.sub3}</td>
<td>${std.total}</td>
<td>${std.result}</td>
<td>${std.avarage}</td>
`
var data = document.createElement("tr");
data.innerHTML = details;
document.getElementById("t_body").append(data);
}
