
//emamine the document object//
//console.dir(document);
//console.log(document.domain);//
//console.log(document.url)//
//console.log(document.title)//
//console.log(document.doctype)//
//console.log(document.head)//
//console.log(document.body)//
//console.log(document.all[])//
//console.log(document.forms);//
//console.log(document.links)//
//console.log(document.images)//


//GETAAELEMENTBYID//

//console.log(document.getElementById("header-title"))//
 //var headerTitle = document.getElementById('header-title');
 //console.log(headerTitle);
//headerTitle.textContent = 'hello';//
//console.log (headerTitle.innerText = 'goodbye');
//headerTitle.innerHtml = '<h3>hello</h3>'


//GETElementsByClassName//


//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContenet = 'Hello 2';
//items[1].style.fontweight = 'bold';
//items[1].style.backgroundColor = 'yellow';



//gives error//
//items.style.backgroundColor = 'blue';//

//for(var i = 0; i < items.length; i++) {
 //   items[i].style.backgroundColor = 'pink';
//}//



//GetElementByTagName//
//var li = document.getElementsByClassName('list-group-item');
//console.log(li);
//console.log(items[li]);
//li[1].textContenet = 'Hello 2';
//li[1].style.fontweight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//for(var i = 0; i < li.length; i++) {
 //   li[i].style.backgroundColor = 'pink';
//}//



//QuerySelector//

//var header = document.querySelector('#main-header');
//header.style.borderBottom = ' solid4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="Send"

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'green';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color='blue';

// QuerySelectorALl//


//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
//for(var i = 0; i < odd.length; i++){
  //  odd[i].style.backgroundColor = 'pink';
    //even[i].style.backgroundColor = 'orange';

//}

//Traversing THE DOM//


//var itemList = document.querySelector('#items')
//ParentElement
//console.log(itemList.parentElemnt);
//itemList.Element.style.backgroundColor = 'pink';
//console.log(itemList.parentElement.parentElement);

//ChildNodes

//console.log(itemList.childNodes);

//console.log(itemList.children);

//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';


// First Child

//console.log(itemList.firstChild);

// First Element Child

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';


// Last Child

//console.log(itemList.LastChild);

// First Element Child

//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';
  //EVENTS//
//var button = document.getElementById('button').addEventListener('click',buttonClick);

//function buttonClick(e){
   // console.log("Button Clicked");
///console.log(e)

//document.getElementById('header-title').textContent = 'My List';
//document.getElementById('header-title').style.color = 'pink';
//document.getElementById('header-title').style.backgroundColor ='black';

//
//console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//console.log(e);



//var output = document.getElementById('output');
//output.InnerHTML = '<h3>'+e.target.id+'</h3>';

//console.log(e.type);

//console.log(e.clientX;
//console.log(eclientY);

//console.log(e.offsetX);
//console.log(e.log.offsetY);

//console.log(e.altKey);
//console.log(e.cntrlKey);
//console.log(e.shiftKey);

//}
var button = document.getElementById('button');
var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup' , runEvent);
//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseLeave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);
//box.addEventListener('mousemove', runEvent);
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
  //KeyLOG//
//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);


//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);




//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste',runEvent);
//itemInput.addEventListensen('input', runEvent);

//select.addEventListener('change', runEvent);
//select.addEventListener('input', runEvent);


form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT type: '+e.type);
    //console.log(e.target.value);

    //document.body.style.display ='none';

    //console.log(e.target.value);
    //document.getElementById('output').innerHTML = '<h3>' +e.target.value+'<h3>';
    
   // output.innerHTML ='<h3>MouseX: '+e.offsetX+ ' </h3> <h3>MouseY: '+e.offsetY+ '</h3>';

//document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

}
