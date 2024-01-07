import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import InformationBar from "@/common/pages/main/information-bar";

import * as styles from "./Main.styles";
import {getEmail, isTokenValid} from "@/common/pages/auth/AuthPages.functions";
import InputDropdown from "@/common/components/inputs/input-dropdown";
import Editor from "@monaco-editor/react";
import Button from "@/common/components/button";
import axios from "axios";

export const languages = [
    {
        value: "cpp",
        label: "C++",
    },
    {
        value: "csharp",
        label: "C#",
    },
    {
        value: "go",
        label: "Go",
    },
    {
        value: "java",
        label: "Java",
    },
    {
        value: "javascript",
        label: "JavaScript",
    },
    {
        value: "julia",
        label: "Julia",
    },
    {
        value: "kotlin",
        label: "Kotlin",
    },
    {
        value: "python",
        label: "Python",
    },
    {
        value: "rust",
        label: "Rust",
    },
    {
        value: "typescript",
        label: "TypeScript",
    },
];

export const themes = [
    {
        value: "light",
        label: "Світла",
    },
    {
        value: "vs-dark",
        label: "Темна",
    }
]

const getInitialCode = (language: string) => {
    switch (language) {
        case 'cpp':
            return `\
#include <iomanip>
#include <iostream>
using namespace std;

int main()
{
  cout << "Write your code here" << endl;
}
`;
        case 'csharp':
            return `\
using System;

class HelloWorld {
    static void Main() {
        Console.WriteLine("Write your code here");
    }
}
`;
        case 'go':
            return `\
package main
import "fmt"

func main() {
    fmt.Println("Write your code here")
}
`;
        case 'java':
            return `\
public class Main {
    public static void main(String[] args) {
        System.out.println("Write your code here");
    }
}
`;
        case 'javascript':
            return `\
let x = myFunction(4, 3);
console.log(x);

function myFunction(a, b) {
  return a * b;
}
`;
        case 'julia':
            return `\
print("Write your code here")
`;
        case 'kotlin':
            return `\
fun main(args : Array<String>) {
    println("Write your code here")
}
`;
        case 'python':
            return `\
print ('Write your code here')
`;
        case 'rust':
            return `\
fn main() {
    println!("Write your code here");
}
`;
        case 'typescript':
            return `\
const user = {
    firstName: 'John',
    lastName: 'Smith'
}
console.log(user);
`;
        default:
            return '// Write your code here...';
    }
};
interface ExecutedCodeResponse {
    exit_code: number;
    executed: string;
}
const MainPage = () => {
    const [language, setLanguage] = useState("javascript");
    const [theme, setTheme] = useState("light");
    const [initialCode, setInitialCode] = useState(getInitialCode(language));
    const [executedCodeResponse, setExecutedCodeResponse] = useState<ExecutedCodeResponse | null>(null);
    const [code, setCode] = useState(initialCode);
    const router = useRouter();

    useEffect(() => {
        if (!isTokenValid()) {
            router.push("/");
        }
        setInitialCode(getInitialCode(language));
    }, [language, router]);

    const handleShowCode = async () => {
        const email = getEmail();
        try {
            await axios.post('http://localhost:8080/api/v1/student', {
                language, code, email
            });
            alert(`Код відправлено в базу успішно!`);
        } catch (error: any) {
            if (error.response) {
                alert("Try again, something went wrong!\n" + error.response.data.error_message);
            } else {
                alert("Try again, something went wrong!!!\n" + error);
            }
        }
        // try {
        //     const resp = await axios.get('http://localhost:8080/api/v1/student');
        //     console.log(resp);
        // }
        // catch (error: any) {
        //     console.error('Error fetching student groups\n', error);
        // }
    };

    const handleExecuteCode = async () => {
        try {
            console.log(language, code);
            const response = await axios.post('http://localhost:8080/api/v1/student/run', {
                language, code
            });
            console.log(response);
            setExecutedCodeResponse(response.data);
        } catch (error: any) {
            if (error.response) {
                alert("Try again, something went wrong!\n" + error.response.data.error_message);
            } else {
                alert("Try again, something went wrong!!!\n" + error);
            }
        }
    };

    const handleEditorChange = (value: any) => {
        setCode(value);
    };

    return (
        <Box sx={styles.wrapper}>
            <InformationBar/>
            <Box sx={styles.right}>
                <Box sx={styles.editor}>
                    <Box sx={styles.panel}>
                        <Box sx={styles.dropdown}>
                            <InputDropdown
                                options={languages}
                                value={language}
                                size="small"
                                onChange={(e) => setLanguage(e.target.value)}
                                placeholder=""
                            />
                            <InputDropdown
                                options={themes}
                                value={theme}
                                size="small"
                                onChange={(e) => setTheme(e.target.value)}
                                placeholder=""
                            />
                        </Box>
                        <Box sx={styles.buttons}>
                            <Button
                                text="Save"
                                size="small"
                                onClick={handleShowCode}
                            />
                            <Button
                                text="Run"
                                size="small"
                                onClick={handleExecuteCode}
                            />
                        </Box>
                    </Box>
                    <Editor
                        height="90vh"
                        language={language}
                        theme={theme}
                        value={initialCode}
                        onChange={handleEditorChange}
                    />
                </Box>
                <Box sx={styles.transput}>
                    <Box>
                        <Typography variant="body2">
                            Input...
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" component="div">
                            Output...
                            {executedCodeResponse && (
                                <div>
                                    <div>Exit code: {executedCodeResponse.exit_code}</div>
                                    <div>Executed: {executedCodeResponse.executed}</div>
                                </div>
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainPage;
