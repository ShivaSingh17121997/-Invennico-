import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ handleClose, user, handleSave }) => {
    const [formData, setFormData] = useState(user || {});
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formData.status) newErrors.status = "Status is required";
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone Number is required";
        } else if (!/^\d+$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number is invalid";
        }
        if (!formData.address) newErrors.address = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
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
                setSubmitting(false);
            });
        setFormData({});
    };

    return (
        <div className="dialog">
            <div className="dialog-title">
                <h2>{user ? "Edit User" : "Add User"}</h2>
                <button className="close-button" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="form-content">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        name="status"
                        id="status"
                        value={formData.status || ""}
                        onChange={handleChange}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    {errors.status && <p className="error">{errors.status}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber || ""}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address || ""}
                        onChange={handleChange}
                    />
                    {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className="form-actions">
                    <button type="button" className="button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button type="submit" className="button" disabled={submitting}>
                        {submitting ? <span className="spinner"></span> : "Save"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
