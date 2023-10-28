import React, {useEffect, useState} from "react";

function Profile() {
    // Define state for profile information
    const initialProfileData = {
        name: "Your Name",
        surname: "Your Surname",
        birthday: "Your Birthday",
        email: "Your Email",
        password: "Your Password",
    };

    const handleSave = () => {

        setProfileData(initialProfileData);
        setIsSaved(true);
    };
    const [profileData, setProfileData] = useState(initialProfileData);
    const [isSaved, setIsSaved] = useState(false); // State to track if the data is saved

    useEffect(() => {
        console.log("Profile component is mounted");

        return () => {

            console.log("Profile component is unmounted");
        };
    }, []);


    useEffect(() => {
        console.log("Profile data has been updated:", profileData);
    }, [profileData]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="profile-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="surname">Surname:</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={profileData.surname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        value={profileData.birthday}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={profileData.password}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button className="profile-save-button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default Profile;
