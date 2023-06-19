import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/FooterStyle.css';
import { Box } from '@mui/material';

function Footer() {
    return (
        <>
            <div className='footer'>
                <Box className='iconFooter' sx={{ my: 3, "& svg": { fontSize: "50px", cursor: "pointer", mr: 2, }, "& svg:hover": { color: 'goldenrod', transform: "translatex(5px)", transition: 'all 400ms' } }}>
                    <InstagramIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                    <YouTubeIcon />
                </Box>
                <div className='footerheading'>
                    <h2>All Rights Reserved @ Techinfo YT</h2>
                </div>
            </div>
        </>
    )
}

export default Footer
