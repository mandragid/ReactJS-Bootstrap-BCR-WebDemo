import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Filter(props) {
  return (
    <div>
      <div className="middlesection">
        <div className="container-fluid d-flex justify-content-center align-items-center ContainerFormSewa">
          <div className="container d-flex align-items-center justify-content-center shadow p-5 mb-5 rounded">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-xl-2 col-xxl-2 text-center mb-3">
                <p>Nama Mobil</p>

                <Form.Control
                  className="text-center"
                  id="FormControl"
                  type="text"
                  onChange={props.handleChangeName}
                  placeholder="Nama/Jenis Mobil"
                />
              </div>

              <div className="col-sm-12 col-md-6 col-xl-3 col-xxl-3 text-center mb-3">
                <p>Kategori / Ukuran</p>
                <Form.Select
                  aria-label="Default select example"
                  onChange={props.handleChangeCategory}
                >
                  <option value="">Pilih Salah Satu</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Form.Select>
              </div>

              <div className="col-sm-12 col-md-6 col-xl-3 col-xxl-3 text-center mb-3">
                <p>Range Harga</p>
                <Form.Select
                  aria-label="Masukkan Harga Sewa"
                  onChange={props.handlePrice}
                >
                  <option value="">Pilih Salah Satu</option>
                  <option value="400000">Rp. 400.000</option>
                  <option value="600000">Rp. 400.000 - Rp. 600.000</option>
                  <option value="1000000">Rp. 400.000 - Rp. 700.000 </option>
                </Form.Select>
              </div>

              <div className="col-sm-12 col-md-6 col-xl-2 col-xxl-2 text-center mb-3">
                <p>Status Mobil</p>
                <Form.Select
                  aria-label="Status Mobil"
                  onChange={props.handleStatus}
                >
                  <option value="">Pilih Salah Satu</option>
                  <option value="true">Disewa</option>
                  <option value="false">Ready</option>
                </Form.Select>
              </div>

              <div className="col-sm-12 col-md-12 col-xl-2 col-xxl-2 justify-content-center text-center mt-3">
                {" "}
                <Link to={"/hasil-pencarian"}>
                  {" "}
                  <Button variant="success" onClick={props.handleFilter}>
                    Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
