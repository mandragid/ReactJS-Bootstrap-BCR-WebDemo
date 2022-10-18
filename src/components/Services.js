import "../components/Services.css";
import React from "react";
import GambarCewek from "../img/cewe.png";
import CheckIcon from "../img/check.png";

function Services() {
	return (
		<div id="Services" className="container-fluid mt-5">
			<div className="container ">
				<div className="row align-items-center">
					<div className="col-md-6 p-0">
						<img className="w-100" src={GambarCewek} alt="GambarCewek" />
					</div>
					<div className="col ServiceContent">
						<div className="col JudulService">Best Car Rental for any kind of trip in (Lokasimu)!</div>
						<div className="col DescService mt-2">
							Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
							wedding, meeting, dll.
						</div>
						<div className="ServiceList">
							<div className="row mt-3">
								<div className="col List">
									<img className="CheckIcon" src={CheckIcon} alt="CheckIcon"></img>
									Sewa Mobil Dengan Supir di Bali 12 Jam
								</div>
							</div>
							<div className="row">
								<div className="col List">
									<img className="CheckIcon" src={CheckIcon} alt="CheckIcon"></img>
									Sewa Mobil Lepas Kunci di Bali 24 Jam
								</div>
							</div>
							<div className="row">
								<div className="col List">
									<img className="CheckIcon" src={CheckIcon} alt="CheckIcon"></img>
									Sewa Mobil Jangka Panjang Bulanan
								</div>
							</div>
							<div className="row">
								<div className="col List">
									<img className="CheckIcon" src={CheckIcon} alt="CheckIcon"></img>
									Gratis Antar - Jemput Mobil di Bandara
								</div>
							</div>
							<div className="row">
								<div className="col List">
									<img className="CheckIcon" src={CheckIcon} alt="CheckIcon"></img>
									Layanan Airport Transfer / Drop In Out
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
