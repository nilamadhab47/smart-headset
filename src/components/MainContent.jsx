import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import mainImage from '../assets/mainImage.png'
import detailsImage from '../assets/detailsImage.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';

function MainContent() {

    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const data = { price: 229.99, imageUrl: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U", heading: "Smart VR Headset" }
    const handleClick = async () => {
        try {
            const response = await fetch("https://pay-by-crypto-api-v1-w7dfh.ondigitalocean.app/api/v2/checkout/projectId/video-on-demand", {
                method: 'POST',
            });
            if (response) {
                const responseData = await response.json();
                const sessionId = responseData.sessionId;
                const token = responseData.token;
                const status = responseData.status
                const projectId = responseData.projectId;
                if (sessionId) {
                    const newData = { ...data, sessionId, token, status, projectId }
                    console.log("newdata", newData)
                    console.log("responseData", responseData)
                    const url = new URL("https://payment-gateway.paybycrypto.ch/");
                    for (const [key, value] of Object.entries(newData)) {
                        url.searchParams.set(key, value)
                    }
                    window.location.href = url.toString();
                }
            } else {
                console.error("No session ID")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box sx={{ p: "2% 5%", }} >

            <Box width="100%" sx={{ display: "flex", justifyContent: "space-between" }}>
                <img style={{ width: "45%", height:"800px" }} src={mainImage} alt="mainImage" />
                <Box maxWidth="45%" >
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Typography style={{ fontWeight: "bold", color: "#427C8E" }}>
                            Product Details
                        </Typography>
                        <Typography style={{ opacity: "0.5" }}>
                            Shipping Info
                        </Typography>
                        <Typography style={{ opacity: "0.5" }}>
                            Payment
                        </Typography>
                    </Box>
                    <Box mt="15%" mb="7%" sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography style={{ fontWeight: "bold" }} variant='h4'>${data.heading}</Typography>
                        <IconButton sx={{ color: "yellow" }}>
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <Typography sx={{ color: "black" }}>
                                4.6 / 5.0<span style={{ opacity: "0.5" }}>(556)</span>
                            </Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Typography sx={{ opacity: "0.5" }} lineHeight={1} variant='body3'>Quest 2 requires your Facebook account to log in, making it easy to meet up with friends in VR and discover communities around the world </Typography>
                        <Typography sx={{ opacity: "0.5" }} lineHeight={1} variant='body3'>Next-level Hardware - Make every move count with a blazing-fast processor and our highest-resolution display</Typography>
                        <Typography sx={{ opacity: "0.5" }} lineHeight={1} variant='body3'>All-In-One Gaming - With backward compatibility, you can explore new titles and old favorites in the expansive Quest content library</Typography>
                        <Typography sx={{ opacity: "0.5" }} lineHeight={1} variant='body3'>Immersive Entertainment - Get the best seat in the house to live concerts, groundbreaking films, exclusive events and more</Typography>
                    </Box>

                    <Box mt="100px" sx={{ width: '100%', }}>
                      <img src={detailsImage} alt="detailsImage"/>
                    </Box>

                    <Box my="10%" sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h3">
                            $
                            {data.price}
                        </Typography>
                        <Typography sx={{ color: "yellow", fontSize: "10px", marginLeft: "18px" }}>promo code ?</Typography>
                        <Button onClick={handleClick} variant='contained' sx={{ marginLeft: "20%", padding: "15px 40px", color: "white", background: "#427C8E" }}>
                            <LocalMallIcon sx={{ marginRight: "20px" }} />

                            Checkout
                        </Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default MainContent