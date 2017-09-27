$(function(){

  $.ajax({
    type:'GET',
    url:'contact.html',
    success: function(data){
       console.log(data);
       alert('executed');
    }
    
  });
});
