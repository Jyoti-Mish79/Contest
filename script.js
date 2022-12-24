const userData = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];

userData.map( function iterator(item){
    item.age = Number(item.age);
});
console.log(userData);
let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let button = document.getElementById("btn");
function filterByProfession(){
    result.innerHTML="";
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);
    userData.forEach((item) =>{
        if(dropdownValue === "profession"){
            alert("Please select a profession");
            return;
        }
        if(item.profession === dropdownValue){
        let div = document.createElement("div");
        div.innerText = item.id + "  Name:" + item.name + "  Profession:" + item.profession + "  Age:" + item.age;
        result.append(div);
        }
    })

}

button.addEventListener('click', filterByProfession)
const tname = document.querySelector("#tname");
const tpname = document.querySelector("#tpname");
const taname = document.querySelector("#taname");
const abutton = document.querySelector("#ad");
const cartBody = document.querySelector(".cart-body");
let cartItem = {};
const updateCart = () =>{
    var tr1= document.createElement("tr");
    var tr2= document.createElement("tr");
    var tr3= document.createElement("tr");
    tr1.innerHTML = `<td>${cartItem.tname}</td><td>${cartItem.tpname}</td><td>${cartItem.taname}`;
    cartBody.appendChild(tr1);
};
 
const addItemToCart = () =>{
    cartItem = {
        tname: tname.value,
        tpname: tpname.value,
        taname: taname.value,
    }
    updateCart();
};
abutton.addEventListener("click",addItemToCart);



