//allow user to use key "enter"

function KeyPress(e)
{
    
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('button').click();
        return false;
    }
    return true;
} 	

// Create a new list item when clicking on the "Add" button
function makeNewList() {
	
	//create element HTML DOM for dynemic tasks
	var Inputvalue = document.getElementById("newtask").value;	
	var table = document.getElementById("tasks");
  	var tr = document.createElement("tr");
  	var checkBox = document.createElement("input");
  	var label = document.createElement("label");
  	var editInput = document.createElement("input");
    var editButton = document.createElement("button");
   	var deleteButton = document.createElement("button");
  	checkBox.setAttribute("type", "checkbox");
  	editInput.setAttribute("type", "text");
	editButton.className="editbutton";
	editButton.innerText = "Edit";
	deleteButton.innerText = "Delet |";
	deleteButton.className = "deletebutton";
	
	// Append to table
	tr.appendChild(checkBox);
	tr.appendChild(label);
	tr.appendChild(editInput);
    tr.appendChild(editButton);
    tr.appendChild(deleteButton);
    label.innerText =Inputvalue;
	table.appendChild(tr);
	editInput.style.visibility = "hidden"
  	document.getElementById("newtask").value = ""; // clean the input box
  	
  	//Delete one Task funtion
  	deleteButton.addEventListener ("click", function() {
  		var listItem = this.parentNode;
  		var ul = listItem.parentNode;
   		ul.removeChild(listItem);});
   
   //Edit one Task funtion
     editButton.addEventListener ('click', function(event) {
   		var listItem = this.parentNode;
 		var editInput = listItem.querySelector("input[type=text]")
  		var label = listItem.querySelector("label");
   		label.innerText = editInput.value;
  		 
  	//Switch tasks between editable and show  	 
	if(editInput.style.visibility == "hidden")
	{
	    editInput.style.visibility = "visible";
		label.style.display = "none";
	    editButton.innerText = "Save";
	    }

	else
	{
    	editInput.style.visibility = "hidden"
    	label.style.display = "inline";
    	editButton.innerText = "Edit";
    	}
  		 });
  		 
  //edit task and save it by pressing enter	 
   editInput.addEventListener('keyup', function(e){
    if (e.keyCode == 13)
    {
    	var listItem = this.parentNode;
 		var editInput = listItem.querySelector("input[type=text]")
  		var label = listItem.querySelector("label");
   		label.innerText = editInput.value;
  		 
    if(editInput.style.visibility == "hidden")
	{
	    editInput.style.visibility = "visible";
		label.style.display = "none";
	    editButton.innerText = "Save";
	    }
	else
	{
    	editInput.style.visibility = "hidden"
    	label.style.display = "inline";
    	editButton.innerText = "Edit";
    	}

      
    }

  		 });
  		 
 
  	//Checkbox marked when the tasked is done	 
 	checkBox.addEventListener('click', function() {
 	if (checkBox.checked == true)
    	tr.style.textDecoration = "line-through";
    	
    else
    	tr.style.textDecoration = "none";
    	});}
 
 //Delete all tsak funtion
 function DeleteList() {
     var myNode = document.getElementById("tasks");
	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    };}
	
    	
