/*let name = prompt("name : ")
let myname = document.querySelector("#myName")
myname.innerHTML = `${myname.innerHTML} ${name}`
*/


function showTime() {  
    /*1.yol */
    let d = new Date().toLocaleTimeString();
    document.querySelector("#myClock").innerHTML = d;
    /*live time content */
    setTimeout(showTime, 1000); 
    /*2.yol*/

    /* 
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.querySelector("#myClock").innerHTML = time;
    setTimeout(showTime, 1000); 
    */
}  
/*****************************************************/
const days = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const day = new Date();
document.querySelector("#myDay").innerHTML += days[day.getDay()];


