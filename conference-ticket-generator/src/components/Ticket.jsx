import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function Ticket() {
    return(
        <>
            <div className="main">
                <div className="main-hero">
                    <div className="hero-h">
                        <h5>Ready</h5>
                        <h5>3/3</h5>
                    </div>
                    <input type="range" name="" id="" />
                    <div className="jumb">
                        <h4>Your Ticket is Booked</h4>
                        <p>You can download or check your email for a copy</p>
                    </div>
                    <div className="in-hero">
                        <div className="in-in">
                            <h2>Techember Fest "25</h2>
                            <p>04,RUmen Road, Ikoyi, Lagos</p>
                            <p>March 15, 20025 | 7:00pm</p>
                            <img src="../public/images/pixx.png" alt="" />
                            <div className="contents">
                                <table border="1px">
                                    <tr>
                                        <td>
                                            <p>Enter Your Name</p>
                                            AVI Chukwu
                                        </td>
                                        <td>
                                            <p>Enter Your Email:</p>
                                            user@email.com
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Ticket Type</p>
                                            <p>VIP</p>
                                        </td>
                                        <td>
                                            <p>Ticket Type</p>
                                            <p>1</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <p>Special Request?</p>
                                            <p>Nil? or the users sad story they write gets this whole space, Max of three rows</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className="dash"></div>
                            <div className="scanCode"></div>
                        </div>
                    </div>
                    <div className="btn">
                        <button className="cancel">Book Another Ticket</button>
                        <button type="submit">Download Ticket</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
};
export default Ticket;