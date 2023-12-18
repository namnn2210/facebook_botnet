import React from 'react';

import { Typography, Box, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const headerStyle = {
        position: 'sticky',               // Set the position to sticky
        WebkitBoxFlex: 1,                // Use the Webkit prefix for compatibility
        flexGrow: 1,                     // Set flex-grow to 1
        backgroundColor: 'rgb(53, 87, 151)', // Background color
        padding: '15px 0px 20px',        // Padding values (top, right, bottom)
    };
    const facebookStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        color: 'rgb(255, 255, 255)',
        position: 'absolute',
        textAlign: 'center',
        top: '18%',
        left: '0px',
        width: '100%',
        transform: 'translate(0px, -50%)',
        fontSize: '24px',
    };

    return (
        <header className='header'>
            <Box style={headerStyle}>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <img src='images/meta.png' alt='meta_png' />
                            <Typography variant='h6'>| Support Inbox</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <SearchIcon />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box className="image-container">
                <img src='images/main_background.jpg' alt='background_png' ></img>
                <Typography variant='h2' className="centered-text" style={facebookStyle}>Facebook Business Help Center</Typography>
            </Box>
        </header>
    );
};

export default Header;
