export class NetworkError extends Error {
  constructor(message = "Unable to reach the server. Please check your connection."){
    super(message)
    this.name = "NetworkError";
  }
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status:number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}