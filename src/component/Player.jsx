import React from "react";

const Player = ({ data }) => {
  const { name, team, nationality, imageUrl, age } = data;
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-blue-900 to-black p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20">
        {[...Array(36)].map((_, index) => (
          <div
            key={index}
            className={`bg-gray-${index % 2 === 0 ? '800' : '700'}`}
          ></div>
        ))}
      </div>
      {/* Player Card */}
      <div className="relative max-w-full max-h-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden z-10 flex flex-col">
        <img
          src={imageUrl}
          className="w-full h-2/3 object-cover rounded-t-2xl"
          alt={name}
        />
        <div className="flex-1 p-6 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">{name}</h2>
          <p className="text-center text-gray-600 mb-4">{nationality}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-yellow-500 text-sm font-medium">TEAM</span>
              <span className="text-xl font-bold text-gray-900">{team}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xl font-bold text-gray-900">{age} y</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
