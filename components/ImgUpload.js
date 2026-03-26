"use client";

import { useState } from "react";
import axios from "axios";

export default function ImgUpload({ user }) {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    console.log(user);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("image", image, `${user.username}.jpg`);

        try {
            const res = await axios.post(
                "http://localhost:8000/accounts/upload-image/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(res.data);
            alert("Uploaded successfully");

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Upload Image</h2>

            <input type="file" onChange={handleChange} />

            <br /><br />

            {preview && (
                <img
                    src={preview}
                    width="200"
                />
            )}

            <br /><br />

            <button className="btn-prm" onClick={handleUpload}>
                Upload
            </button>

        </div>
    );
}