/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  csharp_namespace: "TomTaw.eWordRIS.Proto"
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
  LoginUserResponsePb: {
    fields: {
      userID: {
        type: "string",
        id: 1
      },
      userCode: {
        type: "string",
        id: 2
      },
      hISUserCode: {
        type: "string",
        id: 3
      },
      inPutCode: {
        type: "string",
        id: 4
      },
      userName: {
        type: "string",
        id: 5
      },
      userNameEng: {
        type: "string",
        id: 6
      },
      userPassWord: {
        type: "string",
        id: 7
      },
      userSex: {
        type: "string",
        id: 8
      },
      userSexCH: {
        type: "string",
        id: 9
      },
      userBirthDay: {
        type: "string",
        id: 10
      },
      signatureImage: {
        type: "bytes",
        id: 11
      },
      headPicture: {
        type: "bytes",
        id: 12
      },
      userActivateFlag: {
        type: "bool",
        id: 13
      },
      userActivateFlagCH: {
        type: "string",
        id: 14
      },
      userIDCard: {
        type: "string",
        id: 15
      },
      userPhone: {
        type: "string",
        id: 16
      },
      userDuty: {
        type: "string",
        id: 17
      },
      userType: {
        type: "string",
        id: 18
      },
      userTypeCH: {
        type: "string",
        id: 19
      },
      accountType: {
        type: "string",
        id: 20
      },
      accountTypeCH: {
        type: "string",
        id: 21
      },
      effectivDate: {
        type: "string",
        id: 22
      },
      expiryDate: {
        type: "string",
        id: 23
      },
      createDate: {
        type: "string",
        id: 24
      },
      observationDeptID: {
        type: "string",
        id: 25
      },
      organizationID: {
        type: "string",
        id: 26
      },
      deletedFlag: {
        type: "bool",
        id: 27
      },
      deletedFlagCH: {
        type: "string",
        id: 28
      },
      sortNo: {
        type: "int32",
        id: 29
      },
      userPermissions: {
        rule: "repeated",
        type: "LoginUserPermissionResponsePb",
        id: 30
      }
    }
  },
  LoginUserPermissionResponsePb: {
    fields: {
      userGroupID: {
        type: "string",
        id: 1
      },
      userGroupCode: {
        type: "string",
        id: 2
      },
      userGroupName: {
        type: "string",
        id: 3
      },
      userGroupEmail: {
        type: "string",
        id: 4
      },
      permissionID: {
        type: "string",
        id: 5
      },
      permissionCode: {
        type: "string",
        id: 6
      },
      permissionName: {
        type: "string",
        id: 7
      },
      permissionType: {
        type: "string",
        id: 8
      },
      permissionTypeCH: {
        type: "string",
        id: 9
      },
      parentPermissionID: {
        type: "string",
        id: 10
      },
      rootFlag: {
        type: "bool",
        id: 11
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
  PageResponsePb: {
    fields: {
      isSuccess: {
        type: "bool",
        id: 1
      },
      resultDesc: {
        type: "string",
        id: 2
      },
      data: {
        rule: "repeated",
        type: "google.protobuf.Any",
        id: 3
      },
      pageBase: {
        type: "PageBase",
        id: 4
      },
      token: {
        type: "string",
        id: 5
      }
    }
  },
  PageBase: {
    fields: {
      currentPage: {
        type: "int32",
        id: 1
      },
      pageSize: {
        type: "int32",
        id: 2
      },
      totalRecords: {
        type: "int32",
        id: 3
      }
    }
  },
  PermissionRequestPb: {
    fields: {
      permissionID: {
        type: "string",
        id: 1
      },
      permissionCode: {
        type: "string",
        id: 2
      },
      permissionName: {
        type: "string",
        id: 3
      },
      permissionType: {
        type: "string",
        id: 4
      },
      parentPermissionID: {
        type: "string",
        id: 5
      },
      rootFlag: {
        type: "bool",
        id: 6
      },
      relatedAttribute: {
        type: "string",
        id: 7
      },
      sortNo: {
        type: "int32",
        id: 8
      },
      currentPage: {
        type: "int32",
        id: 9
      },
      pageSize: {
        type: "int32",
        id: 10
      }
    }
  },
  PermissionResponsePb: {
    fields: {
      permissionID: {
        type: "string",
        id: 1
      },
      permissionCode: {
        type: "string",
        id: 2
      },
      permissionName: {
        type: "string",
        id: 3
      },
      permissionType: {
        type: "string",
        id: 4
      },
      parentPermissionID: {
        type: "string",
        id: 5
      },
      rootFlag: {
        type: "bool",
        id: 6
      },
      relatedAttribute: {
        type: "string",
        id: 7
      },
      sortNo: {
        type: "int32",
        id: 8
      },
      currentPage: {
        type: "int32",
        id: 9
      },
      pageSize: {
        type: "int32",
        id: 10
      },
      children: {
        rule: "repeated",
        type: "PermissionResponsePb",
        id: 11
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
  },
  UserGroupLinkRequestPb: {
    fields: {
      LinkID: {
        type: "string",
        id: 1
      },
      UserGroupID: {
        type: "string",
        id: 2
      },
      UserID: {
        rule: "repeated",
        type: "string",
        id: 3
      }
    }
  },
  UserGroupPermissionLinkRequestPb: {
    fields: {
      LinkID: {
        type: "string",
        id: 1
      },
      UserGroupID: {
        type: "string",
        id: 2
      },
      PermissionID: {
        rule: "repeated",
        type: "string",
        id: 3
      }
    }
  },
  UserGroupRequestPb: {
    fields: {
      userGroupID: {
        type: "string",
        id: 1
      },
      userGroupCode: {
        type: "string",
        id: 2
      },
      userGroupName: {
        type: "string",
        id: 3
      },
      userGroupEmail: {
        type: "string",
        id: 4
      },
      description: {
        type: "string",
        id: 5
      },
      observationDeptID: {
        type: "string",
        id: 6
      },
      organizationID: {
        type: "string",
        id: 7
      },
      deletedFlag: {
        type: "bool",
        id: 8
      },
      currentPage: {
        type: "int32",
        id: 9
      },
      pageSize: {
        type: "int32",
        id: 10
      }
    }
  },
  UserGroupResponsePb: {
    fields: {
      userGroupID: {
        type: "string",
        id: 1
      },
      userGroupCode: {
        type: "string",
        id: 2
      },
      userGroupName: {
        type: "string",
        id: 3
      },
      userGroupEmail: {
        type: "string",
        id: 4
      },
      description: {
        type: "string",
        id: 5
      },
      observationDeptID: {
        type: "string",
        id: 6
      },
      organizationID: {
        type: "string",
        id: 7
      },
      deletedFlag: {
        type: "bool",
        id: 8
      },
      currentPage: {
        type: "int32",
        id: 9
      },
      pageSize: {
        type: "int32",
        id: 10
      },
      LinkID: {
        type: "string",
        id: 11
      },
      PermissionID: {
        rule: "repeated",
        type: "string",
        id: 12
      },
      UserID: {
        rule: "repeated",
        type: "string",
        id: 13
      }
    }
  },
  UserListRequestPb: {
    fields: {
      users: {
        rule: "repeated",
        type: "UserRequestPb",
        id: 1
      }
    }
  },
  UserRequestPb: {
    fields: {
      userID: {
        type: "string",
        id: 1
      },
      userCode: {
        type: "string",
        id: 2
      },
      hISUserCode: {
        type: "string",
        id: 3
      },
      inPutCode: {
        type: "string",
        id: 4
      },
      userName: {
        type: "string",
        id: 5
      },
      userNameEng: {
        type: "string",
        id: 6
      },
      userPassWord: {
        type: "string",
        id: 7
      },
      userSex: {
        type: "string",
        id: 8
      },
      userBirthDay: {
        type: "string",
        id: 9
      },
      signatureImage: {
        type: "bytes",
        id: 10
      },
      headPicture: {
        type: "bytes",
        id: 11
      },
      userActivateFlag: {
        type: "bool",
        id: 12
      },
      userIDCard: {
        type: "string",
        id: 13
      },
      userPhone: {
        type: "string",
        id: 14
      },
      userDuty: {
        type: "string",
        id: 15
      },
      userType: {
        type: "string",
        id: 16
      },
      accountType: {
        type: "string",
        id: 17
      },
      effectivDate: {
        type: "string",
        id: 18
      },
      expiryDate: {
        type: "string",
        id: 19
      },
      createDate: {
        type: "string",
        id: 20
      },
      observationDeptID: {
        type: "string",
        id: 21
      },
      organizationID: {
        type: "string",
        id: 22
      },
      deletedFlag: {
        type: "bool",
        id: 23
      },
      sortNo: {
        type: "int32",
        id: 24
      },
      currentPage: {
        type: "int32",
        id: 25
      },
      pageSize: {
        type: "int32",
        id: 26
      },
      newPassword: {
        type: "string",
        id: 27
      },
      roamingSourceUserID: {
        type: "string",
        id: 28
      },
      roamingSourceOrgID: {
        type: "string",
        id: 29
      },
      roamingSourceDeptID: {
        type: "string",
        id: 30
      }
    }
  },
  UserPermissionLinkRequestPb: {
    fields: {
      linkID: {
        type: "string",
        id: 1
      },
      userID: {
        type: "string",
        id: 2
      },
      permissionID: {
        rule: "repeated",
        type: "string",
        id: 3
      }
    }
  },
  UserResponsePb: {
    fields: {
      userID: {
        type: "string",
        id: 1
      },
      userCode: {
        type: "string",
        id: 2
      },
      hISUserCode: {
        type: "string",
        id: 3
      },
      inPutCode: {
        type: "string",
        id: 4
      },
      userName: {
        type: "string",
        id: 5
      },
      userNameEng: {
        type: "string",
        id: 6
      },
      userPassWord: {
        type: "string",
        id: 7
      },
      userSex: {
        type: "string",
        id: 8
      },
      userSexCH: {
        type: "string",
        id: 9
      },
      userBirthDay: {
        type: "string",
        id: 10
      },
      signatureImage: {
        type: "bytes",
        id: 11
      },
      headPicture: {
        type: "bytes",
        id: 12
      },
      userActivateFlag: {
        type: "bool",
        id: 13
      },
      userActivateFlagCH: {
        type: "string",
        id: 14
      },
      userIDCard: {
        type: "string",
        id: 15
      },
      userPhone: {
        type: "string",
        id: 16
      },
      userDuty: {
        type: "string",
        id: 17
      },
      userType: {
        type: "string",
        id: 18
      },
      userTypeCH: {
        type: "string",
        id: 19
      },
      accountType: {
        type: "string",
        id: 20
      },
      accountTypeCH: {
        type: "string",
        id: 21
      },
      effectivDate: {
        type: "string",
        id: 22
      },
      expiryDate: {
        type: "string",
        id: 23
      },
      createDate: {
        type: "string",
        id: 24
      },
      observationDeptID: {
        type: "string",
        id: 25
      },
      organizationID: {
        type: "string",
        id: 26
      },
      deletedFlag: {
        type: "bool",
        id: 27
      },
      deletedFlagCH: {
        type: "string",
        id: 28
      },
      sortNo: {
        type: "int32",
        id: 29
      },
      currentPage: {
        type: "int32",
        id: 30
      },
      pageSize: {
        type: "int32",
        id: 31
      },
      userGroupID: {
        type: "string",
        id: 32
      },
      userGroupCode: {
        type: "string",
        id: 33
      },
      userGroupName: {
        type: "string",
        id: 34
      },
      userGroupEmail: {
        type: "string",
        id: 35
      },
      permissionID: {
        type: "string",
        id: 36
      },
      permissionCode: {
        type: "string",
        id: 37
      },
      permissionName: {
        type: "string",
        id: 38
      },
      permissionType: {
        type: "string",
        id: 39
      },
      permissionTypeCH: {
        type: "string",
        id: 40
      },
      parentPermissionID: {
        type: "string",
        id: 41
      },
      rootFlag: {
        type: "bool",
        id: 42
      },
      roamingSourceUserID: {
        type: "string",
        id: 43
      },
      roamingSourceOrgID: {
        type: "string",
        id: 44
      },
      roamingSourceDeptID: {
        type: "string",
        id: 45
      }
    }
  },
  ViUserGroupRequestPb: {
    fields: {
      userID: {
        type: "string",
        id: 1
      },
      userCode: {
        type: "string",
        id: 2
      },
      hISUserCode: {
        type: "string",
        id: 3
      },
      inputCode: {
        type: "string",
        id: 4
      },
      userName: {
        type: "string",
        id: 5
      },
      userNameEng: {
        type: "string",
        id: 6
      },
      userSex: {
        type: "string",
        id: 7
      },
      userBirthDay: {
        type: "string",
        id: 8
      },
      userActivateFlag: {
        type: "bool",
        id: 9
      },
      userIDCard: {
        type: "string",
        id: 10
      },
      userPhone: {
        type: "string",
        id: 11
      },
      userDuty: {
        type: "string",
        id: 12
      },
      userType: {
        type: "string",
        id: 13
      },
      accountType: {
        type: "string",
        id: 14
      },
      effectivDate: {
        type: "string",
        id: 15
      },
      expiryDate: {
        type: "string",
        id: 16
      },
      createDate: {
        type: "string",
        id: 17
      },
      observationDeptID: {
        type: "string",
        id: 18
      },
      organizationID: {
        type: "string",
        id: 19
      },
      deletedFlag: {
        type: "bool",
        id: 20
      },
      sortNo: {
        type: "int32",
        id: 21
      },
      userGroupID: {
        type: "string",
        id: 22
      },
      userGroupCode: {
        type: "string",
        id: 23
      },
      userGroupName: {
        type: "string",
        id: 24
      },
      userGroupEmail: {
        type: "string",
        id: 25
      },
      currentPage: {
        type: "int32",
        id: 26
      },
      pageSize: {
        type: "int32",
        id: 27
      },
      roamingSourceUserID: {
        type: "string",
        id: 28
      },
      roamingSourceOrgID: {
        type: "string",
        id: 29
      },
      roamingSourceDeptID: {
        type: "string",
        id: 30
      }
    }
  },
  ViUserPermissionRequestPb: {
    fields: {
      userID: {
        type: "string",
        id: 1
      },
      userCode: {
        type: "string",
        id: 2
      },
      hISUserCode: {
        type: "string",
        id: 3
      },
      inputCode: {
        type: "string",
        id: 4
      },
      userName: {
        type: "string",
        id: 5
      },
      userNameEng: {
        type: "string",
        id: 6
      },
      userSex: {
        type: "string",
        id: 7
      },
      userBirthDay: {
        type: "string",
        id: 8
      },
      userActivateFlag: {
        type: "bool",
        id: 9
      },
      userIDCard: {
        type: "string",
        id: 10
      },
      userPhone: {
        type: "string",
        id: 11
      },
      userDuty: {
        type: "string",
        id: 12
      },
      userType: {
        type: "string",
        id: 13
      },
      accountType: {
        type: "string",
        id: 14
      },
      effectivDate: {
        type: "string",
        id: 15
      },
      expiryDate: {
        type: "string",
        id: 16
      },
      createDate: {
        type: "string",
        id: 17
      },
      observationDeptID: {
        type: "string",
        id: 18
      },
      organizationID: {
        type: "string",
        id: 19
      },
      deletedFlag: {
        type: "bool",
        id: 20
      },
      sortNo: {
        type: "int32",
        id: 21
      },
      userGroupID: {
        type: "string",
        id: 22
      },
      userGroupCode: {
        type: "string",
        id: 23
      },
      userGroupName: {
        type: "string",
        id: 24
      },
      userGroupEmail: {
        type: "string",
        id: 25
      },
      permissionID: {
        type: "string",
        id: 26
      },
      permissionCode: {
        type: "string",
        id: 27
      },
      permissionName: {
        type: "string",
        id: 28
      },
      permissionType: {
        type: "string",
        id: 29
      },
      parentPermissionID: {
        type: "string",
        id: 30
      },
      rootFlag: {
        type: "string",
        id: 31
      },
      currentPage: {
        type: "int32",
        id: 32
      },
      pageSize: {
        type: "int32",
        id: 33
      },
      roamingSourceUserID: {
        type: "string",
        id: 34
      },
      roamingSourceOrgID: {
        type: "string",
        id: 35
      },
      roamingSourceDeptID: {
        type: "string",
        id: 36
      }
    }
  }
});

module.exports = $root;
