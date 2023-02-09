import axios from "axios";
import { API } from "../const/endpoint";

export const userAction = (payLoad) => (dispatch) => {
	axios
		.post(API.LOGIN, payLoad)
		.then((ress) => {
			console.log(ress);
			localStorage.setItem("token", ress.data.access_token);
			// Navigate("/admin/dashboard");
			dispatch({
				type: "USER",
				payload: ress.data.email,
			});
			console.log("result", ress);
		})
		.catch((err) => console.log(err.message));
};
