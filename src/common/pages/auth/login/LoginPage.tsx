import {FormEvent, useEffect, useState} from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";
import Input from "@/common/components/inputs/input";

import * as styles from "../AuthPages";
import axios from "axios";
import { isTokenValid } from "../AuthPages.functions";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isTokenValid()) {
            router.push("/main");
        }
    }, [router]);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', { email, password });
            alert(`Успешный вход! Токен: ${response.data.access_jwt_token}`);
            console.log(`Успешный вход! Токен: ${response.data.access_jwt_token}`);
            localStorage.setItem('accessJwtToken', response.data.access_jwt_token);
            localStorage.setItem('refreshJwtToken', response.data.refresh_jwt_token);
            const returnMain = () => {
                void router.push("/main");
            };
            returnMain();
        } catch (error: any) {
            alert("Try again, something went wrong!\n"+error.response.data.error_message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.textContent}>
                    <Typography variant="h4Medium">Вхід</Typography>
                    <Typography variant="body2">
                        З поверненням! Заповни інформацію в полях
                    </Typography>
                </Box>
                <Box sx={styles.inputContainer}>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Пошта"
                        type="email"
                        isRequired
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Пароль"
                        type="password"
                        isRequired
                    />
                </Box>
                <Box sx={styles.buttonContent}>
                    <Button type="submit" text="Увійти" variant="contained" />
                    <Box sx={styles.smallTextContent}>
                        <Typography variant="body1">Немає аккаунту?</Typography>
                        <HyperLink
                            source="./registration"
                            text="Зареєструйся прямо зараз"
                        />
                    </Box>
                </Box>
            </Box>
        </form>
    );
};

export default LoginPage;
