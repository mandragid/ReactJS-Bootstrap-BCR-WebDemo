import "../components/WhyUs.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Jempol from "../img/jempol.png";
import Harga from "../img/harga.png";
import Waktu from "../img/waktu.png";
import Sopir from "../img/sopir.png";

function WhyUs() {
	return (
		<div id="WhyUs" className="WhyUs container-fluid mt-5">
			<div className="container">
				<div className="row">
					<h2 className="JudulWhyus">Why Us?</h2>
					<p>Mengapa harus pilih Binar Car Rental?</p>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-around mt-3">
					<div className="col-md-3 mb-3 mb-md-0  ">
						<Card className="Card">
							<Card.Img variant="top" src={Jempol} />
							<Card.Body>
								<Card.Title className="JudulKartu">Mobil Lengkap</Card.Title>
								<Card.Text className="DescKartu">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-3 mb-3 mb-md-0">
						<Card className="Card">
							<Card.Img variant="top" src={Harga} />
							<Card.Body>
								<Card.Title className="JudulKartu">Harga Murah</Card.Title>
								<Card.Text className="DescKartu">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-3 mb-3 mb-md-0">
						<Card className="Card">
							<Card.Img variant="top" src={Waktu} />
							<Card.Body>
								<Card.Title className="JudulKartu">Layanan 24 Jam</Card.Title>
								<Card.Text className="DescKartu">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-3 mb-3 mb-md-0">
						<Card className="Card">
							<Card.Img variant="top" src={Sopir} />
							<Card.Body>
								<Card.Title className="JudulKartu">Sopir Profesional</Card.Title>
								<Card.Text className="DescKartu">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyUs;
