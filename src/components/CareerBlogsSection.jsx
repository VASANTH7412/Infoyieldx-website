import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CareerBlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/blogs") // ✅ Backend API URL
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="section-padding bg-light" id="career-blogs">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Career News & Blogs</h2>
        <div className="row">
          {blogs.length === 0 ? (
            <p className="text-center">No blogs available right now.</p>
          ) : (
            blogs.map((blog) => (
              <div className="col-md-4 mb-4" key={blog.id}>
                <div className="card h-100 shadow border-0 rounded-4">
                  <img
                    src={blog.imageUrl}
                    className="card-img-top rounded-top-4"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt="Blog"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">{blog.title}</h5>
                    <p className="card-text text-muted small mb-2">
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </p>
                    <p className="card-text flex-grow-1">{blog.description}</p>
                    <a
                      href={`/blog/${blog.id}`}
                      className="btn btn-outline-primary mt-auto"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerBlogsSection;
