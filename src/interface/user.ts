export type IUser = {
  _id: string;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female" | "Others";
  avatar: string;
  email: string;
  domain: string;
  password: string;
  available: boolean;
};
