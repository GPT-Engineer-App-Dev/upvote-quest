import React from 'react';
import { ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>👍 {story.points} points</span>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          Read more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default StoryCard;