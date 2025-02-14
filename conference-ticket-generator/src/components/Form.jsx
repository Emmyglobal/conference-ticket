import React, { useState } from "react";
import "../App.css";
import { useDropzone } from "react-dropzone";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ticket from "./Ticket";


function Form() {
    // Use states for all set functions
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            const uploadedFile = acceptedFiles[0];

            if (uploadedFile){
                setFile(uploadedFile);
        

            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(uploadedFile);
            }
        },
    });

    return(
        <>
        <div>
            <form action="" className="form-cont">
                <div className="inputs">
                    <div>
                        <p>Upload Profile Photo</p>
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        { !preview ? (
                            <div>
                                <FaCloudDownloadAlt className="cloud-icon" />
                                <p>Drag & drop or click to upload</p>
                            </div> 
                            ) : (
                                <img src={preview} alt="Preview" className="preview-img"/>
                        )}
                    </div>
                    </div>
                    <div><p>Enter your name</p><input type="text" size="40" /></div>
                    <div><p>Enter your email *</p><input type="email" placeholder="hello@avloflagos.io" size="40"/></div>
                    <div><p>About the project</p><textarea placeholder="textarea" rows="4" cols="40"></textarea></div>
                    <div className="btn-class">
                        <button className="cancel">Back</button>
                        <Link to="/selection/form/ticket">
                            <button type="submit" >Get My Free Tickets</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};
export default Form;