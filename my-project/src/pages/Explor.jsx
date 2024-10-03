import React from 'react';
import { Input, Card, Typography, Button } from '@material-tailwind/react';

const Explor = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Search Input */}
      <div className="max-w-3xl mx-auto">
        <Input 
          type="text" 
          color="blue" 
          placeholder="Search X" 
          className="mb-6"
        />
        
        {/* Results Section */}
        <div className="space-y-6">
          {/* Example Result */}
          {[...Array(5)].map((_, index) => (
            <Card key={index} shadow={true} className="p-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                User {index + 1}
              </Typography>
              <Typography variant="paragraph" color="gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button 
                variant="text" 
                color="blue" 
                className="mt-4">
                Follow
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explor;
