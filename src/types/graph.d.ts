export const typeDefs = ["type CreateTimeTableResponse {\n  isOk: Boolean!\n  error: String\n}\n\ntype Mutation {\n  createTimeTable(userId: Int!, day: Int!, period: Int!): CreateTimeTableResponse!\n  createUser(email: String!, password: String!): CreateUserResponse!\n  login(email: String!, password: String!): LoginResponse!\n}\n\ntype GetTimeTablesResponse {\n  isOk: Boolean!\n  error: String\n  timeTables: [TimeTable]\n}\n\ntype Query {\n  getTimeTables(userId: Int!): GetTimeTablesResponse!\n  getUser(id: Int!): GetUserResponse!\n}\n\ntype TimeTable {\n  id: Int!\n  userId: Int!\n  day: Int!\n  period: Int!\n  user: User!\n}\n\ntype CreateUserResponse {\n  isOk: Boolean!\n  error: String\n  token: String\n}\n\ntype GetUserResponse {\n  isOk: Boolean!\n  error: String\n  user: User\n}\n\ntype LoginResponse {\n  isOk: Boolean!\n  error: String\n  userId: Int\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  password: String\n  timeTables: [TimeTable]\n}\n"];
/* tslint:disable */

export interface Query {
  getTimeTables: GetTimeTablesResponse;
  getUser: GetUserResponse;
}

export interface GetTimeTablesQueryArgs {
  userId: number;
}

export interface GetUserQueryArgs {
  id: number;
}

export interface GetTimeTablesResponse {
  isOk: boolean;
  error: string | null;
  timeTables: Array<TimeTable> | null;
}

export interface TimeTable {
  id: number;
  userId: number;
  day: number;
  period: number;
  user: User;
}

export interface User {
  id: number;
  email: string | null;
  password: string | null;
  timeTables: Array<TimeTable> | null;
}

export interface GetUserResponse {
  isOk: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  createTimeTable: CreateTimeTableResponse;
  createUser: CreateUserResponse;
  login: LoginResponse;
}

export interface CreateTimeTableMutationArgs {
  userId: number;
  day: number;
  period: number;
}

export interface CreateUserMutationArgs {
  email: string;
  password: string;
}

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface CreateTimeTableResponse {
  isOk: boolean;
  error: string | null;
}

export interface CreateUserResponse {
  isOk: boolean;
  error: string | null;
  token: string | null;
}

export interface LoginResponse {
  isOk: boolean;
  error: string | null;
  userId: number | null;
  token: string | null;
}
