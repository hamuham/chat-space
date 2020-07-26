$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="chat-messages__list">
          <div class="user-name">
             ${message.user_name}
          </div>
          <div class="time">
             ${message.created_at}
           </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="chat-messages__list">
          <div class="user-name">
            ${message.user_name}
          </div>
          <div class="time">
            ${message.created_at}
          </div>
         <div class="lower-message">
           <p class="lower-message__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action');
//  console.log(url)
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
 
 .done(function(data){
  
  var html = buildHTML(data);
  $('.chat-messages').animate({ scrollTop: $('.chat-messages')[0].scrollHeight});
  $('form')[0].reset();
  $('.chat-messages').append(html);
})
.fail(function() {
  alert('メッセージを送信できません');
});
})
});