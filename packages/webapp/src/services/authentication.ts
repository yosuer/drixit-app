import axios from "axios";

const apiHost = process.env.REACT_APP_API_HOST;

export const getLoggedUser = async (): Promise<any> => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const { data } = await axios.get(`${apiHost}/users/me`, {
        headers: { authorization: token },
      });
      return data;
    }
    return null;
  } catch (err) {
    console.error("getLoggedUser error", err);
    return null;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await axios.post(`${apiHost}/login`, {
      email,
      password,
    });
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      return getLoggedUser();
    }
    return null;
  } catch (err) {
    console.error("loginUser error", err);
    return null;
  }
};
