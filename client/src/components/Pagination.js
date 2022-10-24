import React from "react";

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { Link } from "react-router-dom";
import useStyles from "./styles";

const Paginate = () => {
  const classes = useStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <Link to={`/posts?page=${1}`}>
          <PaginationItem {...item} />
        </Link>
      )}
    />
  );
};
export default Paginate;
