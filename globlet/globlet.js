const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

   form.addEventListener("submit", function(event){
    event.preventDefault();
    //selected the input id
    const fruitadd = document.getElementById("fruit-to-add");
    //created the li
    const list = document.createElement("li");
    /*const listtext = document.createTextNode(fruitadd.value);
    list.appendChild(listtext);
    //create the dlt-btn
    const dltbtn = document.createElement("btn");
    const dltbtntext = document.createTextNode("X");
    dltbtn.appendChild(dltbtntext);
    //dltbtn.style.align-self = "flex-end ";
    list.appendChild(dltbtn); 

    //create the edit-btn
    const edtbtn = document.createElement("edt");
    const edttext = document.createTextNode("Edit");
    edtbtn.appendChild(edttext);
    list.appendChild(edtbtn); */
    
    //easy method to write
    list.innerHTML=fruitadd.value +"<button class='btn'>X</button><br> <button  class='edt'>Edit</button>";
    fruits.appendChild(list);

})

fruits.addEventListener("click",function(event){
    if (event.target.classList.contains ("btn")){
        const fruitdlt = event.target.parentElement;
        fruits.removeChild(fruitdlt);
    }
    
   
    


}) 
   