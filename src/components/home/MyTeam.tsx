import React from "react";
import { useMyTeamQuery } from "../../redux/api/userApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteTeamMutation } from "../../redux/api/teamApi";
import { toast } from "react-toastify";
import Loading from "../shared/Loading";
const MyTeam = () => {
  const { data, isLoading } = useMyTeamQuery({});
  console.log(data);
  const [deleteTeam] = useDeleteTeamMutation();
  const teamMemberDeleteHandler = async (id: string) => {
    try {
      const res = await deleteTeam(id).unwrap();
      console.log(res);
      if (res) {
        toast.success("team member delete successfully");
      } else {
        toast.error("something is wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("something is wrong");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="mt-20">
        <h3>Our Team Member</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Domain</TableCell>
                <TableCell align="right">Available</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            {data?.map((team) => (
              <TableBody key={team?.teamMember._id}>
                <TableCell>
                  {team?.teamMember.first_name} {team?.teamMember.last_name}
                </TableCell>
                <TableCell align="center">{team?.teamMember.email}</TableCell>
                <TableCell align="right">{team?.teamMember.gender}</TableCell>
                <TableCell align="right">{team?.teamMember.domain}</TableCell>
                <TableCell align="right">
                  {team.available ? (
                    <span className=" text-green-500 font-bold">
                      Yes Available
                    </span>
                  ) : (
                    <span className=" text-red-500 font-bold">
                      {" "}
                      Unavailable
                    </span>
                  )}
                </TableCell>
                <TableCell align="right">
                  <button
                    onClick={() => teamMemberDeleteHandler(team?._id)}
                    className="text-red-500"
                  >
                    <DeleteIcon></DeleteIcon>
                  </button>
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyTeam;
