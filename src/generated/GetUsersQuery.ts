/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsersQuery
// ====================================================

export interface GetUsersQuery_getUsers {
  __typename: "User";
  id: string;
  name: string;
  email: string;
}

export interface GetUsersQuery {
  getUsers: GetUsersQuery_getUsers[];
}
