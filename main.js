//function getfile(file,callback) {

//var xhr = new XMLHttpRequest();
//xhr.overrideMimeType("application/json");
//xhr.open("GET",file,true);
//xhr.onreadystatechange = function(){
//  if(xhr.readyState === 4 && xhr.status == "200"){
//  callback(xhr.responseText);

//}
//};
//xhr.send(null);
//}
//getfile("data.json",function(text){
//  var data = JSON.parse(text);
//    var data1 = JSON.parse(text);
  //console.log(data);
//  details(data.basics);
  //career(data1.CarrerObjective);
  //education(data.education);
//  techskill(data.techskill);
  //achievements(data.achievements);
//})
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })
}
var newfile=loadjson("data.json");
newfile.then(data=>{
  details(data.basics);
  career(data.CarrerObjective);
  education(data.education);
  techskill(data.techskill);
  achievements(data.achievements);
})

var child = document.querySelector(".childone");

function details(det) {
  var img = document.createElement("img");
 img.src = det.image;
child.appendChild(img);
var name = document.createElement("h3");
name.textContent = det.name;
child.appendChild(name);
var number = document.createElement("h3");
number.textContent = det.phoneno;
child.appendChild(number);
var mail = document.createElement("a");
mail.href =" mailto:prasanna@gmail.com";
mail.textContent = det.email;
child.appendChild(mail);

var address1 = document.createElement("h2");
address1.textContent = "Address";
child.appendChild(address1);
var line = document.createElement("hr");
child.appendChild(line);

var address = document.createElement("p");
address.textContent = det.Address;
child.appendChild(address);
}
var child2 = document.querySelector(".childtwo");
function career(careerinfo){

  var car1 = document.createElement("h3");
  car1.textContent = "CareerObject";
  child2.appendChild(car1);
  var line=document.createElement("hr");
  child2.appendChild(line);
  var car = document.createElement("h3");
  car.textContent = careerinfo.info;
  child2.appendChild(car);
}
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent="Education Qualifications";
  child2.appendChild(ed);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<edu.length;i++){
    var deg=document.createElement("h3");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);
    var edul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=edu[i].institite;
    edul.appendChild(eduli);
    child2.appendChild(edul);
    var edul1=document.createElement("ul");
    var eduli1=document.createElement("li");
    eduli1.textContent=edu[i].date;
    edul1.appendChild(eduli1);
    child2.appendChild(edul1);
  }
}
  function techskill(tech){
    var hr1=document.createElement("hr");
    child2.appendChild(hr1);
    var tc=document.createElement("h2");
    tc.textContent="Technical Skills";
    child2.appendChild(tc);
  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<tech.length;i++){
    tabledata+="<tr><td>"+tech[i].title+"</td><td>"+tech[i].data+"</td></tr>";
    }
    skilldata.innerHTML=tabledata;
}
function achievements(ac){
  var ed=document.createElement("h2");
  ed.textContent="Achievements";
  child2.appendChild(ed);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
    var l1=document.createElement("ul");
    var li1=document.createElement("li");
    li1.textContent=ac[0].coding;
    l1.appendChild(li1);
    child2.appendChild(l1);
    var l=document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=ac[1].ppts;
    l.appendChild(li);
    child2.appendChild(l);
}
