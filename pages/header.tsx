import React from 'react';

import { Typography, Box, Grid, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const headerStyle = {
        position: 'sticky',               // Set the position to sticky
        WebkitBoxFlex: 1,                // Use the Webkit prefix for compatibility          
        backgroundColor: 'rgb(53, 87, 151)', // Background color
        padding: '15px 0px 20px',        // Padding values (top, right, bottom)
    };

    const containerStyle = {
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        display: 'block',
    }

    const gridContainerStyle = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        marginTop: '-16px',
        width: 'calc(100% + 16px)',
        marginLeft: '-16px',
    }

    const gridItem1Style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        width: '100%',
        margin: '0px',
        flexBasis: '50%',
        WebkitBoxFlex: 0,
        flexGrow: 0,
        maxWidth: '50%',
        WebkitBoxPack: 'start',
        justifyContent: 'flex-start',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
    }

    const gridItem2Style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        width: '100%',
        margin: '0px',
        flexBasis: '50%',
        WebkitBoxFlex: 0,
        flexGrow: 0,
        maxWidth: '50%',
        WebkitBoxPack: 'end',
        justifyContent: 'flex-end',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
    }

    const gridItem1ImgStyle = {
        paddingRight: '5px'
    }

    const gridItem1TextStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400, // Numeric value
        fontSize: '1rem',
        lineHeight: 1.5, // Numeric value
        letterSpacing: '0.00938em',
        color: 'rgb(255, 255, 255)',
    }
    return (
        <header className='header'>
            <Box style={headerStyle}>
                <Container maxWidth="xl" style={containerStyle}>
                    <Grid container spacing={2} style={gridContainerStyle}>
                        <Grid item xs={6} style={gridItem1Style}>
                            <img style={gridItem1ImgStyle} src='images/meta.png' alt='meta_png' />
                            <Typography variant='h6' style={gridItem1TextStyle}>| Support Inbox</Typography>
                        </Grid>
                        <Grid item xs={6} style={gridItem2Style}>
                            <SearchIcon />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </header>
    );
};

export default Header;
