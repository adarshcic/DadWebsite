$(function(){

  $.ajax({
    type:'GET',
    url:'https://adarshcic.github.io/DadWebsite/contact.html',
    success: function(data){
       console.log(data);
       alert('executed');
    }
    error: function(){
      alert('what am i doing? I have no idea');
    }
  });
});
