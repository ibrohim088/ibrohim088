import React from 'react';
import { Card, CardBody, Typography, Avatar, Button,
    CardHeader,
    CardFooter,
    Tooltip, } from '@material-tailwind/react';

const notifications = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      avatar: 'https://img.freepik.com/free-photo/photorealistic-tree-with-branches-trunk-outside-nature_23-2151478133.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid', // Replace with real avatar URL
    },
    message: 'John Doe liked your post.',
    time: '2h',
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      avatar: 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg', // Replace with real avatar URL
    },
    message: 'Jane Smith retweeted your post.',
    time: '4h',
  },
  // Add more notifications as needed
];

const Notifications = () => {
  return (
    <div className="container mx-auto p-4">
        
      <Typography variant="h3" className="mb-4">
        Notifications
      </Typography>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} shadow={true} className="flex items-center p-4">
            <Avatar
              src={notification.user.avatar}
              alt={notification.user.name}
              size="lg"
              className="mr-4"
            />
            <CardBody className="flex-1">
              <Typography variant="h6" className="font-semibold">
                {notification.user.name}
              </Typography>
              <Typography variant="paragraph" className="text-gray-600">
                {notification.message}
              </Typography>
            </CardBody>
            <Typography variant="small" className="text-gray-500">
              {notification.time}
            </Typography>
          </Card>
        ))}
      </div>
        
    
      <div className="space-y-4 mt-5">
        {notifications.map((notification) => (
          <Card key={notification.id} shadow={true} className="flex items-center p-4">
            <Avatar
              src={notification.user.avatar}
              alt={notification.user.name}
              size="lg"
              className="mr-4"
            />
            <CardBody className="flex-1">
              <Typography variant="h6" className="font-semibold">
                {notification.user.name}
              </Typography>
              <Typography variant="paragraph" className="text-gray-600">
                {notification.message}
              </Typography>
            </CardBody>
            <Typography variant="small" className="text-gray-500">
              {notification.time}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
