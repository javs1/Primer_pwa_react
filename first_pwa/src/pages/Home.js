import React from "react";
import {Link} from "react-router-dom";
function Home(){
  return(

    <div>
    <nav class="navbar ucol-nav">
      <div class="container-fluid">
        <a href="https://www.ucol.mx/" class="navbar-brand">
          <img src="ucol.png" alt="" class="d-inline-block align-text-middle"/>
        </a>
      </div>
    </nav>
    <section class="page-header">
      <div class="container text-center">
          <h1 class="title-ucol ">UBICACIONES</h1>
      </div>
    </section>
      <Link to="/" className="login-link"><button>&#60; Login</button></Link>
      <section class="vh-100 gradient-custom">
      <div class="container h-100">
      <div class="container col-5 d-inline-flex p-2">
        <div class="input-group mb-3 search-place ">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">

        </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Home;