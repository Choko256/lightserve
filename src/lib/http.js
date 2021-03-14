const codes = {
  CONTINUE : {
    code : 100,
    label : 'Continue',
  },
  SWITCHING_PROTOCOLS : {
    code : 101,
    label : 'Switching Protocols',
  },
  PROCESSING : {
    code : 102,
    label : 'Processing',
  },
  EARLY_HINTS : {
    code : 103,
    label : 'Early Hints',
  },
  OK : {
    code : 200,
    label : 'OK',
  },
  CREATED : {
    code : 201,
    label : 'Created',
  },
  ACCEPTED : {
    code : 202,
    label : 'Accepted',
  },
  NON_AUTHORITATIVE_INFORMATION : {
    code : 203,
    label : 'Non Authoritative Information',
  },
  NO_CONTENT : {
    code : 204,
    label : 'No Content',
  },
  RESET_CONTENT : {
    code : 205,
    label : 'Reset Content',
  },
  PARTIAL_CONTENT : {
    code : 206,
    label : 'Partial Content',
  },
  MULTI_STATUS : {
    code : 207,
    label : 'Multi Status',
  },
  ALREADY_REPORTED : {
    code : 208,
    label : 'Already Reported',
  },
  CONTENT_DIFFERENT : {
    code : 210,
    label : 'Content Different',
  },
  IM_USED : {
    code : 226,
    label : 'IM Used',
  },
  MULTIPLE_CHOICES : {
    code : 300,
    label : 'Multiple Choices',
  },
  MOVED_PERMANENTLY : {
    code : 301,
    label : 'Moved Permanently',
  },
  FOUND : {
    code : 302,
    label : 'Found',
  },
  SEE_OTHER : {
    code : 303,
    label : 'See Other',
  },
  NOT_MODIFIED : {
    code : 304,
    label : 'Not Modified',
  },
  USE_PROXY : {
    code : 305,
    label : 'Use Proxy',
  },
  SWITCH_PROXY : {
    code : 306,
    label : 'Switch Proxy',
  },
  TEMPORARY_REDIRECT : {
    code : 307,
    label : 'Temporary Redirect',
  },
  PERMANENT_REDIRECT : {
    code : 308,
    label : 'Permanent Redirect',
  },
  TOO_MANY_REDIRECTS : {
    code : 310,
    label : 'Too Many Redirects',
  },
  BAD_REQUEST : {
    code : 400,
    label : 'Bad Request',
  },
  UNAUTHORIZED : {
    code : 401,
    label : 'Unauthorized',
  },
  PAYMENT_REQUIRED : {
    code : 402,
    label : 'Payment Required',
  },
  FORBIDDEN : {
    code : 403,
    label : 'Forbidden',
  },
  NOT_FOUND : {
    code : 404,
    label : 'Not Found',
  },
  METHOD_NOT_ALLOWED : {
    code : 405,
    label : 'Method Not Allowed',
  },
  NOT_ACCEPTABLE : {
    code : 406,
    label : 'Not Acceptable',
  },
  PROXY_AUTHENTICATION_REQUIRED : {
    code : 407,
    label : 'Proxy Authentication Required',
  },
  REQUEST_TIME_OUT : {
    code : 408,
    label : 'Request Time Out',
  },
  CONFLICT : {
    code : 409,
    label : 'Conflict',
  },
  GONE : {
    code : 410,
    label : 'Gone',
  },
  LENGTH_REQUIRED : {
    code : 411,
    label : 'Length Required',
  },
  PRECONDITION_FAILED : {
    code : 412,
    label : 'Precondition Failed',
  },
  REQUEST_ENTITY_TOO_LARGE : {
    code : 413,
    label : 'Request Entity Too Large',
  },
  REQUEST_URI_TOO_LONG : {
    code : 414,
    label : 'Request URI Too Long',
  },
  UNSUPPORTED_MEDIA_TYPE : {
    code : 415,
    label : 'Unsupported Media Type',
  },
  REQUESTED_RANGE_UNSATISFIABLE : {
    code : 416,
    label : 'Request Range Unsatisfiable',
  },
  EXPECTATION_FAILED : {
    code : 417,
    label : 'Expectation Failed',
  },
  I_M_A_TEAPOT : {
    code : 418,
    label : 'I am a Teapot',
  },
  BAD_MAPPING : {
    code : 421,
    label : 'Bad Mapping',
  },
  UNPROCESSABLE_ENTITY : {
    code : 422,
    label : 'Unprocessable Entity',
  },
  LOCKED : {
    code : 423,
    label : 'Locked',
  },
  METHOD_FAILURE : {
    code : 424,
    label : 'Method Failure',
  },
  TOO_EARLY : {
    code : 425,
    label : 'Too Early',
  },
  UPGRADE_REQUIRED : {
    code : 426,
    label : 'Upgrade Required',
  },
  PRECONDITION_REQUIRED : {
    code : 428,
    label : 'Precondition Required',
  },
  TOO_MANY_REQUESTS : {
    code : 429,
    label : 'Too Many Requests',
  },
  REQUEST_HEADER_FIELDS_TOO_LARGE : {
    code : 431,
    label : 'Request Header Fields Too Large',
  },
  RETRY_WITH : {
    code : 449,
    label : 'Retry With',
  },
  BLOCKED_BY_PARENTAL_CONTROLS : {
    code : 450,
    label : 'Blocked By Parental Controls',
  },
  UNAVAILABLE_FOR_LEGAL_REASONS : {
    code : 451,
    label : 'Unavailable For Legal Reasons',
  },
  UNRECOVERABLE_ERROR : {
    code : 456,
    label : 'Unrecoverable Error',
  },
  INTERNAL_SERVER_ERROR : {
    code : 500,
    label : 'Internal Server Error',
  },
  NOT_IMPLEMENTED : {
    code : 501,
    label : 'Not Implemented',
  },
  BAD_GATEWAY : {
    code : 502,
    label : 'Bad Gateway',
  },
  SERVICE_UNAVAILABLE : {
    code : 503,
    label : 'Service Unavailable',
  },
  GATEWAY_TIME_OUT : {
    code : 504,
    label : 'Gateway Time Out',
  },
  HTTP_VERSION_NOT_IMPLEMENTED : {
    code : 505,
    label : 'HTTP Version Not Implemented',
  },
  VARIANT_ALSO_NEGOTIATES : {
    code : 506,
    label : 'Variant Also Negotiates',
  },
  INSUFFICIENT_STORAGE : {
    code : 507,
    label : 'Insufficient Storage',
  },
  LOOP_DETECTED : {
    code : 508,
    label : 'Loop Detected',
  },
  BANDWIDTH_LIMIT_EXCEEDED : {
    code : 509,
    label : 'Bandwidth Limit Exceeded',
  },
  NOT_EXTENDED : {
    code : 510,
    label : 'Not Extended',
  },
  NETWORK_AUTHENTICATION_REQUIRED : {
    code : 511,
    label : 'Network Authentication Required',
  },
  UNKNOWN_ERROR : {
    code : 520,
    label : 'Unknown Error',
  },
  WEB_SERVER_IS_DOWN : {
    code : 521,
    label : 'Web Server Is Down',
  },
  CONNECTION_TIMED_OUT : {
    code : 522,
    label : 'Connection Timed Out',
  },
  ORIGIN_IS_UNREACHABLE : {
    code : 523,
    label : 'Origin Is Unreachable',
  },
  TIMEOUT_OCCURED : {
    code : 524,
    label : 'Timeout Occured',
  },
  SSL_HANDSHAKE_FAILED : {
    code : 525,
    label : 'SSL Handshake Failed',
  },
  INVALID_SSL_CERTIFICATE : {
    code : 526,
    label : 'Invalid SSL Certificate',
  },
  RAILGUN_ERROR : {
    code : 527,
    label : 'Railgun Error',
  },
}

module.exports = { codes }
