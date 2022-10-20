import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        id
        name
        avatar {
          url
        }
      }
      slug
      title
      id
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        id
        coverPhoto {
          url
        }
        title
        slug
      }
    }
  }
`;

export const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        field
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      text
      name
    }
  }
`;
