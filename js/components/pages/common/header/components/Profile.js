import React from "react";

export default class Profile extends React.Component {
    render() {
        const profileStyle = {
            "border": "1px solid blue"
        }
        return (
           <div style={profileStyle}>
               <h3>soy el perfil</h3>
           </div>
        );
    }
}
