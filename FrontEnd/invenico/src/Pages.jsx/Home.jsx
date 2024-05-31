// src/components/UserTable.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8090/userDetails/get")
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }, [])


    // Delete function
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/userDetails/delete/${id}`)
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })


    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sn No</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleView(user)}>View</Button>
                                <Button onClick={() => handleEdit(user)}>Edit</Button>
                                <Button onClick={() => handleDelete(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Home;
