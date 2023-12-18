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

    return (
        <Box id="root">
            <Header />
            <section>
                <Box>
                    <img src='images/main_background.jpg' alt='background_png' ></img>
                    <Typography variant='h2' className="centered-text" style={facebookStyle}>Facebook Business Help Center</Typography>
                </Box>
                <Box>
                    <Container maxWidth="lg">
                        <Typography variant='h4' align='center' style={helpStyle}>How can we help ?</Typography>
                        <Typography variant='body1' component="p" align='center' style={infoStyle}>We need more information to address your issue. This form will only take a few minutes.</Typography>
                        <Box style={boxStyle}>
                            <Typography variant="h4" align='center' style={issueStyle}>Select issue</Typography>
                            <Typography variant='body1' component="p">Most common issues</Typography>
                            <Box component='form' onSubmit={handleSubmit}>
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
            <Footer />
        </Box>
    );
};

export default App;
