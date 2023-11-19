import React from "react";
import { useParams } from "react-router-dom";
import { useUserDetailsQuery } from "../../redux/api/userApi";
import { useAppSelector } from "../../redux/hook";
import { useCrateTeamMutation } from "../../redux/api/teamApi";
import { toast } from "react-toastify";
import Loading from "../shared/Loading";

const UserDetails = () => {
  const params = useParams();
  const { data: user, isLoading } = useUserDetailsQuery(params.id as string);
  const loginUser: { email: string | null; userId: string | null } =
    useAppSelector((state) => state.user.user);
  const [crateTeam] = useCrateTeamMutation();
  const addTeamMemberHandler = async (id: string) => {
    const data = {
      userId: loginUser.userId,
      teamMember: id,
    };
    try {
      if (loginUser.email) {
        const res = await crateTeam(data).unwrap();
        if (res) {
          toast.success("Team Member Added Successfully");
        }
        console.log(res);
      } else {
        toast.error("Please Login First");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" h-screen flex justify-center items-center mt-20">
      <div className="w-96 h-full  overflow-hidden ">
        <div className=" shadow rounded-2xl border">
          <div className="p-5  h-full">
            <div className=" flex justify-center  items-center">
              <div>
                <div className="flex justify-center">
                  <img
                    className="w-28 h-full border p-2 rounded-full "
                    src={user?.avatar}
                  />
                </div>
                <h3 className="text-center mt-1 text-xl">
                  {user?.first_name}
                  {""} {user?.last_name}
                </h3>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex gap-3">
                <div className="w-20">
                  <p>Email</p>
                </div>
                <div>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <div className="w-20">
                  <p>Gender</p>
                </div>
                <div>
                  <p>{user?.gender}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <div className="w-20">
                  <p>Domain</p>
                </div>
                <div>
                  <p>{user?.domain}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <div className="w-20">
                  <p>Available</p>
                </div>
                <div>
                  <p>
                    {user?.available ? (
                      <span className=" text-green-500 font-bold">
                        Yes Available
                      </span>
                    ) : (
                      <span className=" text-red-500 font-bold">
                        {" "}
                        Unavailable
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full flex gap-2">
              <div className="w-full h-8 bg-red-500 text-white flex justify-center items-center rounded">
                {" "}
                <button
                  onClick={() => addTeamMemberHandler(user?._id)}
                  className="w-full"
                >
                  Add Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
