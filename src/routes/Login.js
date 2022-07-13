import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom"
import { gql, useMutation } from "@apollo/client";
import { TextField, Stack, Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

const TRY_LOGIN = gql`
    mutation M($name: String!, $password: String!) {
        TryLogin(name: $name, password: $password) {
            success,
            token,
            errors {
                message
            }
        }
    }
`

// few instances, so okay to have helper methods.
export default function Login() {
    let [Uname, SetUname] = useState("");
    let [Pass, SetPass] = useState("");
    let [JustCalled, SetJustCalled] = useState(false)
    const [TryLoginMut, { data, loading, err }] = useMutation(TRY_LOGIN)
    const UpdateUName = (ev) => { SetUname(ev.target.value); }
    const UpdatePass = (ev) => { SetPass(ev.target.value); }
    const TryLogin = () => {
        TryLoginMut({ variables: { name: Uname, password: Pass } })
        // clear username and password
        SetUname("")
        SetPass("")
        SetJustCalled(true)
    }
    if (loading) return <h1>LOADING</h1>
    if (err) return (<h1>ERROR {err.message}</h1>)
    if (data && JustCalled === true) {
        // will be called twice for some reason
        console.log(data)
        // TODO - put the JWT in local storage.
        if (data.TryLogin.success === true) {
            return <Navigate to="/chat" />
        }
        SetJustCalled(false);
    }
    // TODO: password field should be blanked out.
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
            <Stack direction="column" alignItems="stretch" gap="5px" sx={{ width: "20vw" }}>
                <h1>Chat App</h1>
                <Stack direction="row" alignItems="center" gap="10px">
                    <PersonIcon fontSize="large" />
                    <TextField label="Username" onChange={UpdateUName} sx={{ flexGrow: 1 }} />
                </Stack>
                <Stack direction="row" alignItems="center" gap="10px">
                    <KeyIcon fontSize="large" />
                    <TextField InputProps={{ type: "password" }} label="Password" onChange={UpdatePass} sx={{ flexGrow: 1 }} />
                </Stack>
                <Button variant="contained" onClick={TryLogin} sx={{ width: "100%" }}>Login</Button>
            </Stack>
        </Stack>
    )
}