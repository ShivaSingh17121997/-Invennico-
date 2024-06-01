import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleUserPage() {
    const [data, setData] = useState(null); // Initialize with null for a single user
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
    }, [id]); // Add id to the dependency array

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Single User Page</h1>
            <div>
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
