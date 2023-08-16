import React from "react";
import welcome from "welcome.webp";

function welcome() {
    return(
        <div className="img">
            <img src={welcome} alt="welcome img" />
        </div>
    );
}
export default welcome