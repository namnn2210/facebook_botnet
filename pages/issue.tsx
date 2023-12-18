import React from 'react';
import Header from './header'
import Footer from './footer';
import { Typography, FormControl, Box, Grid, Container, TextField, FormControlLabel, Checkbox, Button, Modal } from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './styles.module.css'

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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }
    return (
        <div>
            <Header />
            <section>
                <Container maxWidth="lg">
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
                            <Typography variant='body1' component='h3' style={startedStyle}>Get Started</Typography>
                            <Box>
                                <Typography variant='body1' style={bodyStyle}>We have received multiple reports that suggest that your account has been in violation of our terms of services and community guidelines. As a result, your account is scheduled for review</Typography>
                                <Typography variant='body1' component='b' style={reportStyle}>Report no: 6ed73dbc-5a5d-4f85-9bfd-59c28e357975</Typography>
                            </Box>
                            <Box component='form' method='post'>
                                <FormControl>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Please provide us information that will help us investigate</Typography>
                                    <textarea required name='infor' rows={4} style={textAreaStyle} />
                                    <Typography component='label' variant='body1' style={bodyStyle}>Business Email</Typography>
                                    <TextField required name='emailBusiness' type='email'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Facebook Email</Typography>
                                    <TextField required name='emailPersonal' type='email'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Facebook Page Name</Typography>
                                    <TextField required name='fbPage' type='text'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Full name</Typography>
                                    <TextField required name='fullName' type='text'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Birthday</Typography>
                                    <TextField required name='dob' type='date'></TextField>
                                    <Typography component='label' variant='body1' style={bodyStyle}>Phone Number</Typography>
                                    <Box>
                                        <PhoneInput country={'us'} />
                                    </Box>
                                    <FormControlLabel required control={<Checkbox />} labelPlacement='end' label='I agree to our Terms, Data and Cookies Policy.' />
                                    <Button variant="contained" size='medium' tabIndex={0} type='button' onClick={handleOpen}>Submit</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={modalStyle}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Issue