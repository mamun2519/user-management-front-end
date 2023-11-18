import React, { useState } from "react";
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
import PaginationLink from "../ui/Pagination";

const User = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleCheckboxChange = (value) => {
    console.log(value);
    setSelectedValue(value === selectedValue ? "" : value);
  };
  console.log(selectedValue);
  const { data } = useAllUserQuery({});
  console.log(data);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h3 className="text-center text-3xl ">Our User</h3>
      <div className="  flex gap-4">
        <div className="w-80 border h-80 rounded mt-10 sticky p-5">
          {/* <h3 className="text-xl">Search Name</h3> */}
          <div className="mt-2">
            <TextField fullWidth size="small" label="Search" id="fullWidth" />
          </div>

          <div className="mt-4">
            <FormLabel component="legend">Filter By</FormLabel>

            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValue === "Domain"}
                  onChange={() => handleCheckboxChange("Domain")}
                />
              }
              label="Domain"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValue === "Availability"}
                  onChange={() => handleCheckboxChange("Availability")}
                />
              }
              label="Availability"
            />
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedValue === "Male"}
                    onChange={() => handleCheckboxChange("Male")}
                  />
                }
                label="Male"
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValue === "Female"}
                  onChange={() => handleCheckboxChange("Female")}
                />
              }
              label="Female"
            />
            <FormGroup></FormGroup>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-2 gap-5 mt-10">
          {data?.map((user: IUser) => (
            <UserCard key={user?._id} user={user} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <PaginationLink />
      </div>
    </div>
  );
};

export default User;
