import { Link } from "react-router-dom";
import "../App.css"


function Selection(){
    return(
        <>
            <div className="major">
                <div className="major1">
                    <div><h1>Logo</h1></div>
                    <div>
                        <ul>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">My Tickets</a></li>
                            <li><a href="#">About Projects</a></li>
                        </ul>
                    </div>
                    <div><button type="submit">MY TICKETS</button></div>
                </div>
                <div className="major2">
                    <div className="major21">
                        <h2>Ticket Selection</h2>
                        <h4>Step 1/3</h4>
                        <input type="range"/>
                    </div>
                    <div className="major22">
                        <div className="major223">
                            <div className="inner1">
                                <h2>TECHEMBER FEST "25</h2>
                                <p>Join us for an unforgetable Experience at Orbittech! Secure your spot now.</p>
                                <p>Event Location || March 15, 2025 | 7:00pm</p>
                            </div>
                            <div className="inner2"><hr /></div>
                            <div className="inner3">
                                <h4>Select Ticket Type</h4>
                                <div className="inner31">
                                    <div className="box"></div>
                                    <div className="box"></div>
                                    <div className="box"></div>
                                </div>
                            </div>
                            <div className="inner4">
                                <h4>Number of Tickets</h4>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="inner5">
                                <button type="submit" className="cancel">Cancel</button>
                                <button type="submit">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Selection;