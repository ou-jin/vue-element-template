/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  csharp_namespace: "probofu.Controllers"
})
.addJSON({
  BaseResponse: {
    fields: {
      IsSuccess: {
        type: "bool",
        id: 1
      },
      Message: {
        type: "string",
        id: 2
      },
      Token: {
        type: "string",
        id: 3
      },
      data: {
        type: "google.protobuf.Any",
        id: 4
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        }
      }
    }
  },
  PageResponse: {
    fields: {
      IsSuccess: {
        type: "bool",
        id: 1
      },
      Message: {
        type: "string",
        id: 2
      },
      Token: {
        type: "string",
        id: 3
      },
      CurrentPage: {
        type: "int32",
        id: 4
      },
      PageSize: {
        type: "int32",
        id: 5
      },
      TotalRecords: {
        type: "int32",
        id: 6
      },
      data: {
        rule: "repeated",
        type: "google.protobuf.Any",
        id: 7
      }
    }
  },
  Person: {
    fields: {
      Id: {
        type: "int32",
        id: 1
      },
      Name: {
        type: "string",
        id: 2
      },
      Address: {
        type: "Address",
        id: 3
      }
    }
  },
  Address: {
    fields: {
      Line1: {
        type: "string",
        id: 1
      },
      Line2: {
        type: "string",
        id: 2
      }
    }
  }
});

module.exports = $root;
