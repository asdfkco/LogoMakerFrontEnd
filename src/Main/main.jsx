import React, { useState } from "react";
import { Backg,Container,Input, Bigtitle, Button, Flx, Form, Formdiv, Grid, Smalltitle, Spac, Text1, Text2 } from "./main_cs";
import axios from "axios";


function MainPg(){

    const [Email,setEmail] = useState("");

    const setEmail_f = (e) =>{
        e.preventDefault();
        setEmail(e.target.value);
    }

    const submitHandler = (e) =>{
        let body ={
            email:Email
        }

        axios
        .post("http://localhost:8080/emailAuth",body)
        .then((res)=>console.log(res))
        
    }

    return (
        <>

        {/* 
        배경
        https://pixabay.com/videos/veil-wave-wind-cloth-water-loop-91087/ 
        https://www.shutterstock.com/ko/video/clip-1098392443-michael-angelo-bust-sculpture-motion-graphics-3d
        */}
        {/* 내일 자격증 1학년때 밀린거 제출하기 */}

            <Backg>
                <Container>
                    <Grid>
                        <Flx>
                            <Spac>
                                <Bigtitle>
                                    You Want Make Ai Image?.
                                </Bigtitle>
                                <Smalltitle>
                                    Join us and take control of your inbox. Fast, secure, and designed for modern life.
                                </Smalltitle>
                            </Spac>
                            <Formdiv>
                                <Form onSubmit={submitHandler}>
                                    <Input autoFocus placeholder="Please enter your e-mail" type="email" value={Email} onChange={setEmail_f}></Input>
                                    <Button type="submit">Make!</Button>
                                </Form>
                                <Text1>Get ready to redefine your email experience.</Text1>
                                <Text2 href="#!">Terms & Conditions</Text2>
                            </Formdiv>
                        </Flx>
                    </Grid>
                </Container>
            </Backg>
        </>
    )
}

export default MainPg