import axios from "axios";
import ApiResponse from "./ApiResponse";

const CREATED_201 = 201;
const SERVER_ERROR_500 = 500;

const createGame: () => Promise<ApiResponse<string>> = async () => {
  const url = "/game/create";
  const res = await axios.post(url);

  switch (res.status) {
    case CREATED_201:
      return {
        success: true,
        data: res.data,
      };
    case SERVER_ERROR_500:
      return {
        success: false,
        error: res.data,
      };
    default:
      return {
        success: false,
        error: `Unexpected status code: ${res.status}. Data: ${res.data}`,
      };
  }
};

export default createGame;
