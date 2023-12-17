// pages/index.tsx
import React from 'react';
import { Typography, FormControl, Box, Grid, Container, FormControlLabel, Radio, RadioGroup, Item, Button, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.css';

const HomePage = () => {
    const boxStyle = {
        border: '1px solid rgb(210,210,210)', // Set the border style to solid
        padding: '16px',
        borderRadius: '5px',
        marginBottom: '50px'    // Add some padding for spacing
    };
    const issueStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        color: 'rgb(33, 37, 41)',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '1.5rem',
        paddingBottom: '20px',
    };
    const helpStyle = {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        color: 'rgb(33, 37, 41)',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '1.5rem', // Adjust font size as needed
        paddingBottom: '20px',
    };
    const infoStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        textAlign: 'center',
        paddingBottom: '15px',
    };
    const footerStyle = {
        backgroundColor: 'rgb(64, 128, 255)', // Background color
        padding: '50px 0px 25px',              // Padding values (top, right, bottom)
    };
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
        top: '17%',
        left: '0px',
        width: '100%',
        transform: 'translate(0px, -50%)',
        fontSize: '24px',
    };
    const desStyle = {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.5',
        letterSpacing: '0.00938em',
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
    };
    return (
        <div id="root">
            <header className='header'>
                <Box style={headerStyle}>
                    <Container maxWidth="xl">
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <img src='images/meta.png' alt='meta_png' />
                                <Typography variant='h6'>| Support Inbox</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <SearchIcon />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </header>
            <section>
                <Box>
                    <Box className="image-container">
                        <img src='images/main_background.jpg' alt='background_png' ></img>
                        <Typography variant='h2' className="centered-text" style={facebookStyle}>Facebook Business Help Center</Typography>
                    </Box>
                    <Container maxWidth="lg">
                        <Typography variant='h4' align='center' style={helpStyle}>How can we help ?</Typography>
                        <Typography variant='body1' component="p" align='center' style={infoStyle}>We need more information to address your issue. This form will only take a few minutes.</Typography>
                        <Box style={boxStyle}>
                            <Typography variant="h4" align='center' style={issueStyle}>Select issue</Typography>
                            <Typography variant='body1' component="p">Most common issues</Typography>
                            <Box component='form'>
                                <FormControl>
                                    <RadioGroup name='radio-buttons-group'>
                                        <FormControlLabel required value='issue' control={<Radio />} labelPlacement='end' label="I need to contact the support team" />
                                    </RadioGroup>
                                </FormControl>
                                <Button variant="contained" size='medium' tabIndex={0} type='submit'>Submit</Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </section>
            <footer className='footer'>
                <Box>
                    <Box style={footerStyle}>
                        <Container maxWidth='xl'>
                            <Grid container spacing={2}>
                                <Grid item container md={12}>
                                    <img src='images/meta.png' alt='meta_png' />
                                </Grid>
                                <Grid item container md={12}>
                                    <Typography component='p' variant='body1' align='center' style={desStyle}>Facebook can help your large, medium or small business grow. Get the latest news for advertisers and more on our Meta for Business Page.</Typography>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary>
                                                    <Typography variant='body1' component='span'>BBBBBBBBBBBBB</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary>
                                                    <Typography variant='body1' component='span'>BBBBBBBBBBBBB</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary>
                                                    <Typography variant='body1' component='span'>BBBBBBBBBBBBB</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary>
                                                    <Typography variant='body1' component='span'>BBBBBBBBBBBBB</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={2} lg={2}>
                                        <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary>
                                                    <Typography variant='body1' component='span'>BBBBBBBBBBBBB</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box></Box>
                </Box>
            </footer>
        </div>
    );
};

export default HomePage;
