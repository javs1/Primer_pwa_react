import React from "react";
import {Link} from "react-router-dom";

function Login(){
  return(
		<div>
    <section class="vh-100 gradient-custom">
    <div class="container h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-10 col-md-8 col-lg-6 col-xl-5">
				<div class="card bg-dark text-white login_card" >
					<div class="card-body p-5 text-center">
						<div class="w-100">
							<h2 class="login_card_title" >Login</h2>					
										<div class="form-group">
										<Link to="/home"><button type="button" class="btn btn-primary">Ir al inico</button></Link>
										</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
		</div>
  )
}

export default Login;