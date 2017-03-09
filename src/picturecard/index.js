var yo = require('yo-yo');

module.exports = function (pic){
  var typeheart;
  if(pic.liked){
    typeheart = 'fa-heart';
  }else{
    typeheart = 'fa-heart-o';
  }
  return yo`<div class="card">
    <div class="card-image">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <a href="/user/${pic.user.username}" class="card-title">
        <img src="${pic.user.avatar}" class="avatar"/>
        <span class="username">${pic.user.name}</span>
      </a>
      <small class="right time">Hace 1 día</small>
      <p>
        <a href="#" class="left"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
        <span class="left likes">${pic.likes} me gustan</span>
      </p>
   </div>
  </div>`};