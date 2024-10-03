import React from 'react';
import { Button, Card, Avatar } from '@material-tailwind/react';
import { FaMapMarkerAlt, FaLink, FaCalendarAlt } from 'react-icons/fa';

const Profile = () => {
  const user = {
    name: 'Elon Musk',
    username: '@olimmaniismim',
    bio: 'Just a owner of Earth, explorer, and lover of tech. #JavaScript #React #TailwindCSS',
    location: 'San Francisco, CA',
    website: 'https://youtube.com',
    joinDate: 'Joined January 2020',
    followers: '5.6k',
    following: '300',
    profileImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/1200px-Elon_Musk_Royal_Society.jpg', // Placeholder for profile image
    coverImage:
      'https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg', // Placeholder for cover image
  };

  const data = [
    {
      tweet: 'This is my Olim Team',
      img: 'https://www.aljazeera.com/wp-content/uploads/2021/09/AP21259065226093.jpg?resize=1170%2C780&quality=80',
    },
    {
      tweet: 'This is Olim Raketa',
      img: 'https://c.files.bbci.co.uk/DA3E/production/_99907855_292872c2-7070-43df-a4bd-b1d4ae468ee9.jpg',
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Image */}
      <div className="relative">
        <img src={user.coverImage} alt="Cover" className="w-full h-56 object-cover" />
        {/* Profile Image */}
        <Avatar
          src={user.profileImage}
          alt="Profile"
          className="absolute bottom-0 left-6 -mb-12 w-32 h-32 border-4 border-white"
        />
      </div>

      {/* Profile Info */}
      <div className="bg-white px-6 pb-8 pt-16 space-y-4 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.username}</p>
          </div>
          <Button color="blue" className="rounded-full">
            Edit Profile
          </Button>
        </div>

        {/* Bio */}
        <p>{user.bio}</p>

        {/* Additional Info */}
        <div className="flex space-x-4 text-gray-500">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaLink />
            <a
              href={user.website}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <FaCalendarAlt />
            <span>{user.joinDate}</span>
          </div>
        </div>

        {/* Followers and Following */}
        <div className="flex space-x-8">
          <div>
            <span className="font-bold">{user.following}</span> Following
          </div>
          <div>
            <span className="font-bold">{user.followers}</span> Followers
          </div>
        </div>
      </div>

      {/* Tweets Section */}
      <div className="mt-6 space-y-6">
        {data.map((_, index) => (
          <Card key={index} className="mx-6 p-4">
            <div className="flex space-x-4">
              {/* Profile Image */}
              <Avatar src={user.profileImage} alt="Profile" className="w-12 h-12" />

              {/* Tweet Content */}
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <span className="font-bold">{user.name}</span>{' '}
                    <span className="text-gray-500">{user.username}</span> ·{' '}
                    <span className="text-gray-500">1h</span>
                  </div>
                  <Button color="lightBlue" variant="text" size="sm" ripple="light">
                    Follow
                  </Button>
                </div>
                <p className="mt-2">{_.tweet}</p>
                <img
                  src={_.img} // Placeholder for tweet image
                  alt="Tweet"
                  className="mt-3 rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Profile;
