//# DEPENDENCYS
import { gql } from "apollo-server";

//## RESOLVERS
//# IMPORT USER
import R_User from "./User/resolvers";

//# EXTENDS QUERYS && MUTATIONS
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

//## SCHEMAS | TYPEDEFS
import T_User from "./User/schema";

//# EXPORT THE ALL RESOLVERS
export const resolvers = [R_User];

//# EXPORT THE ALL TYPEDEFS
export const typeDefs = [linkSchema, T_User];
