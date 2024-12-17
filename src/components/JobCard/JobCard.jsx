import React, {useEffect, useState} from "react";
import "../../css/JobCard.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import axios from "axios";


const JobCard = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [jobsCard, setJobsCard] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await axios("http://localhost:5000/jobCard")
        setJobsCard(response.data);
      } catch (error) {
        console.error('Error', error);
      }
     }
     fetchData();
  }, []);

  return (
    <div className='jobcard-main container-lg'>
      {/* {JOB CARD TITLE} */}
      <div className='jobcard-title'>
        <h1>Job Card Section</h1>
      </div>

      {/* JOB CARD FULL CONTENT */}
      <div className='jobcard-content d-flex justify-content-between'>
        {jobsCard.map((card) => (
            <Card sx={{ width: 300 }}>
            <div>
              <Typography level='title-lg'>{card.title}</Typography>
              <Typography level='body-sm'>{card.author}</Typography>
              <IconButton
                aria-label='bookmark Bahamas Islands'
                variant='plain'
                color='neutral'
                size='sm'
                sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
              >
                <BookmarkAdd />
              </IconButton>
            </div>
            <AspectRatio minHeight='120px' maxHeight='200px'>
              <img src={card.image} alt="" />
            </AspectRatio>
            <CardContent orientation='horizontal'>
              <div>
                <Typography level='body-xs'>Total price:</Typography>
                <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                  {card.price}
                </Typography>
              </div>
              <Button
                variant='solid'
                size='md'
                color='primary'
                aria-label='Explore Bahamas Islands'
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Send CV
              </Button>
            </CardContent>
          </Card>
        ))}
        
      </div>
    </div>
  );
};

export default JobCard;
