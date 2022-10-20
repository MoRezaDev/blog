import { useQuery } from "@apollo/client";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
const AuthorPage = () => {
  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h3>Erros</h3>;

  const { author } = data;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          xs={12}
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{ __html: author.description.html }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight="700">
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {author.posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
