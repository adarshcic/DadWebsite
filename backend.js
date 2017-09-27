$(function(){

  $.ajax({
    type:'GET',
    url:'https://adarshcic.github.io/DadWebsite/contact.html',
    success: function(data){
       console.log(data);
       alert('executed');
    }
  });
});
