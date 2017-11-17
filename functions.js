var session = {storage: sessionStorage};
var local = {storage: localStorage};

/* Set value in Local/Session storage */
var setValues = function() {
	var keyval = document.getElementById('key').value;
     	var value = document.getElementById('value').value;
	this.storage.setItem(keyval,value);
	alert("Key-value pair added!");
}

var setInLocalStorage=setValues.bind(local);
var setInSessionStorage=setValues.bind(session);

/*Clear Local/Session storage */
var clearStorage = function() {
	var keyval = document.getElementById('key').value;
     	var value = document.getElementById('value').value;
	this.storage.clear();
	alert("Storage cleared!");
}

var clearLocalStorage=clearStorage.bind(local);
var clearSessionStorage=clearStorage.bind(session);

/* Retrieve all key-value pairs from Local/Session Storage*/
var getValues = function() { 
        var ls = this.storage.length;
        if (ls == 0)
            alert("Error! Storage is empty!");
	else
		 for(var i = 0; i < ls; i++) {
		     var key = this.storage.key(i);
		     var value = this.storage[key];
		     console.log(key + " -> " + value);
		 }
}

var getDataFromLocal=getValues.bind(local);
var getDataFromSession=getValues.bind(session);

/*Event handler to retrieve item from Local/Session Storage */
var getSingleItem = function() {
    var item_storage = document.getElementById('getitem').value;
    var item_value = this.storage.getItem(item_storage);
    if (!item_value)
        alert("Key-value pair does not exist!");
    else
        console.log(item_storage + " -> " + item_value);
}

var getItemFromLocal=getSingleItem.bind(local);
var getItemFromSession=getSingleItem.bind(session);

