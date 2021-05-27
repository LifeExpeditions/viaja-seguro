//# DEPENDENCYS
import { gql } from "apollo-server";

export default gql`
  # MUTATIONS => USER
  extend type Mutation {
    uploadData: Boolean
  }
`;
