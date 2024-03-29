import { NextRequest } from "next/server";
import logger from "@/logger";
import { Logger } from "pino";

export interface IApiResponse {
  message?: string;
  status: HttpStatus;
  data?: any;
}

export function apiHandler(
  request: NextRequest,
  func: (logger: Logger) => IApiResponse,
): Response {
  var response: IApiResponse = {
    message: HttpStatus[HttpStatus.InternalServerError],
    status: HttpStatus.InternalServerError,
  };

  const prefix = `${request.method} ${request.nextUrl.pathname}`;

  try {
    const result = func(logger);

    response.status = result.status;
    response.data = result.data;
    response.message = `${HttpStatus[response.status]}${
      result.message ? ": " + result.message : ""
    }`;

    logger.info(`${prefix} ${response.message} (${response.status})`);

    return Response.json(response, { status: response.status });
  } catch (error) {
    logger.error(`${prefix} ${response.message} ${error} (${response.status})`);
    return Response.json(response, { status: response.status });
  }
}

export function errorHandler() {}

export enum HttpStatus {
  // Informational
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,

  // Success
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,

  // Redirection
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  // Client Errors
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,

  // Server Errors
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}
