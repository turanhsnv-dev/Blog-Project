import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { createPost } from "../../components/Services/Api";
import { Modal, Button, Form } from "react-bootstrap";
import "../../css/Blog.css";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Blog = () => {
  const [users, setUsers] = useState([]);
  const [softwareblogs, setSoftwareblogs] = useState([]);
  const [websecurityblogs, setWebsecurityblogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      alert("Zehmet olmasa kategori seçin...");
      return;
    }

    const newPost = {
      title,
      content,
      category,
      author: loggedInUser.username
    };

    await createPost(newPost);
    setTitle("");
    setContent("");
    setCategory("");
    setShowModal(false);
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

    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);


  return (
    <>
      <div className="d-flex justify-content-between align-items-center BlogHeader pt-5">
        <h2 className="mx-5 py-5 fw-bold TextColor">Blogs</h2>
        {loggedInUser ? (
          <button
            onClick={() => setShowModal(true)}
            className="btn mx-5 fw-bold text-white BackgroundColor"
          >
            +New Blog
          </button>

        ) : (
          <></>
        )}

      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Blog Əlavə Et</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Kategoriya seçin</option>
                <option value="softwareblogs">Software Blogs</option>
                <option value="websecurityblogs" >Web Security Blogs</option>
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
          <Button variant="primary" className="BackgroundColor" onClick={handleSubmit}>
            Göndər
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container-fluid pt-5 px-5">
        <Card className="card card-hover mb-4">
          <Card.Header className="BackgroundColor px-5 fw-bold text-white">
            Software and Developer World
          </Card.Header>

        </Card>
        <div className="row pb-5">
          {softwareblogs.map((blog) => {
            const author = users.find(user => user.username === blog.author);
            return (
              <div key={blog.id} className="col-sm-4 pb-4">
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={author.avatar}>

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    titleTypographyProps={{ variant: 'h5' }}
                    title={blog.title}
                    subheader={blog.author}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://singularity.gs/wp-content/uploads/2018/04/css.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                      {blog.content}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon className="favoriteIcon" />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon className="shareIcon" />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
        <Card className="card card-hover mb-4">
          <Card.Header className="BackgroundColor px-5 fw-bold text-white">
            Web Security
          </Card.Header>

        </Card>
        <div className="row pb-5">
          {websecurityblogs.map((blog) => (
            <div key={blog.id} className="col-sm-4 pb-4">
              <Card>
                <CardHeader

                  avatar={
                    <Avatar aria-label="recipe">

                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  titleTypographyProps={{ variant: 'h5' }}
                  title={blog.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://singularity.gs/wp-content/uploads/2018/04/css.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                    {blog.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon className="favoriteIcon" />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon className="shareIcon" />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
