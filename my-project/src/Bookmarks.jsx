import React, { useState } from 'react';

// Sample bookmarks data
const sampleBookmarks = [
  { id: 1, title: 'React Hooks Overview', description: 'Understanding the basics of React Hooks' },
  { id: 2, title: 'Tailwind CSS Guide', description: 'Learn how to style applications with Tailwind CSS' },
  { id: 3, title: 'JavaScript Promises', description: 'Master asynchronous JavaScript with Promises' },
];

const Bookmarks = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 py-10">
        
        {/* Toggle Button for Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white dark:bg-yellow-500 rounded"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <div className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Bookmarks
          </h1>
          
          {/* Bookmarked Items List */}
          <div className="space-y-4">
            {sampleBookmarks.map((bookmark) => (
              <div key={bookmark.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow">
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  {bookmark.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {bookmark.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
