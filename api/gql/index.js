//# DEPENDENCYS
import { gql } from "apollo-server";

//## RESOLVERS
//# IMPORT USER
import R_User from "./User/resolvers";
import R_Operator from "./Operator/resolvers";

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
import T_Operator from "./Operator/schema";

//# EXPORT THE ALL RESOLVERS
export const resolvers = [R_User, R_Operator];

//# EXPORT THE ALL TYPEDEFS
export const typeDefs = [linkSchema, T_User, T_Operator];
