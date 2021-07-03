import { AuthChecker } from "type-graphql";

export interface User {
  id: number;
  name: string;
  roles: string[];
}

export interface Context {
  user?: User;
}

export const CustomAuthChecker: AuthChecker<Context> = ({
  root,
  args,
  context: { user },
  info,
}) => {
  return false;
};
