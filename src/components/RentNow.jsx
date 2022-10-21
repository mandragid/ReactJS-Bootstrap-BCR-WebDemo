import React from "react";
import "../components/RentNow.css";
import Button from "react-bootstrap/Button";

function RentNow() {
	return (
		<div class="Container align-items-center m-auto">
			<div className="container-fluid">
				<div className="Jumbotron container text-center rounded">
					<div className="row RentTitle">
						<p className="text-center Semo m-auto mt-5">Sewa Mobil di (Lokasimu) Sekarang</p>
					</div>
					<div className="row mt-3 RentDesc">
						<p className="text-center m-auto Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<div className="row">
						<div className=" mt-5">
							<Button variant="success">Mulai Sewa Mobil</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RentNow;
