import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaShare } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { PersonAdd } from "@mui/icons-material";
import axios from "axios";

const UserProfileJob = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const getAllJobs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/jobs");
                console.log(response.data);
                setJobs(response.data);
            } catch (error) {
                console.error("İş məlumatlarını almaqda xəta baş verdi:", error);
            }
        };
        getAllJobs();
    }, []);
    return (
        <div className="UPJ">
            <div className="UPJ_filter">
                <DropdownButton id="dropdown-basic-button" title="Date Posted">
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="lastYear" label="Last Year" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check
                            type="checkbox"
                            id="last6Months"
                            label="Last 6 Months"
                        />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="lastMonth" label="Last Month" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="lastWeek" label="Last Week" />
                    </Dropdown.Item>
                </DropdownButton>

                {/* Experience */}
                <DropdownButton id="dropdown-basic-button" title="Experience">
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="6Months" label="6 Months" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="6to12Months" label="6-12 Months" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="1to3Years" label="1-3 Years" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="3PlusYears" label="3++ Years" />
                    </Dropdown.Item>
                </DropdownButton>

                {/* Company */}
                <DropdownButton id="dropdown-basic-button" title="Company">
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="abbBank" label="ABB Bank" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check
                            type="checkbox"
                            id="britishPetrol"
                            label="British Petrol"
                        />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="socar" label="SOCAR" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check
                            type="checkbox"
                            id="pashaHolding"
                            label="Pasha Holding"
                        />
                    </Dropdown.Item>
                </DropdownButton>

                {/* Remote */}
                <DropdownButton id="dropdown-basic-button" title="Remote">
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="onSite" label="On-site" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="remote" label="Remote" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="hybrid" label="Hybrid" />
                    </Dropdown.Item>
                </DropdownButton>

                {/* Generic Dropdown */}
                <DropdownButton id="dropdown-basic-button" title="Dropdown Button">
                    <Dropdown.Item as="div">
                        <Form.Check type="checkbox" id="action" label="Action" />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check
                            type="checkbox"
                            id="anotherAction"
                            label="Another Action"
                        />
                    </Dropdown.Item>
                    <Dropdown.Item as="div">
                        <Form.Check
                            type="checkbox"
                            id="somethingElse"
                            label="Something Else"
                        />
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="UPJ_container">
                <div className="jobAdd">
                    <CardGroup className="cardGrp">
                        {jobs.map((job) => (
                            <Card
                                key={job.id} // Her kart için unique bir key kullanın
                                className="d-flex flex-column align-items-center custom-card"
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://www.pashabank.az/templates/images/pblogo.png"
                                    className="custom-card-img"
                                />
                                <Card.Body>
                                    <Card.Title>{job.name}</Card.Title>
                                    <Card.Text>{job.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardGroup>
                </div>
                <div className="jobContent">
                    <div className="JC_herader d-flex w-100" style={{ color: "#4facfe" }}>
                        <div className="JC_header_company">
                            <img src="#" />
                            <a>Phasa Bank</a>
                        </div>
                        <div className="JC_header_iconbox">
                            <FaShare style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }} />

                            <HiDotsHorizontal
                                style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}
                            />
                        </div>
                    </div>

                    <div className="JobName text-dark fs-2 mt-2">
                        Supervisor in the bank
                    </div>
                    <div className="JobName text-secondary fs-6 mt-2">
                        Baku, Baku Ekonomic Zone, Azerbaijan · 1 week ago · 66 applicants
                    </div>
                    <div className="remote_container d-flex mt-3">
                        <div className="remoteBox bg-secondary text-light py-1 px-3 me-2 rounded">
                            full site
                        </div>
                        <div className="remoteBox bg-secondary text-light py-1 px-3 me-2 rounded">
                            0 of 10 skils match
                        </div>
                        <div className="remoteBox bg-secondary text-light py-1 px-3 me-2 rounded">
                            on-site
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <Button href="#" className="me-3 py-1 px-2">
                            Easy apply
                        </Button>
                        <Button
                            variant="outline-primary"
                            href="#"
                            className="me-3 py-1 px-2"
                        >
                            Primary
                        </Button>
                    </div>
                    <Card className="mt-5">
                        <Card.Header as="h5">Meet the hiring team</Card.Header>
                        <Card.Body>
                            <Card.Title>Musayev Musa</Card.Title>
                            <Card.Text>leader of Phasa Bank's commercy team</Card.Text>
                            <Button variant="primary">Message</Button>
                        </Card.Body>
                    </Card>
                    <div className="aboutJob">
                        <h3 className="mt-2">About the job</h3>
                        <p className="mt-1">
                            If you are passionate about authentic hospitality and service,
                            have relevant experience, can demonstrate strong problem-solving,
                            organizational and administrative skills, we have a great job
                            opportunity for you as a Team Leader F&B.
                        </p>
                        <h3 className="mt-2">Role description</h3>
                        <p className="mt-1">
                            MyContact ™ Rəqəmsal Vizit Kart is a digital business card
                            solution that allows individuals to easily share their contact
                            information with others in just 2 seconds. Located in Baku, the
                            company focuses on helping users expand their network quickly and
                            efficiently.
                        </p>
                    </div>

                    <div className="Job_card p-4 border-1 rounded ">
                        <h2>About company</h2>
                        <div className="d-flex justify-between mt-2">
                            <div>
                                <a className="text-dark">MyContact ™ Rəqəmsal Vizit Kart</a>
                                <p>2,408 followers</p>
                            </div>
                            <Button
                                variant="contained"
                                endIcon={<PersonAdd />}
                                style={{ backgroundColor: "#4facfe", color: "#fff" }}
                            >
                                Send
                            </Button>
                        </div>
                        <p className="mt-1">
                            Mobile Computing Software Products 10,001+ employees 1 on LinkedIn
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileJob;
