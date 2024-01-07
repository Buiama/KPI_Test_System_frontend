import {useRouter} from "next/router";
import {FormEvent, useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import * as styles from "@/common/pages/auth/AuthPages";
import Input from "@/common/components/inputs/input";
import Button from "@/common/components/button";
import axios from "axios";
import HyperLink from "@/common/components/hyperlink";
import {getEmail, isTokenValid} from "@/common/pages/auth/AuthPages.functions";

const SettingsPage = () => {
    const router = useRouter();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmationNewPassword, setConfirmationNewPassword] = useState("");

    useEffect(() => {
        if (!isTokenValid()) {
            router.push("/");
        }
    }, [router]);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const email = getEmail();
        try {
            await axios.patch('http://localhost:8080/api/v1/student', {
                currentPassword, newPassword, confirmationNewPassword, email });
            alert(`Зміна паролю відбулася успішно!`);
        } catch (error: any) {
            if(error.response) {
                alert("Try again, something went wrong!\n" + error.response.data.error_message);
            }
            else {
                alert("Try again, something went wrong!!!\n"+ error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.textContent}>
                    <Typography variant="h4Medium">Налаштування</Typography>
                    <Typography variant="body2">
                        Для зміни паролю заповни всі поля
                    </Typography>
                </Box>
                <Box sx={styles.inputContainer}>
                    <Input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        label="Пароль"
                        type="password"
                        isRequired
                    />
                    <Input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        label="Новий пароль"
                        type="password"
                        isRequired
                    />
                    <Input
                        value={confirmationNewPassword}
                        onChange={(e) => setConfirmationNewPassword(e.target.value)}
                        label="Підтвердження нового пароля"
                        type="password"
                        isRequired
                    />
                </Box>
                <Box sx={styles.buttonContent}>
                    <Button type="submit" text="Змінити!" variant="contained" />
                    <Box sx={styles.smallTextContent}>
                        <Typography variant="body1">Передумав?</Typography>
                        <HyperLink source="./main" text="Клацай назад" />
                    </Box>
                </Box>
            </Box>
        </form>
    );
};

export default SettingsPage;