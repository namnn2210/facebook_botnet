// pages/index.tsx
import { React, useState } from 'react';
import Header from './header'
import Footer from './footer'
import { Typography, FormControl, Box, Grid, Container, FormControlLabel, Radio, RadioGroup, Button, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router'


const App = () => {
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



    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/issue")
    }
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
    const backgroundImgStyle = {
        width: '100%',
        height: '200px'
    }
    const helpBoxStyle = {
        maxWidth: '800px',
        margin: '0px auto',
        paddingTop: '20px'
    }

    const radioGroupStyle = {
        display: 'flex',
        flexFlow: 'column wrap'
    }

    const radioLabelStyle = {
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: '-11px',
        marginRight: '16px',
    }

    const formControlStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth: '0px',
        padding: '0px',
        margin: '0px',
        border: '0px',
        verticalAlign: 'top',
        width: '100%',
    }

    const submitStyle = {
        display: 'inline-flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'transparent',
        outline: '0px',
        border: '0px',
        margin: '10px 0px 0px',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        textDecoration: 'none',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        minWidth: '64px',
        padding: '6px 16px',
        borderRadius: '4px',
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgb(223, 237, 255)',
        color: 'rgb(24, 119, 242)',
        height: '48px',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: '16px',
    }

    return (
        <Box id="root">
            <div className='App'>
                <Header />
                <section>
                    <Box>
                        <img style={backgroundImgStyle} src='images/main_background.jpg' alt='background_png' ></img>
                        <Typography variant='h2' className="centered-text" style={facebookStyle}>Facebook Business Help Center</Typography>
                    </Box>
                    <Box>
                        <Container maxWidth="lg">
                            <Box style={helpBoxStyle}>
                                <Typography variant='h4' align='center' style={helpStyle}>How can we help ?</Typography>
                                <Typography variant='body1' component="p" align='center' style={infoStyle}>We need more information to address your issue. This form will only take a few minutes.</Typography>
                                <Box style={boxStyle}>
                                    <Typography variant="h4" align='center' style={issueStyle}>Select issue</Typography>
                                    <Typography variant='body1' component="p">Most common issues</Typography>
                                    <Box component='form' onSubmit={handleSubmit}>
                                        <FormControl style={formControlStyle}>
                                            <RadioGroup name='radio-buttons-group' style={radioGroupStyle}>
                                                <FormControlLabel style={radioLabelStyle} required value='issue' control={<Radio />} labelPlacement='end' label="I need to contact the support team" />
                                            </RadioGroup>
                                            <Button style={submitStyle} variant="contained" size='medium' tabIndex={0} type='submit'>Submit</Button>
                                        </FormControl>

                                    </Box>
                                </Box>
                            </Box>

                        </Container>
                    </Box>
                </section>
                <Footer />
            </div>
        </Box>
    );
};

export default App;
