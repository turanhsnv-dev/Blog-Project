import React from "react";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
const UserProfileBlog = () => {
    return (
        <div className="container-fluid py-5 px-5">
            <Card className="card card-hover mb-5">
                <Card.Header className="colorBG px-5 fw-bold text-white">
                    Software and Developer World
                </Card.Header>
                <Card.Body>
                    <div>
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
                                <Card.Title className="colorTxt fw-bold"></Card.Title>
                                <Card.Text></Card.Text>
                            </div>
                            <div className="col-sm-3 blogsAuthor-Date py-4">
                                <Card.Text className="colorTxt fw-bold">
                                    Author :{" "}
                                    <span className="textBlack fw-semibold">Emin Hemzeyev</span>
                                </Card.Text>
                                <Card.Text className="fw-bold colorTxt">
                                    Date :{" "}
                                    <span className="textBlack fw-semibold">Today 22:10</span>
                                </Card.Text>
                            </div>
                            <div className="col-sm-2 blogsLike-Comment py-4">
                                <Card.Text className="colorTxt fw-bold ">
                                    Likes : <span className="textBlack fw-semibold"></span>
                                </Card.Text>
                                <Card.Text className="fw-bold colorTxt">
                                    Comments : <span className="textBlack fw-semibold"></span>
                                </Card.Text>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="card card-hover mb-5">
                <Card.Header className="colorBG px-5 fw-bold text-white">
                    Web Security{" "}
                </Card.Header>
                <Card.Body>
                    <div>
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
                                <Card.Title className="colorTxt fw-bold"></Card.Title>
                                <Card.Text></Card.Text>
                            </div>
                            <div className="col-sm-3 blogsAuthor-Date py-4">
                                <Card.Text className="colorTxt fw-bold">
                                    Author :{" "}
                                    <span className="textBlack fw-semibold">Emin Hemzeyev</span>
                                </Card.Text>
                                <Card.Text className="fw-bold colorTxt">
                                    Date :{" "}
                                    <span className="textBlack fw-semibold">Today 22:10</span>
                                </Card.Text>
                            </div>
                            <div className="col-sm-2 blogsLike-Comment py-4">
                                <Card.Text className="fw-bold colorTxt">
                                    Likes : <span className="textBlack fw-semibold"></span>
                                </Card.Text>
                                <Card.Text className="fw-bold colorTxt">
                                    Comments : <span className="textBlack fw-semibold"></span>
                                </Card.Text>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfileBlog;
