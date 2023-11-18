import React from "react";
import { useAllUserQuery } from "../../redux/api/userApi";
import UserCard from "./UserCard";
import { IUser } from "../../interface/user";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";

const User = () => {
  const { data } = useAllUserQuery({});
  console.log(data);
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <h3 className="text-center text-3xl ">Our User</h3>
      <div className="  flex gap-4">
        <div className="w-80 border h-80 rounded mt-10 sticky p-5">
          {/* <h3 className="text-xl">Search Name</h3> */}
          <div className="mt-2">
            <TextField fullWidth size="small" label="Search" id="fullWidth" />
          </div>

          <div className="mt-4">
            <FormLabel component="legend">Filter By</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Domain" />
              <FormControlLabel control={<Checkbox />} label="Availability" />
              <FormControlLabel control={<Checkbox />} label="Male" />
              <FormControlLabel control={<Checkbox />} label="Female" />
            </FormGroup>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-2 gap-5 mt-10">
          {data?.map((user: IUser) => (
            <UserCard key={user?._id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
