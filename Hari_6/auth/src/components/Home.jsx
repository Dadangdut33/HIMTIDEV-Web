import { Link } from "react-router-dom";

export function Home() {
	return (
		<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card' style={{ borderRadius: "15px" }}>
							<div className='card-body p-5'>
								<div className='d-flex flex-column'>
									<h1 className='mx-auto'>My Note App</h1>
									<p className='mx-auto'>A simple note app</p>

									<div className='mx-auto'>
										<Link to={"/login"}>
											<button className='mx-3 btn btn-primary'>Login</button>
										</Link>
										<Link to={"/register"}>
											<button className='mx-3 btn btn-primary'>Register</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
