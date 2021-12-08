git let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement('div');
  item.classList.add("item");
  //div.className = 'item';
  item.id = `item-${order}`;
  
  //item.id = order;
  item.draggable = " true";

 return item;

};



 document.addEventListener("dragstrart",(event) => {
  event.DataTranfer.setData("Text", event.target.id)
} );


document.addEventListener("dragend",(event) => {
   event.DataTransfer.clearData();
} );

let input = document.createElement("input");
item.append(input);
item.appendChild(input);
//document.item.appendChild(input);
//document.getElementById("item").appendChild(input); 
//document.getElementById('item').innerHTML += Text;

let save_btn = document.createElement("button");
save_btn.innerHTML = "Save";
item.appendChild(save_btn);

document.addEventListener("click", () => {
  //const error = document.querySelector('save_btn');
  //error.setAttribute(" ")
  error.innerHTML = " ";

  if(input.target.value !== ""){
    order +=1;
    document.innerHTML = input.target.value;
    adding= false;
  } else {
    error.innerHTML = message;
  }

})


document.querySelectorAll('.drop').forEach(element => {

});


 