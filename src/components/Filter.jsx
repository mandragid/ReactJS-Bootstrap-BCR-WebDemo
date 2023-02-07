import React from "react";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

function Filter(props) {
	return (
		<div>
			<div className="middlesection">
				<div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
					<div className="container FormSewa d-flex align-items-center justify-content-center shadow p-5 mb-5 bg-white rounded">
						<div className="row">
							<div className="col-sm-12 col-md-6 col-xl-2 text-center mb-3">
								<p>Nama Mobil</p>

								<Form.Control className="text-center" id="FormControl" type="text" onChange={props.handleChangeName} placeholder="Nama/Jenis Mobil" />
							</div>

							<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
								<p>Kategori</p>
								<DropdownButton id="dropdown-basic-button" title="Masukkan Kapasitas Mobil">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col-sm-12 col-md-6 col-xl-3 text-center mb-3">
								<p>Harga</p>
								<DropdownButton id="dropdown-basic-button" title="Masukkan Harga Sewa/Hari">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>
							<div className="col-sm-12 col-md-6 col-xl-2 text-center mb-3">
								<p>Status</p>
								<DropdownButton id="dropdown-basic-button" title="Disewa/Ready">
									<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
								</DropdownButton>
							</div>

							<Link to={"/hasil-pencarian"}>
								<div className="col-sm-12 col-md-12 col-xl-2 text-center justify-content-center BtnCariMobil">
									<button onClick={props.handleFilter}>Cari Mobil</button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;
