
var ul = document.getElementById('list')
var li

var addButton =document.getElementById('add')
addButton.addEventListener('click',addItem);

var removeButton =document.getElementById('remove')
removeButton.addEventListener('click',removeItem);

var removeAllButton =document.getElementById('removeall')
removeButton.addEventListener('click',removeAll);




function addItem(){
    var input =document.getElementById('input')
    var item =input.value;
    ul= document.getElementById('list')
    var textnode =document.createTextNode(item)

    if(item===''){
        return false;

    }
    else{
        li=document.createElement('li');
        //checkbox
        var checkbox =document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')

        //label
        var label=document.createElement('label');
        label.setAttribute('for','item')

        //add these else on web page
      ul.appendChild(label)
      li.appendChild(checkbox)
      label.appendChild(textnode)
      li.appendChild(label)
      ul.insertBefore(li,ul.childNodes[0]);

      setTimeout(()=>{
        li.className = "visual";
      },2);

     input.value='';

    }
}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
       while(li[index] && li[index].children[0].checked){
        ul.removeChild(li[index])
       }
    }

}

function removeAll(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
       
        ul.removeChild(li[index])
       
    }
}

