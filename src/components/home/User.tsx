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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const User = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectGender, setSelectGender] = useState("");
  const [selectAvailable, setAvailable] = useState<string | boolean | null>(
    null
  );
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
  if (selectAvailable == true || selectAvailable == false) {
    query["available"] = selectAvailable;
  }

  console.log(selectAvailable);
  const handleCheckboxChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value === selectedValue ? "" : value);
  };
  const handleGenderCheckboxChange = (value: React.SetStateAction<string>) => {
    setSelectGender(value === selectGender ? "" : value);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAvailableCheckboxChange = (value: React.SetStateAction<any>) => {
    console.log(value);
    setAvailable(value === selectAvailable ? null : value);
  };

  const { data } = useAllUserQuery(query);

  return (
    <div className="my-20 max-w-7xl mx-auto lg:px-0 px-4">
      <h3 className="text-center text-3xl ">Our User</h3>

      <div className=" flex justify-end">
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label" className="px-4">
            Limit
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={pageLimit}
            label="Page"
            onChange={(e) => setLimit(e.target.value as number)}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="  lg:flex gap-4 mt-4">
        <div className="lg:w-80 w-full border h-full rounded  sticky p-5 ">
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
          <div className="mt-3">
            <FormLabel component="legend">Filter By Available</FormLabel>
            <div>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectAvailable === true}
                    onChange={() => handleAvailableCheckboxChange(true)}
                  />
                }
                label="Available"
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectAvailable === false}
                    onChange={() => handleAvailableCheckboxChange(false)}
                  />
                }
                label="UnAvailable"
              />
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 ">
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
