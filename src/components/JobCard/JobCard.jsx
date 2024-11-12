import React from "react";
import "../../css/JobCard.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

const JobCard = () => {
  return (
    <div className='jobcard-main container-lg'>
      {/* {JOB CARD TITLE} */}
      <div className='jobcard-title'>
        <h1>Job Card Section</h1>
      </div>

      {/* JOB CARD FULL CONTENT */}
      <div className='jobcard-content d-flex justify-content-between'>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Frontend Developer</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $2,900
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
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Help Desk</Typography>
            <Typography level='body-sm'>January 4 to April 13, 2021</Typography>
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
            <img
              src='https://www.sydle.com/blog/assets/post/help-desk-types-632b8ce3d4d20a1f70c0f02e/help-desk-icon.png'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $1,300
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Backend Developer</Typography>
            <Typography level='body-sm'>June 24 to August 14, 2023</Typography>
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
            <img
              src='https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $2,900
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>UX&UI Designer</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $2,100
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Cybersecurity Analyst</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://www.globalitsvcs.com/wp-content/uploads/Information-Cybersecurity-Analysts.jpg'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $5,700
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Robotics Teacher</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://gtectvm.com/wp-content/uploads/2023/06/home-made-robot-desk-1024x683.jpg'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $3,400
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>System Administrator</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://180engineering.com/wp-content/uploads/2022/10/A-Day-In-The-Life-Of-An-IT-Systems-Administrator.jpg'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $2,900
              </Typography>
            </div>
            <Button
              variant='solid'
              size='md'
              color='primary'
              aria-label='Explore Bahamas Islands'
              sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level='title-lg'>Mobile Developer</Typography>
            <Typography level='body-sm'>April 24 to May 02, 2021</Typography>
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
            <img
              src='https://www.techbeatly.com/wp-content/uploads/2022/02/image-1024x682.jpeg'
              srcSet='https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x'
              loading='lazy'
              alt=''
            />
          </AspectRatio>
          <CardContent orientation='horizontal'>
            <div>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                $2,900
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
      </div>
    </div>
  );
};

export default JobCard;
