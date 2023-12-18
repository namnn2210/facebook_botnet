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

        </header>
    );
};

export default Header;
