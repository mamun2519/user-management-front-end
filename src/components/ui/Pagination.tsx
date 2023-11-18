import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationLink = () => {
  return (
    <div className=" flex justify-center">
      <Stack spacing={2}>
        <Pagination count={20} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default PaginationLink;
