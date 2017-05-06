﻿

function KeyPress(e)
{	
   
    if (e.keyCode == 13)
    {
        document.getElementById('button').click();
            
     }
 
} 	


$(document).ready(function(){

	
  
// Create a new list item when clicking on the "Add" button

	$("#button").click(function(){
     var name =  $("#newtask").val();
     $('#tasks').append('<li><input type="checkbox" id="check" /><span class="todoText">' + name +'</span>'+
  	 '<input type = "text" class = "editTodo">'+
  	'<input type="button" id = "editbutton" class="editbutton"value="edit">'+
  	'<input type="button" id = "savebutton" class="savebutton"value="save">'+
   	'<input type="button" id = "deletebutton" class= "deletebutton"value="delete |">'+
   	'<br/>');
     $("#newtask").val("");
     $("#newtask").focus();
	 $(".btn5").show();

	});
	
	
	
//Edit input by click enter key
	 
	 $('#tasks').on('keyup', '.editTodo',(function(){
 	 if (event.keyCode == 13) {
         		var text1 =$(this).parent().find('.editTodo').val();
         		$(this).parent().find('.todoText').text(text1);
         		$(this).parent().find('.todoText').show();
         		$(this).parent().find('.editTodo').hide();
         		$(this).parent().find('.savebutton').hide();
         		$(this).parent().find(".editbutton").show();  
         		}       		
         		         		
         		   })); 
         		      	
// Remove all button
	
	  $("#btn5").click(function(){
      $('li').remove();
      $(".btn5").hide(); });
    
// Delete button  
 	$('#tasks').on('click', '#deletebutton', function(){    
 	$(this).parent('li').remove();});
 	
//Checkbox, it will be marked if it is cheked
	$('#tasks').on('click', '#check', function(){  
            var $this = $(this);
            if (this.checked) {
                $this.parent().addClass('completed');
            } else {
                $this.parent().removeClass('completed');
            }
        });     
     
//User can edit the tasks and save by pressing enter
      $('#tasks').on("click", '#editbutton',function(){
      			      			
         		var text =$(this).parent().find('.todoText').text();
         		$(this).parent().find('.editTodo').val(text);
         		$(this).parent().find('.editTodo').show();
         		$(this).parent().find('.todoText').hide();
         		$(this).parent().find('.editbutton').hide();
         		$(this).parent().find('.savebutton').show();
         	
         	});
      
//The task can be edited and save by pressing save link  	   
      $('#tasks').on('click', '#savebutton',function(){
 	 
         		var text1 =$(this).parent().find('.editTodo').val();
         		$(this).parent().find('.todoText').text(text1);
         		$(this).parent().find('.todoText').show();
         		$(this).parent().find('.editTodo').hide();
         		$(this).parent().find('.savebutton').hide();
         		$(this).parent().find(".editbutton").show();  
         		      		
         		         		
         		   });
      	    	
		});
