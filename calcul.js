let product = document.getElementById('name');
let price = document.getElementById('price');
let sale = document.getElementById('sale');
let shiping = document.getElementById('shiping');
let quantity = document.getElementById('quantity');
let total = document.getElementById('total');
let chartotal = document.getElementById('chartotal');
let create = document.getElementById('create');
let table = document.getElementById('table');
let deletes = document.getElementById('delete');
let deletetous = document.getElementById('deleteall');
let updateelement = document.getElementById('updateelement');
let updatebutton = document.getElementById('update');

let tmp;

//cacul total

function gettotal(){
    if(price.value!=''){
        if(quantity.value=='' || quantity.value<=0 ){
            quantity.value=1;
        }
        let s= -(+price.value+ +shiping.value)+ +sale.value ;
        let t =(s* +quantity.value)- +ads.value;
        total.innerHTML = t;
        total.style.background= '#03ad03';
        chartotal.style.background= '#03ad03';
    }else{
        total.innerHTML="";
        total.style.background='#ff0000';
        chartotal.style.background= '#ff0000';
    }
}

//read data


let data;
if(localStorage.product!=null){
    data=JSON.parse(localStorage.product);
}
else{
    data=[];
}


create.onclick = function(){
    let newdata={ 
     product:product.value,
     price:price.value,
     sale:sale.value,
     shiping:shiping.value,
     quantity:quantity.value,
     ads:ads.value,
     total:total.innerHTML,
     }
     if(product.value!='' && price.value!='' && sale.value!=0 ){
        data.push(newdata);
        localStorage.setItem('product',JSON.stringify(data));
        emptyinput();
        show();
        
     }
     

}
//emtyinput

function emptyinput() {

    product.value='';
    price.value='';
    ads.value='';
    shiping.value='';
    sale.value='';
    quantity.value=1;
}


//show data


function show(){
    let show = ``;
    for(let i=0;i<data.length;i++){
           show += `<tr>
           <th scope="row">${i+1} </th>
           <td>${data[i].product} </td>
           <td>${data[i].price} </td>
           <td>${data[i].total} </td>
           <td ><span id="updateelement" onclick=update(${i}) class="btn btn-outline-primary">update</span></td>
           <td ><span id="delete" onclick=deleteelement(${i}) class="btn btn-outline-danger">delete</span></td>
        
            </tr>`
            table.innerHTML= show;  
           }

}


//delete

function deleteelement(i) {
    data.splice(i,1);
    localStorage.product = JSON.stringify(data);
    show();

}
//delete all


function deleteshow(){
    if(data.length > 0){
        deletetous.style.display='block';
    }
    
}
deleteshow();


function deleteall(){
    data.splice(0);
    localStorage.clear();
    show();
}
//update

function update(i){
    updatebutton.style.display='block';
    create.style.display='none';
    product.value=data[i].product;
    price.value=data[i].price;
    sale.value=data[i].sale;
    ads.value=data[i].ads;
    shiping.value=data[i].shiping;
    quantity.value=data[i].quantity;
    tmp=i;
}
function updateknow(){
    data[tmp].product=product.value;
    data[tmp].price=price.value;
    data[tmp].sale=sale.value;
    data[tmp].ads=ads.value;
    data[tmp].shiping=shiping.value;
    data[tmp].quantity=quantity.value;
    data[tmp].total=total.innerHTML;
    localStorage.product=JSON.stringify(data);
    updatebutton.style.display='none';
    create.style.display='block';
    total.innerHTML=0;
    emptyinput();
    show();



}







//show
show();