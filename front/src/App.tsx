import {ChangeEvent, useEffect, useState} from "react";
import {IconButton, LinearProgress, Stack, TextField, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import UserCard from "./components/UserCard/UserCard.tsx";
import "./App.css";

export type UserType = {
    address: string;
    department: string;
    email: string;
    hire_date: string;
    name: string;
    phone: string;
    position_name: string;
}

const URL = "http://localhost:3000/";

const App = () => {

    const [users, setUsers] = useState<UserType[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const data = await fetch(URL);
            if (!data.ok) {
                new Error(`HTTP error! Status: ${data.status}`);
            }
            const users = await data.json();
            setUsers(users);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(true);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const filterUsers = (evt: ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value.toLowerCase();

        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value));

        setFilteredUsers(filteredUsers);
    }

    if (error) {
        return <Typography>Произошла ошибка, перезагрузите пожалуйста страницу.</Typography>
    }

    const usersData = filteredUsers.length > 0 ? filteredUsers : users;

    return (
        <>
            <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                autoComplete='off'
                placeholder="Поиск пользователей"
                sx={{
                    border: "1px solid #D4DEFE",
                    outline: "none",
                    borderRadius: "30px",
                    marginBottom: "auto",
                    overflow: "hidden",
                    color: "red",
                    "& fieldset": {border: 'none'},

                    "input": {
                        color: "#8189A3",
                        borderRadius: "30px",
                    },

                    "button": {
                        padding: "8px",
                        outline: "none",
                    },
                }}
                disabled={loading}
                onChange={filterUsers}
                InputProps={
                    {
                        endAdornment: (
                            <IconButton sx={{color: "#432EAB"}}>
                                <SearchIcon/>
                            </IconButton>
                        ),
                    }
                }
            />
            {loading ? (
                <LinearProgress sx={{marginTop: "30px"}}/>
            ) : <Stack sx={{marginTop: "30px"}} spacing={{xs: 2, lg: 4}} direction="row" useFlexGap flexWrap="wrap">
                {usersData.map((user, index) => (
                    // Использование индекса в качестве ключа разрешено согласно документации React,
                    // так как мы не собираемся поменять пользователей местами, в этом кейсе можно.
                    <UserCard key={index} {...user}/>
                ))}
            </Stack>}
        </>
    );
};

export default App;