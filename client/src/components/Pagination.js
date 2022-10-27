import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


import { getPosts } from "../actions/posts";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [dispatch, page]);
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <Link to={`/posts?page=${item.page}`}>
          <PaginationItem {...item} />
        </Link>
      )}
    />
  );
};
export default Paginate;
