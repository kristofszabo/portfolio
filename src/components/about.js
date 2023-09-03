import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import './about.css'; // Import the CSS file

const About = ({ imageSrc, text }) => {
  return (
    <Box className="text-with-image-container">
      <Box className="text">
        <Typography variant="body1">{text}</Typography>
      </Box>
      <section className="image-with-details">
        <div id='parent' className="image-with-details__container reverse-false" >
        <div id='about-text' class="image-with-details__details">
            <div class="image-with-details__details-container">
              <h2 class="image-with-details__title">Hi, i'm Kristóf Szabó.</h2>
              <div class="image-with-details__description">
                <p>I'm a test automationer because i want to make applications quality good. To the users so they can enjoy your applications. I started as a software engineer then i changed to be a Tester.</p>
                </div></div>
          </div>
          <div id='about-image' className="image-with-details__image">
            <img src="https://static.standard.co.uk/2022/07/19/07/newFile-4.jpg" width="300" height="400" />
          </div>
        </div>
      </section>
      <Avatar alt="Image" src={imageSrc} className="avatar" />
    </Box>
  );
};

export default About;