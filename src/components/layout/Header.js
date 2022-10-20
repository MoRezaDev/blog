import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import React from "react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              color="white"
            >
              وبلاگ نمونه
            </Typography>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <CollectionsBookmarkIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
