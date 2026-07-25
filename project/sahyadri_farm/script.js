let harvestData=[];

function saveData(){

let farmer=document.getElementById("farmer").value;

let mobile=document.getElementById("mobile").value;

let vehicle=document.getElementById("vehicle").value;

let weight=document.getElementById("weight").value;

if(farmer=="" || mobile=="" || vehicle=="" || weight==""){

alert("Fill all fields");

return;

}

harvestData.push({

farmer,
mobile,
vehicle,
weight

});

displayData();

alert("Harvest Saved Successfully");

// SMS API will be called here

document.getElementById("farmer").value="";
document.getElementById("mobile").value="";
document.getElementById("vehicle").value="";
document.getElementById("weight").value="";

}

function displayData(){

let rows="";

harvestData.forEach(data=>{

rows+=`

<tr>

<td>${data.farmer}</td>

<td>${data.vehicle}</td>

<td>${data.weight} Kg</td>

</tr>

`;

});

document.getElementById("tableData").innerHTML=rows;

}