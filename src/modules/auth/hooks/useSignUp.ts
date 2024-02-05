import { API_URL } from "@env"
import axios from "axios";
import { useState } from "react";

export const useSignUp = async (username: string, password: string): Promise<string> => {
  const [status, setStatus] = useState<string>('');

  try {
    await axios.post(`${API_URL}/api/users/`, {
      "username": username,
      "password": password
    })

    setStatus("successful");
  }
  catch(err) {
    setStatus(`error ${err}`)
  }

  return (status)
}