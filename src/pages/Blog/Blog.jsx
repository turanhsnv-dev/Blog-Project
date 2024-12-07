import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { createPost } from "../../components/Services/Api";
import { Modal, Button, Form } from "react-bootstrap";
import "../../css/Blog.css";
const Blog = () => {
  const [users, setUsers] = useState([]);
  const [softwareblogs, setSoftwareblogs] = useState([]);
  const [websecurityblogs, setWebsecurityblogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axios.get("http://localhost:5000/users"),
          axios.get("http://localhost:5000/softwareblogs"),
          axios.get("http://localhost:5000/websecurityblogs"),
        ]);
        setUsers(res1.data);
        setSoftwareblogs(res2.data);
        setWebsecurityblogs(res3.data);
      } catch (error) {
        console.error("Data cekilmedi:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center BlogHeader pt-5">
        <h2 className="mx-5 py-5 fw-bold ">Blogs</h2>
        <button
          onClick={() => setShowModal(true)}
          className="btn mx-5 fw-bold text-white"
        >
          +New Blog
        </button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Blog Əlavə Et</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Category</option>
                <option value={softwareblogs} onChange={(e) => setSoftwareblogs(e.target.value)}>Software Blogs</option>
                <option value={websecurityblogs} onChange={(e) => setWebsecurityblogs(e.target.value)}>Web Security Blogs</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Başlığ Əlavə Et"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Məzmun Əlavə Et"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Göndər
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-fluid py-5 px-5">
        <Card className="card card-hover mb-5">
          <Card.Header className="colorBG px-5 fw-bold text-white">
            Software and Developer World
          </Card.Header>
          <Card.Body>
            {softwareblogs.map((blog) => (
              <div key={blog.id}>
                <div className="row py-4 borderBottom">
                  <div className="col-sm-2 text-center blogsAvatar">
                    <MDBContainer className="py-3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                        className="rounded-circle shadow-5"
                        style={{ width: "70px" }}
                        alt="Avatar"
                      />
                    </MDBContainer>
                  </div>
                  <div className="col-sm-5 blogsTitle py-4">
                    <Card.Title className="colorTxt fw-bold">
                      {blog.title}
                    </Card.Title>
                    <Card.Text>{blog.content}</Card.Text>
                  </div>
                  <div className="col-sm-3 blogsAuthor-Date py-4">
                    <Card.Text className="colorTxt fw-bold">
                      Author :{" "}
                      <span className="textBlack fw-semibold">
                        Emin Hemzeyev
                      </span>
                    </Card.Text>
                    <Card.Text className="fw-bold colorTxt">
                      Date :{" "}
                      <span className="textBlack fw-semibold">Today 22:10</span>
                    </Card.Text>
                  </div>
                  <div className="col-sm-2 blogsLike-Comment py-4">
                    <Card.Text className="colorTxt fw-bold ">
                      Likes :{" "}
                      <span className="textBlack fw-semibold">{blog.like}</span>
                    </Card.Text>
                    <Card.Text className="fw-bold colorTxt">
                      Comments :{" "}
                      <span className="textBlack fw-semibold">
                        {blog.comment}
                      </span>
                    </Card.Text>
                  </div>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
        <Card className="card card-hover mb-5">
          <Card.Header className="colorBG px-5 fw-bold text-white">
            Web Security{" "}
          </Card.Header>
          <Card.Body>
            {websecurityblogs.map((blog) => (
              <div key={blog.id}>
                <div className="row py-4 borderBottom">
                  <div className="col-sm-2 text-center blogsAvatar">
                    <MDBContainer className="py-3">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                        className="rounded-circle shadow-5"
                        style={{ width: "70px" }}
                        alt="Avatar"
                      />
                    </MDBContainer>
                  </div>
                  <div className="col-sm-5 blogsTitle py-4">
                    <Card.Title className="colorTxt fw-bold">
                      {blog.title}
                    </Card.Title>
                    <Card.Text>{blog.content}</Card.Text>
                  </div>
                  <div className="col-sm-3 blogsAuthor-Date py-4">
                    <Card.Text className="colorTxt fw-bold">
                      Author :{" "}
                      <span className="textBlack fw-semibold">
                        Emin Hemzeyev
                      </span>
                    </Card.Text>
                    <Card.Text className="fw-bold colorTxt">
                      Date :{" "}
                      <span className="textBlack fw-semibold">Today 22:10</span>
                    </Card.Text>
                  </div>
                  <div className="col-sm-2 blogsLike-Comment py-4">
                    <Card.Text className="fw-bold colorTxt">
                      Likes :{" "}
                      <span className="textBlack fw-semibold">{blog.like}</span>
                    </Card.Text>
                    <Card.Text className="fw-bold colorTxt">
                      Comments :{" "}
                      <span className="textBlack fw-semibold">
                        {blog.comment}
                      </span>
                    </Card.Text>
                  </div>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Blog;
