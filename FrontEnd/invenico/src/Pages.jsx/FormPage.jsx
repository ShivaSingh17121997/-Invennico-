import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, MenuItem, Select } from "@mui/material";
import axios from "axios";

const FormPage = ({ open, handleClose, user, handleSave }) => {
    const [formData, setFormData] = useState(user || {});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        axios.post("http://localhost:8090/userDetails", formData) // Corrected POST request
            .then((res) => {
                console.log(res);
                handleSave(formData);
                handleClose();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
            <DialogContent>
                <TextField name="firstName" label="First Name" value={formData.firstName || ""} onChange={handleChange} fullWidth />
                <TextField name="lastName" label="Last Name" value={formData.lastName || ""} onChange={handleChange} fullWidth />
                <TextField name="email" label="Email" value={formData.email || ""} onChange={handleChange} fullWidth />
                <Select name="status" value={formData.status || ""} onChange={handleChange} fullWidth>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
                <TextField name="phoneNumber" label="Phone Number" value={formData.phoneNumber || ""} onChange={handleChange} fullWidth />
                <TextField name="address" label="Address" value={formData.address || ""} onChange={handleChange} fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormPage;
