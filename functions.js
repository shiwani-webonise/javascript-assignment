/* Function to set values in Local or Session Storage */
function setValues(button_id) {
     var keyval = document.getElementById('key').value;
     var value = document.getElementById('value').value;
     if(button_id == "SetLS" && keyval!="" && value!=""){
        localStorage.setItem(keyval,value);
        alert("Key-value pair added!");
     } 
     else if(button_id == "SetSS" && keyval!="" && value!="" ){
       sessionStorage.setItem(keyval,value);
       alert("Key-value pair added!");
     }
     else{
        alert("Error. Field values are empty.");
     }
}

/* Event handler to clear Local Storage*/
var ele = document.getElementById('DelLS');
ele.addEventListener('click',function(ele) {
     localStorage.clear();
    alert("Local Storage cleared!");
})

/* Implementing call method to clear Session Storage */
var obj = {button_id:'DelSS'}; 
var DeleteFromSS = function() {
    b_id = this.button_id
    var ele1 = document.getElementById(b_id);
    ele1.addEventListener('click',function(ele1) {
        sessionStorage.clear();
        alert("Session storage cleared!")
})
}
DeleteFromSS.call(obj);


/* Function to retrieve all key-value pairs from Local or Session Storage*/
function getValues(button_id) {
    if(button_id == "GetLS"){
        var ls = localStorage.length;
        if (ls == 0)
            alert("Local Storage is empty!");
         for(var i = 0; i < ls; i++) {
             var key = localStorage.key(i);
             var value = localStorage[key];
             console.log(key + " -> " + value);
         }
    }
    else if (button_id == "GetSS") {
        var ss = sessionStorage.length;
        if(ss == 0)
            alert("Session Storage is empty!");
        for(var i = 0; i < ss; i++) {
            var key = sessionStorage.key(i);
            var value = sessionStorage[key];
            console.log(key + " -> " + value);
      }
    }
}

/*Event handler to retrieve item from Local Storage */
var ele2 = document.getElementById('getitemls');
ele2.addEventListener('click',function(ele2){
    var item_ls = document.getElementById('itemls').value;
    var item_value = localStorage.getItem(item_ls);
    if (!item_value)
        alert("Key-value pair does not exist!");
    else
        console.log(item_ls + " -> " + item_value);
})

/*Event handler to retrieve item from Session Storage */

var ele3 = document.getElementById('getitemss');
ele3.addEventListener('click',function(ele3){
    var item_ss = document.getElementById('itemss').value;
    var item_value2 = sessionStorage.getItem(item_ss);
    if (!item_value2)
        alert("Key-value pair does not exist!");
    else
        console.log(item_ss + " -> " + item_value2);
})