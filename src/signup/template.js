var yo = require('yo-yo');
var landing = require('../landing'); //here we need landing template with img
var box = yo`<div class="col s12 m7">
                                <div class="row">
                                    <div class="signup-box">
                                        <h1 class="platzigram">Platzigram</h1>
                                        <form class="signup-form">
                                            <h2>Registrate para ver fotos de tus amigos estudiando de Platzi</h2>
                                            <div class="section">
                                                <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                                                <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
                                            </div>
                                            <div class="divider"></div>
                                            <div class="section">
                                                <input type="email" name="email" placeholder="Correo electrónico"/>
                                                <input type="text" name="nombre" placeholder="Tú nombre"/>
                                                <input type="text" name="username" placeholder="Nombre de usuario"/>
                                                <input type="password" name="password" placeholder="Contraseña"/>
                                                <button class="btn waves-effect waves-light btn-signup">REGISTRATE</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="row">
                                        <div class="login-box">
                                            Tienes una cuenta <a href="/signin">Entrar</a> 
                                        </div>
                                </div>
                            </div>`
  
module.exports = landing(box);