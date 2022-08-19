import { useNavigate } from "react-router-dom";

export function NotFound() {
	const navigate = useNavigate();

	return (
		<section className='vh-100' style={{ backgroundColor: "#e2d5de" }}>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card' style={{ borderRadius: "15px" }}>
							<div className='card-body p-5'>
								<div className='d-flex flex-column'>
									<h1 className='mx-auto'>404</h1>
									<p className='mx-auto'>Page not found.</p>
									<button className='mx-auto btn btn-primary' onClick={() => navigate(-1)}>
										Go back
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
