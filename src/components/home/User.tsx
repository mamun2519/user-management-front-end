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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectGender, setSelectGender] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};
  const handlePageChange = (event: string, page: number) => {
    setCurrentPage(page);
  };
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  //   query["sortBy"] = sortBy;
  if (searchTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (selectedValue) {
    query["domain"] = selectedValue;
  }
  if (selectGender) {
    query["gender"] = selectGender;
  }

  console.log(selectedValue);
  const handleCheckboxChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value === selectedValue ? "" : value);
  };
  const handleGenderCheckboxChange = (value: React.SetStateAction<string>) => {
    setSelectGender(value === selectGender ? "" : value);
  };

  const { data } = useAllUserQuery(query);
  console.log(data);
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h3 className="text-center text-3xl ">Our User</h3>
      <div className="  flex gap-4">
        <div className="w-80 border h-full rounded mt-10 sticky p-5">
          {/* <h3 className="text-xl">Search Name</h3> */}
          <div className="mt-2">
            <TextField
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setSearchTerm(e.target.value)}
              fullWidth
              size="small"
              label="Search"
              id="fullWidth"
            />
          </div>

          <div className="mt-4">
            <FormLabel component="legend">Filter By Domain</FormLabel>
            {data?.domain?.map((domain: { title: string }, index: number) => (
              <div key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedValue === domain.title}
                      onChange={() => handleCheckboxChange(domain.title)}
                    />
                  }
                  label={domain.title}
                />
              </div>
            ))}

            {/* <div>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedValue === "Business Development"}
                    onChange={() =>
                      handleCheckboxChange("Business Development")
                    }
                  />
                }
                label="Availability"
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedValue === "male"}
                    onChange={() => handleCheckboxChange("male")}
                  />
                }
                label="Male"
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValue === "female"}
                  onChange={() => handleCheckboxChange("female")}
                />
              }
              label="Female"
            /> */}
            <FormGroup></FormGroup>
          </div>
          <div className="mt-3">
            <FormLabel component="legend">Filter By Gander</FormLabel>
            <div>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectGender === "Male"}
                    onChange={() => handleGenderCheckboxChange("Male")}
                  />
                }
                label="Male"
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectGender === "Female"}
                    onChange={() => handleGenderCheckboxChange("Female")}
                  />
                }
                label="Female"
              />
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-2 gap-5 mt-10">
          {data?.user?.map((user: IUser) => (
            <UserCard key={user?._id} user={user} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <PaginationLink
          page={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default User;
