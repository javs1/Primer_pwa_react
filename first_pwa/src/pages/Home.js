import React from "react";
import {Link} from "react-router-dom";
function Home(){
  return(

    <div>
      <Link to="/">Regresar al login</Link>
      <section class="vh-100 gradient-custom">
      <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white login_card mb-5" >
            <div class="card-body p-5 text-center">
              <div class="w-100">
                <h2 class="login_card_title">Titulo de carta 1</h2>	
                <p class="card-text">Contenido de carta 1</p>	
                <ul class="list-group list-group-flush mb-3">
                  <li class="list-group-item bg-dark item">Item 1</li>
                  <li class="list-group-item bg-dark item">Item 2</li>
                  <li class="list-group-item bg-dark item">Item 3</li>
                </ul>			
                  <div class="form-group">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Desplegar modal 1
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card bg-dark text-white login_card" >
            <div class="card-body p-5 text-center">
              <div class="w-100">
                <h2 class="login_card_title">Titulo de carta 2</h2>	
                <p class="card-text">Contenido de carta 2</p>	
                <ul class="list-group list-group-flush mb-3">
                  <li class="list-group-item bg-dark item">Item 1</li>
                  <li class="list-group-item bg-dark item">Item 2</li>
                  <li class="list-group-item bg-dark item">Item 3</li>
                </ul>			
                  <div class="form-group">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      Desplegar modal 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal 1</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Primer input</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Contenido a introducir</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Segundo input</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">Contenido a introducir</div>
              </div>
            </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal 2</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Primer input</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Contenido a introducir</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Segundo input</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">Contenido a introducir</div>
              </div>
            </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;