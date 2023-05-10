import { useState, useCallback } from "react";
import { notification } from "antd";
import baseURL from "@/app/constants/baseURL";
import "@/app/styles/antdOverrides.css";
import NProgress from 'nprogress'

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const clearError = () => {
    setError(null);
  };

  const sendRequest = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    ) => {
      clearError();
      setIsLoading(true);
      NProgress.start()
      try {
        const response = await fetch(`${baseURL}${url}`, {
          method,
          body,
          headers,
          credentials: "include"
        });
        // console.log(response)
        const responseData = await response.json();
        // console.log(responseData);
        if (!responseData.success) {
          console.log(responseData)
          throw new Error(responseData.data.error);
        }
        setIsLoading(false);
        NProgress.done();
        return responseData.data;
      } catch (err) {
        console.log(err)
        setError(err.message);
        setIsLoading(false);
        NProgress.done();
        notification.error({
          message: "Error",
          description: err.message,
          placement: "top",
          // duration: null,
          className: "error-notification"
        });
        throw err;
      }
    },
    []
  );

  return { isLoading, error, sendRequest, clearError };
};
