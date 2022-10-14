import "../components/FAQ.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
	return (
		<div className="container-fluid justify-content-around">
			<div className="container FAQContainer">
				<div className="row">
					<div className="col-md-6">
						<h2>Frequently Asked Question</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, omnis.</p>
					</div>
					<div className="col-md-6">
						<div className="col-md-6">
							<Accordion className="BoxAccordion" defaultActiveKey="0">
								<Accordion.Item eventKey="1">
									<Accordion.Header className="JudulAccordion">Apa saja syarat yang dibutuhkan?</Accordion.Header>
									<Accordion.Body className="DescAccordion">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header className="JudulAccordion">Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
									<Accordion.Body className="DescAccordion">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header className="JudulAccordion">Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
									<Accordion.Body className="DescAccordion">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header className="JudulAccordion">Apakah Ada biaya antar-jemput?</Accordion.Header>
									<Accordion.Body className="DescAccordion">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header className="JudulAccordion">Bagaimana jika terjadi kecelakaan</Accordion.Header>
									<Accordion.Body className="DescAccordion">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
