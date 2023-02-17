import "../components/paymentConfirmation.css";
import dropzonePreview from "../img/dropzone-preview.png";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: 300,
  height: 163,
  padding: 0,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 300,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const PaymentConfirmation = (props) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  console.log(files);

  // To delete selected image
  // const deleteFile = () => {
  //   setFiles([]);
  // };

  // To show the dropzone
  const handlePaymentConfirmed = () => {
    setPaymentConfirmed(true);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    // return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <div className="paymentConfirmation-container">
      <div className="btn-paymentConfirmation">
        {/* Anonymous function */}
        {(() => {
          if (paymentConfirmed === true) {
            return (
              <div className="payment-confirmed-container">
                <div className="uploadPaymentProofDeadline-container">
                  <div className="firstHeading-uploadPaymentProofDeadline">
                    <h1>Konfirmasi Pembayaran</h1>
                  </div>
                  <div className="deadline-uploadPaymentProofDeadline">
                    <h5>12 : 12</h5>
                  </div>
                </div>
                <div className="firstP-uploadPaymentProofDeadline">
                  <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                </div>
                <div className="secondHeading-uploadPaymentProofDeadline">
                  <h1>Upload Bukti Pembayaran</h1>
                </div>
                <div className="secondP-uploadPaymentProofDeadline">
                  <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                </div>
                <section className="container dropzone-outer-container">
                  <div className="dropzone-inner-container">
                    <div {...getRootProps({ className: "dropzone dropzone-upload-container" })}>
                      <input {...getInputProps()} />
                      <img src={dropzonePreview}></img>
                      <div className="select-image-dropzone">
                        <button>Click or Drop Here</button>
                      </div>
                    </div>
                    <aside style={thumbsContainer}>{thumbs}</aside>
                  </div>
                  <div className="btn-upload-paymentConfirmation">
                    <button>Upload</button>
                  </div>
                </section>
              </div>
            );
          } else {
            return (
              <div className="payment-unconfirmed-container">
                <div className="txt-paymentConfirmation">
                  <h1>Klik Konfirmasi Pembayaran untuk mempercepat proses pengecekan</h1>
                </div>
                <button onClick={handlePaymentConfirmed}>Konfirmasi Pembayaran</button>{" "}
              </div>
            );
          }
        })()}
      </div>
      {/* <div className="uploadPaymentProofDeadline-container">
        <div className="firstHeading-uploadPaymentProofDeadline">
          <h1>Konfirmasi Pembayaran</h1>
        </div>
        <div className="deadline-uploadPaymentProofDeadline">
          <h5>12 : 12</h5>
        </div>
      </div>
      <div className="firstP-uploadPaymentProofDeadline">
        <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
      </div>
      <div className="secondHeading-uploadPaymentProofDeadline">
        <h1>Upload Bukti Pembayaran</h1>
      </div>
      <div className="secondP-uploadPaymentProofDeadline">
        <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
      </div> */}

      {/* <section className="container dropzone-outer-container">
        <div className="dropzone-inner-container">
          <div {...getRootProps({ className: "dropzone dropzone-upload-container" })}>
            <input {...getInputProps()} />
            <img src={dropzonePreview}></img>
            <div className="select-image-dropzone">
              <button>Click or Drop Here</button>
            </div>
          </div>
          <aside style={thumbsContainer}>{thumbs}</aside>
        </div>
        <div className="btn-upload-paymentConfirmation">
          <button >Upload</button>
        </div>
      </section> */}
    </div>
  );
};

export default PaymentConfirmation;

// position: "relative",
//   bottom: 255,
//   left: 20,
