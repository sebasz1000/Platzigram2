var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
page('/', function(ctx, next){
  title('Platzigram');
  var main = document.getElementById('main-container');
  var pictures = [ 
    
      {
        user: {
          name: 'sebasz10',
          avatar: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/10929941_10153356384834074_7256321308637394047_n.jpg?oh=aaea36be29267ac6926ad59e92cd5557&oe=596A00AA'
              },
        url: 'https://s-media-cache-ak0.pinimg.com/736x/b1/b9/0b/b1b90b560ca1c7c312e05cb869ecbedf.jpg',
        likes: 3,
        liked: false
      } ,

       {
        user: {
          name: 'pepito11',
          avatar: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/10929941_10153356384834074_7256321308637394047_n.jpg?oh=aaea36be29267ac6926ad59e92cd5557&oe=596A00AA'
              },
        url: 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg',
        likes: 4,
        liked: true
      } ,

         {
        user: {
          name: 'fulanito',
          avatar: 'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/10929941_10153356384834074_7256321308637394047_n.jpg?oh=aaea36be29267ac6926ad59e92cd5557&oe=596A00AA'
              },
        url: 'http://www.telegraph.co.uk/content/dam/news/2016/10/21/111703057RestrictedLeopardgeckoNEWS-large_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg',
        likes: 2,
        liked: true
      }

  ];
  empty(main).appendChild(template(pictures));
 
})

