import { FormEvent, useEffect, useState} from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Button from "@/common/components/button";
import HyperLink from "@/common/components/hyperlink";
import Input from "@/common/components/inputs/input";

import * as styles from "../AuthPages";
import InputDropdown from "@/common/components/inputs/input-dropdown";
import axios from "axios";
import { isTokenValid } from "../AuthPages.functions"

const RegistrationPage = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [groupId, setGroupId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [studentGroups, setStudentGroups] = useState([]);

    interface StudentGroup {
        id: number;
        code: string;
    }

    const fetchStudentGroups = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/groups');
            return response.data;
        }
        catch (error) {
            console.error('Error fetching student groups\n', error);
            return [];
        }
    };


    useEffect(() => {
        if (isTokenValid()) {
            router.push("/main"); // Перенаправление на главную страницу
        }
        (async () => {
            try {
                const groups = await fetchStudentGroups();
                const formattedGroups = groups.map((group: StudentGroup) => ({
                    value: group.id,
                    label: group.code
                }));
                setStudentGroups(formattedGroups);
            } catch (error) {
                console.error('Помилка при завантаженні груп студентів:', error);
            }
        })();
    }, [router]);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            alert('Паролі не співпадають');
            setPassword("");
            setPasswordCheck("");
            return;
        }

        try {
            await axios.post('http://localhost:8080/api/v1/registration', {
                firstName, lastName, email, password, groupId });
            alert(`Реєстрація успішна, тобі залишилося всього лише перевірити і підтвердити пошту`);
            const returnLogin = () => {
                void router.push("/login");
            };
            returnLogin();
        } catch (error: any) {
            alert("Try again, something went wrong!\n"+error.response.data.error_message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={styles.wrapper}>
                <Box sx={styles.textContent}>
                    <Typography variant="h4Medium">Створення акаунта</Typography>
                    <Typography variant="body2">
                        Перший раз на цьому сервісі? Заповни всі поля
                    </Typography>
                </Box>
                <Box sx={styles.inputContainer}>
                    <Box sx={styles.rowInput}>
                        <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            label="Ім'я"
                            type="text"
                            size="small"
                            isRequired
                        />
                        <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Прізвище"
                            type="text"
                            size="medium"
                            isRequired
                        />
                    </Box>
                    <Box sx={styles.rowInput}>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Пошта (@lll.kpi.ua або @kpi.ua)"
                            size="medium"
                            type="email"
                            isRequired
                        />
                        <InputDropdown
                            options={studentGroups}
                            value={groupId}
                            onChange={(e) => setGroupId(e.target.value)}
                            placeholder="Група"
                            size="small"
                            isRequired
                        />
                    </Box>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Пароль"
                        type="password"
                        isRequired
                    />
                    <Input
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        label="Підтвердження пароля"
                        type="password"
                        isRequired
                    />
                </Box>
                <Box sx={styles.buttonContent}>
                    <Button type="submit" text="Зареєструватися" variant="contained" />
                    <Box sx={styles.smallTextContent}>
                        <Typography variant="body1">Вже маєш акаунт?</Typography>
                        <HyperLink source="./login" text="Переходь на сторінку входу" />
                    </Box>
                </Box>
            </Box>
        </form>
    );
};

export default RegistrationPage;
