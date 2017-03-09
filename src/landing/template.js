var yo = require('yo-yo');

module.exports = function landing(box) {
  return yo`<div class="container landing">
                <div class="row">
                    <div class="col s10 push-s1">
                        <div class="row">
                            <div class="col m5 hide-on-small-only">
                            <img src="iphone.png" class="iphoneimg">
                            </div>
                            ${box}
                        </div>
                    </div>
                </div>
            </div>`
  
}

//here we put an element box depending it we are in sign in or singupº