/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TagIcon from '@mui/icons-material/Tag';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SocialMediaCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" sx={{borderRadius: "24px", padding: "12px"}}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom textAlign="center">
            You've Matched with Name!
          </Typography>
          <Stack spacing={2} alignItems="center">
            <Avatar
              alt="Profile Image"
              src="/path/to/image.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="body2" textAlign="center">
              Connect with Name
            </Typography>
            <Box>
              <IconButton aria-label="instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="email">
                <EmailIcon />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="tags">
                <TagIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: 'green',
                ':hover': {
                  backgroundColor: 'darkgreen',
                  boxShadow: 'none',
                },
              }}
            >
              Return Home
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
