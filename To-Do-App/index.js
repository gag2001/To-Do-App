const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        alert('Write Something!!!');
    }
    
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
}


listContainer.addEventListener('click',function(f){
     if(f.target.tagName === 'LI'){
        f.target.classList.toggle('checked');

     }
     else if(f.target.tagName === 'SPAN'){
        f.target.parentElement.remove();
     }
},false);