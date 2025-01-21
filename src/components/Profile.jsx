import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("/api/profile")
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <img
          className="w-24 h-24 rounded-full mb-4 md:mb-0"
          src={"https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"}
          alt={profileData.name}
        />
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Connect
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Message
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">{profileData.name}, {profileData.age}</h2>
        <p className="text-gray-600">{profileData.location}</p>
        <p className="text-gray-600">{profileData.jobTitle}</p>
        <p className="text-gray-600">{profileData.education}</p>
      </div>

      {/* Stats */}
      <div className="flex justify-around text-center">
        <div>
          <p className="text-xl font-bold">{profileData.friends}</p>
          <p className="text-gray-600">Friends</p>
        </div>
        <div>
          <p className="text-xl font-bold">{profileData.photos}</p>
          <p className="text-gray-600">Photos</p>
        </div>
        <div>
          <p className="text-xl font-bold">{profileData.comments}</p>
          <p className="text-gray-600">Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;