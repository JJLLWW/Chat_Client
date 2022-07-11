import React from "react";
import { gql, useQuery } from "@apollo/client";
import { TextField } from "@mui/material";

const QUERY_USERS = gql`
    query Q {
        GetUser(name: "Test User") {
            name
            email
            errors {
                message
            }
        }
    }
`;

export default function Login() {
    return (
        <TextField label="Username" />
    )
}

// export default function Login() {
//     const { loading, error, data } = useQuery(QUERY_USERS)
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error!</p>
//     console.log(data)
//     return (
//         <div>
//             <h1>Login</h1>
//             <div>
//                 <h2>{data.GetUser.name}</h2>
//                 <h2>{data.GetUser.email}</h2>
//             </div>
//         </div>
//     )
// }