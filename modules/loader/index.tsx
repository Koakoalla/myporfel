import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [resources, setResources] = useState([
    { name: '/package.json', loaded: false },
    { name: '/node_modules', loaded: false },
    { name: '/app.tsx', loaded: false },
    { name: '/modules/index.tsx', loaded: false },
    { name: '/css/koakoalla.css', loaded: false },
    { name: '/projects/index.tsx', loaded: false }
  ]);

  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResources((prevResources) => {
        const newResources = [...prevResources];
        const indexToUpdate = newResources.findIndex(r => !r.loaded);
        if (indexToUpdate !== -1) {
          newResources[indexToUpdate].loaded = true;
          setLoadingProgress(((indexToUpdate + 1) / newResources.length) * 100);
        }
        return newResources;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">

      <div className="w-4/5 md:w-2/3 lg:w-1/2 flex flex-col items-center">
        <div className="w-full h-2 bg-gray-700 rounded-full mb-4">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>

        <div className="relative">
          <span className="absolute top-0 left-0 text-red-500 animate-glitch" aria-hidden="true">
            [ ] loading content resources...
          </span>
          <span className="absolute top-0 left-0 text-blue-500 animate-glitch" aria-hidden="true">
            [ ] loading content resources...
          </span>
          <span className="relative text-white">
            [ ] loading content resources...
          </span>
        </div>

        <div className="space-y-2">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-4 ${resource.loaded ? 'text-green-500' : 'text-gray-500'}`}>
                {resource.loaded ? '✓' : '○'}
              </span>
              <span>{resource.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Loader;