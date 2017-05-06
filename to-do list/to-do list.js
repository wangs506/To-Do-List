//allow user to use key "enter"

function KeyPress(e)
{
    
   if (e.keyCode == 13)
    {
        document.getElementById('button').click();
    }
}

 

// Create a new list item when clicking on the "Add" button
function makeNewList() {
	
	//create element HTML DOM for dynemic tasks
	var Inputvalue = document.getElementById("newtask").value;	
	var table = document.getElementById("tasks");
  	var tr = document.createElement("tr");
  	var checkBox = document.createElement("input");
  	var label = document.createElement("label");
  	var editText = document.createElement("input");
    var editButton = document.createElement("button");
   	var deleteButton = document.createElement("button");
  	checkBox.setAttribute("type", "checkbox");

  	editText.setAttribute("type", "text");
	editButton.className="editbutton";
	editButton.innerText = "edit";
	deleteButton.innerText = "delete |";
	deleteButton.className = "deletebutton";



	
	// Append to table
	tr.appendChild(checkBox);
	tr.appendChild(label);
	tr.appendChild(editText);
    tr.appendChild(editButton);
    tr.appendChild(deleteButton);
    label.innerText =Inputvalue;
	table.appendChild(tr);
	editText.style.visibility = "hidden"
  	document.getElementById("newtask").value = ""; // clean the input box
  	document.getElementById("newtask").focus();
  	btn5.style.display = "inline";

  	
  	//Delete one Task funtion
  	deleteButton.addEventListener ("click", function() {
  		var listItem = this.parentNode;
  		var Table = listItem.parentNode;
   		Table.removeChild(listItem);});
   
   //Edit one Task funtion
     editButton.addEventListener ('click', function(event) {
   		var listItem = this.parentNode;
 		var editText = listItem.querySelector("input[type=text]")
  		var label = listItem.querySelector("label");
   		label.innerText = editText.value;
   		
  		 
  	//Switch tasks between editable and show  	 
	if(editText.style.visibility == "hidden")
	{
	    editText.style.visibility = "visible";
		label.style.display = "none";
	    editButton.innerText = "Save";
	    }

	else
	{
    	editText.style.visibility = "hidden"
    	label.style.display = "inline";
    	editButton.innerText = "Edit";
    	}
  		 });
  		 
  //edit task and save it by pressing enter	 
   editText.addEventListener('keyup', function(e){
    if (e.keyCode == 13)
    {
    	var listItem = this.parentNode;
 		var editText = listItem.querySelector("input[type=text]")
  		var label = listItem.querySelector("label");
   		label.innerText = editText.value;
  		 
    if(editText.style.visibility == "hidden")
	{
	    editText.style.visibility = "visible";
		label.style.display = "none";
	    editButton.innerText = "Save";
	    
	    }
	else
	{
    	editText.style.visibility = "hidden"
    	label.style.display = "inline";
    	editButton.innerText = "Edit";
    	editText.innerText = label.value;
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
    btn5.style.display = "none";

    };}
	
    	
