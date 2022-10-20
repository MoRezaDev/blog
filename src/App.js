import { gql, useQuery } from "@apollo/client";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY);
  console.log(data);
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
