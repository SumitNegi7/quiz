import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import axios from "axios";

import Pagination from "./components/Pagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setpageCount] = useState(1);
  const [postsPerPage, setPostsPage] = useState(1);

  // api token =EPPJ5B0KcH1nUq1mEJfSm1GCPHzKRvdmC0vVcGFH 💦 🏑
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://quizapi.io/api/v1/questions?apiKey=EPPJ5B0KcH1nUq1mEJfSm1GCPHzKRvdmC0vVcGFH&category=code&difficulty=Easy&limit=10&tags=JavaScript"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);

  return (
    <div className="App">
      {console.log(posts)}
      <button onClick={() => setCurrentPage(currentPage + 1)}></button>
      {console.log(pageCount)}
      <h1>La La Land</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
