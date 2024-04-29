import React, { useState } from "react";

const Profile = () => {
    const [profile, useProfile] = useState(3);
    return (
        <div className="profile">
            <h1>Profile Component</h1>
            { 
            profile === 1 ? <h2>Welcome Guest 1</h2> 
            : profile === 2 ? <h3>Welcome Guest 2</h3> 
            : profile === 3 ? <h3>Welcome Guest 3</h3> 
            : <h3>Enter valid number</h3> }    
            
        </div>
    )
}

export default Profile;