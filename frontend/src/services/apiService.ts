import { apiInterface, apiServiceOutput, URI } from "./models/apiModels";

export const token: string | null = localStorage.getItem("token") || null;
async function apiCall(props: apiInterface): Promise<apiServiceOutput> {
  const fetchURL = process.env.REACT_APP_BACKEND_BASEURL + props.URI;
  const fetchHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer: ${token}`,
  });
  console.log("tokenrun");

  const fetchParams: RequestInit = {
    method: props.method,
    headers: fetchHeaders,
  };
  if (props.body) {
    fetchParams.body = JSON.stringify(props.body);
  }

  const response = await fetch(fetchURL, { ...fetchParams });
  if (response.status === 401) {
    // localStorage.removeItem("token");
    return Promise.reject("Invalid token.");
  }

  const body = await response.json();

  const data: apiServiceOutput = {
    response: response,
    parsedBody: body,
  };
  return data;
}

export const get = (
  URI: URI,
  isAuthorized: boolean = true
): Promise<apiServiceOutput> => {
  return apiCall({ URI, method: "GET", isAuthorized });
};

export const post = (
  URI: URI,
  body: object,
  isAuthorized: boolean = true
): Promise<apiServiceOutput> => {
  return apiCall({ URI, method: "POST", body, isAuthorized });
};

export const put = (
  URI: URI,
  body: object,
  isAuthorized: boolean = true
): Promise<apiServiceOutput> => {
  return apiCall({ URI, method: "PUT", body, isAuthorized });
};

export const del = (
  URI: URI,
  body: object,
  isAuthorized: boolean = true
): Promise<apiServiceOutput> => {
  return apiCall({ URI, method: "DELETE", body, isAuthorized });
};
