export type method = "GET" | "POST" | "PUT" | "DELETE";

export type URI = `${string}`;

export type ApiError = {
  message: string;
  status: "error";
};

export interface apiInterface {
  URI: URI;
  method: method;
  body?: object;
  isAuthorized: boolean;
}

export interface apiServiceOutput {
  response: Response;
  parsedBody: object;
}
