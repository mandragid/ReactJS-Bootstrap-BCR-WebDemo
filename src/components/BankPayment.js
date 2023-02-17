import "../components/bankPayment.css";
import LineIcon2 from "../img/icon_line-2.png";
import GreenCheck from "../img/fi_check-2.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBankBCA, handleBankBNI, handleBankMandiri } from "../Redux/bankAction";
import rootReducer from "../Redux";

const BankPayment = () => {
  // const [bankBCA, setBankBCA] = useState(false);
  // const [bankBNI, setBankBNI] = useState(false);
  // const [bankMandiri, setBankMandiri] = useState(false);
  // const [selectedBank, setSelectedBank] = useState(true);
  
  // Pass data to redux 
  const dispatch = useDispatch();
  // Receive data from redux
  const state = useSelector((rootReducer) => rootReducer);
  console.log(state);

    // Previously, remove the chosen bank from local storage when this page refreshed
  // useEffect(() => {
  //   localStorage.removeItem("Bank", selectedBank);
  //   // localStorage.removeItem("BCA", selectedBank);
  //   // localStorage.removeItem("BNI", selectedBank);
  //   // localStorage.removeItem("Mandiri", selectedBank);
  // }, []);

  // Reset bank picked to empty string and all the banks state to false when back to this page or refresh this page
  useEffect(() => {
    state.bankReducer.isBankChosen = "";
    state.bankReducer.isBCA = false;
    state.bankReducer.isBNI = false;
    state.bankReducer.isMandiri = false;
  }, [state]);

  // Handle when specific bank picked
  const onHandleBankBCA = () => {
    dispatch(handleBankBCA());
  };

  const onHandleBankBNI = () => {
    dispatch(handleBankBNI());
  };

  const onHandleBankMandiri = () => {
    dispatch(handleBankMandiri());
  };

    // Previously, tried to set the chosen bank to localStorage when specific bank clicked
  // const handleBCA = () => {
  //   setBankBCA(true);
  //   setBankBNI(false);
  //   setBankMandiri(false);
  //   // setSelectedBank(true);
  //   localStorage.setItem("Bank", "BCA");
  //   // localStorage.removeItem("BNI", selectedBank);
  //   // localStorage.removeItem("Mandiri", selectedBank);
  // };

  // const handleBNI = () => {
  //   setBankBNI(true);
  //   // setSelectedBank(true);
  //   setBankBCA(false);
  //   setBankMandiri(false);
  //   localStorage.setItem("Bank", "BNI");
  //   // localStorage.removeItem("BCA", selectedBank);
  //   // localStorage.removeItem("Mandiri", selectedBank);
  // };

  // const handleMandiri = () => {
  //   setBankMandiri(true);
  //   // setSelectedBank(true);
  //   setBankBCA(false);
  //   setBankBNI(false);
  //   localStorage.setItem("Bank", "Mandiri");
  //   // localStorage.removeItem("BNI", selectedBank);
  //   // localStorage.removeItem("BCA", selectedBank);
  // };

  return (
    <div className="bankPayment-container">
      <div className="heading-container">
        <h1>Pilih Bank Transfer</h1>
      </div>
      <div className="bankPayment-sub-heading-container">
        <h3>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</h3>
      </div>
      <div className="bank-container">
        <div className="bank-name" onClick={onHandleBankBCA}>
          <h6>BCA</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankBCA}>
          <h6>BCA Transfer</h6>
        </div>
        <div className={state.bankReducer.isBCA ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck}></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container">
        <div className="bank-name" onClick={onHandleBankBNI}>
          <h6>BNI</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankBNI}>
          <h6>BNI Transfer</h6>
        </div>
        <div className={state.bankReducer.isBNI ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck}></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
      <div className="bank-container">
        <div className="bank-name" onClick={onHandleBankMandiri}>
          <h6>Mandiri</h6>
        </div>
        <div className="txt-bank-container" onClick={onHandleBankMandiri}>
          <h6>Mandiri Transfer</h6>
        </div>
        <div className={state.bankReducer.isMandiri ? "greenCheck-on" : "greenCheck-off"}>
          <img src={GreenCheck}></img>
        </div>
      </div>
      <div className="iconLine2-container">
        <img src={LineIcon2} alt="line-icon"></img>
      </div>
    </div>
  );
};

export default BankPayment;
