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
        textAlign: 'center'
    };

    const liStyle = {
        display: 'inline-block',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: 'auto',
        padding: '0px 16px',
        color: 'rgb(84, 89, 95)',
        WebkitBoxPack: 'start',
        WebkitBoxAlign: 'center',
    };

    const h3Style = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        color: 'rgb(255, 255, 255)',
        textAlign: 'left',
        fontSize: '14px',
        fontWeight: 700,    // Note: Numeric value for font-weight
        paddingBottom: '10px',
    }

    const liTopStyle = {
        display: 'flex',
        WebkitBoxPack: 'start',
        justifyContent: 'flex-start',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left',
        padding: '0px 0px 5px',
    }

    const divTopStyle = {
        flex: '1 1 auto',
        minWidth: '0px',
        marginTop: '4px',
        marginBottom: '4px',
        color: 'rgb(255, 255, 255)',
    }

    const spanTopStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400, // Note: Numeric value for font-weight
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        display: 'block',
        fontSize: '14px',
    }

    const grid1Style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        width: '100%',
        margin: '0px',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        paddingBottom: '20px',
        paddingTop: '16px',
        paddingLeft: '16px'
    }

    const grid2Style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        width: '100%',
        margin: '0px',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        paddingBottom: '35px',
        paddingTop: '16px',
        paddingLeft: '16px',
        textAlign: 'center'
    }
    const grid3Style = {
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'wrap',
        width: '100%',
    }

    return (
        <footer className='footer'>
            <Box>
                <Box style={footerStyle}>
                    <Container maxWidth='xl'>
                        <Grid container spacing={2}>
                            <Grid item container md={12} style={grid1Style}>
                                <img src='images/meta.png' alt='meta_png' />
                            </Grid>
                            <Grid item container md={12} style={grid2Style}>
                                <Typography component='p' variant='body1' align='center' style={desStyle}>Facebook can help your large, medium or small business grow. Get the latest news for advertisers and more on our Meta for Business Page.</Typography>
                            </Grid>
                            <Grid container spacing={2} style={grid3Style}>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography style={h3Style} variant='body1' component='h3'>Marketing on Facebook</Typography>
                                    <List style={ulStyle}>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Success Stories</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Measurement</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Industries</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Inspiration</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Events</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>News</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Site map</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography style={h3Style} variant='body1' component='h3'>Marketing objectives</Typography>
                                    <List style={ulStyle}>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Build your presence</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Create awareness</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Drive discovery</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Generate leads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Boost sales</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Earn loyalty</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography style={h3Style} variant='body1' component='h3'>Facebook Pages</Typography>
                                    <List style={ulStyle}>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Get started with Pages</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Setting up your Page</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Manage your Facebook Page</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Promote your Page</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Messaging on your Page</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Page Insights</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography style={h3Style} variant='body1' component='h3'>Facebook ads</Typography>
                                    <List style={ulStyle}>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Get started with ads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Buying Facebook ads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Ad formats</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Ad placement</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Choose your audience</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Measure your ads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Managing your ads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2} lg={2}>
                                    <Typography style={h3Style} variant='body1' component='h3'>Resources</Typography>
                                    <List style={ulStyle}>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Ads Guide</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Buying Facebook ads</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Business Help Centre</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Meta Audience Network</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Meta Blueprint</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Meta Business Partners</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Instagram Business</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem style={liTopStyle}>
                                            <ListItemText style={divTopStyle}>
                                                <Typography style={spanTopStyle} variant='body1' component='span'>Support</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box>
                    <Container maxWidth='lg'>
                        <List style={ulStyle}>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>English (UK)</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>English (US)</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Español Português (Brasil)</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Français (France)</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Español (España)</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>More languages</Typography></ListItemText>
                            </ListItem>
                        </List>
                        <List style={ulStyle}>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>© 2023 Meta</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>About</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Developers</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Careers</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Privacy</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Cookies</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Terms</Typography></ListItemText>
                            </ListItem>
                            <ListItem style={liStyle}>
                                <ListItemText><Typography variant='body1' component='span'>Help Centre</Typography></ListItemText>
                            </ListItem>
                        </List>
                    </Container>
                </Box>
            </Box>
        </footer >
    );
};

export default Footer;
