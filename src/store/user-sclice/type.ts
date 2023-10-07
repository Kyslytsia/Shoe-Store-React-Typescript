import { LoginProps } from "../account-sclice/type";

export interface UserInfoProps extends LoginProps {}
export interface AddUserProps {
  name: string;
  email: string;
  password: string;
}
export interface ChangePassProps {
  email: string;
  password: string;
}
