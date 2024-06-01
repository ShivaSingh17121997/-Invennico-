import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions, MenuItem, Select, Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";

const UserForm = ({ handleClose, user, handleSave }) => {
    const [formData, setFormData] = useState(user || {});
    const [submitting, setSubmitting] = useState(false); // State variable to track form submission

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setSubmitting(true); // Set submitting to true when submitting the form
        axios.post("https://invencco-backend-9.onrender.com/userDetails/post", formData)
            .then((res) => {
                console.log(res);
                handleSave(formData);
                handleClose();
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setSubmitting(false); // Set submitting back to false after submission completes
            });
        setFormData("")
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto" }} open={true} onClose={handleClose}  >
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
            <Backdrop open={submitting} style={{ zIndex: 9999 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default UserForm;
