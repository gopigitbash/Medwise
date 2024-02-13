   var cust ={
    name:"madhu",
    contactno:6304788635,
    place:"ameerpet"
}
var cust=`
${cust.name}
${cust.contactno}
${cust.place}
`

var cust_dts = document.createElement("dts");
cust_dts.innerHTML = cust;
document.getElementById("dts").append(cust_dts);