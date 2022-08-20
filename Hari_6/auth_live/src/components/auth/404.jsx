import { Link } from "react-router-dom";

export function Page_404() {
	return (
		<>
			<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col col-xl-10'>
							<div className='card' style={{ borderRadius: "15px" }}>
								<div className='card-body p-5 d-flex flex-column'>
									<h1 className='mx-auto mb-3'>404</h1>
									<h2 className='mx-auto'>Page Not Found</h2>
									<div className='mx-auto'>
										<Link to='/'>
											<button className=' btn btn-info'>Back to Home</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
