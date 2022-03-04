import React from "react";
function Comp8(props){
    return(
        <React.Fragment>
            <div className="time1">
                <h1>Function Based Component with props</h1>
                <h4>Hello ,World!</h4>
                <h4>Time is Now:{props.date.toLocaleTimeString()}</h4>
            </div>
        </React.Fragment>

    );
}

export default Comp8;