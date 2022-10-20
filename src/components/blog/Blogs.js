import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h1>Error</h1>;
  console.log(data);
  if (data) 
    return (
      <Grid container spacing={2}>
        {data.posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <CardEl {...post} />
          </Grid>
        ))}
      </Grid>
    );
};

export default Blogs;
