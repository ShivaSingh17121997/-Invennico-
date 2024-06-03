import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleUserPage() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        if (id) {
            axios.get(`https://invencco-backend-9.onrender.com/userDetails/get/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch((error) => {
                    console.error("Error fetching user:", error);
                });
        }
    }, [id]);

    if (!data) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="user-container">
            <h1 className="title">User Details</h1>
            <div className="user-card">
                <p><strong>First Name:</strong> {data.firstName}</p>
                <p><strong>Last Name:</strong> {data.lastName}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Status:</strong> {data.status}</p>
                <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
                <p><strong>Address:</strong> {data.address}</p>
            </div>
        </div>
    );
}
