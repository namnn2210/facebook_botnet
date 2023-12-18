import React from 'react';
import { Typography, FormControl, Box, Grid, Container, FormControlLabel, Radio, RadioGroup, Button, List, ListItem, ListItemText } from '@mui/material';

const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(64, 128, 255)', // Background color
        padding: '50px 0px 25px',              // Padding values (top, right, bottom)
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
    const ulStyle = {
        listStyle: 'none',
        margin: '0px',
        padding: '8px 0px',
        position: 'relative',
    };
    return (
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
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography variant='body1' component='h3'>Marketing on Facebook</Typography>
                                    <List style={ulStyle}>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>A</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>B</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>C</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>E</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>D</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>F</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText >
                                                <Typography variant='body1' component='span'>D</Typography>
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
    );
};

export default Footer;
