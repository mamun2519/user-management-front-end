import { FormLabel, TextField } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingupSchema } from "../../schema/user";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/slice/userSlice";
import { storeUserInfo } from "../../service/user.services";

const Reg = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingupSchema),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [registerUser] = useRegisterUserMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
    if (data.available) {
      data.available = true;
    } else {
      data.available = false;
    }
    try {
      const res = await registerUser(data).unwrap();
      if (res.accessToken) {
        toast("Login Successfully");
        navigate("/");
        dispatch(
          setUser({
            userId: res?.user?._id,
            email: res?.user?.email,
          })
        );
      }
      storeUserInfo({ accessToken: res?.accessToken });
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error?.data);
      console.log(error);
    }
  };

  return (
    <div className=" h-screen max-w-7xl mx-auto flex justify-center items-center lg:px-0 px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-[450px] h-[630px] border rounded-2xl shadow p-5">
          <div className="text-center flex justify-center">
            <div>
              <p className="text-2xl uppercase">Register Now</p>
              {errorMessage && (
                <div className="bg-red-500 h-12 rounded mt-2 flex  items-center px-4">
                  <p className="text-white">{errorMessage}</p>
                </div>
              )}
              <div className="h-2 bg-red-500 w-96 mt-1 flex justify-center"></div>
            </div>
          </div>
          <div className=" flex gap-2">
            <div className="mt-5">
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="first Name"
                    placeholder="Enter Your Password"
                    error={!!errors.first_name}
                    helperText={errors.first_name?.message as string}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    error={!!errors.last_name}
                    helperText={errors.last_name?.message as string}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className=" flex gap-2">
            <div className="mt-3">
              <FormControl sx={{ minWidth: 196 }}>
                <InputLabel id="demo-select-small-label" className="px-2">
                  Gender
                </InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={value}
                      label="Gender"
                      onChange={onChange}
                      error={!!errors.gender}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </div>
            <div className="mt-3">
              <FormControl className="w-52">
                <InputLabel id="demo-select-small-label" className="px-2">
                  Available
                </InputLabel>
                <Controller
                  name="available"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={value}
                      label="available"
                      onChange={onChange}
                      error={!!errors.available}
                    >
                      <MenuItem value={"Available"}>Available</MenuItem>
                      <MenuItem value={"UnAvailable"}>UnAvailable</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </div>
          </div>
          <div className="mt-3">
            <Controller
              name="avatar"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Avatar"
                  placeholder="Enter Your Avatar"
                  error={!!errors.avatar}
                  helperText={errors.avatar?.message as string}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-3">
            <Controller
              name="domain"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Domain"
                  placeholder="Enter Your Domain"
                  error={!!errors.domain}
                  helperText={errors.domain?.message as string}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Enter Your Email"
                  error={!!errors.email}
                  helperText={errors.domain?.message as string}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-3">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter Your Password"
                  error={!!errors.password}
                  helperText={errors.password?.message as string}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-4">
            <div className=" w-full h-10 bg-red-500 text-white flex justify-center items-center">
              <button className="w-full" type="submit">
                {" "}
                Register
              </button>
            </div>
          </div>

          <div className="mt-5 text-center">
            <FormLabel component="legend">
              Already Register?
              <Link to="/login" className="text-blue-700">
                Please login
              </Link>
            </FormLabel>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Reg;
