import React from 'react';

const Guide = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 relative m-40 gap-14 h-[80vh]">
        
        {/* Step 1 */}
        <div className="border border-green-500 rounded-lg shadow-xl min-h-24">
          <img className="h-2/3 w-full mb-4" src="assets/gallery.jpg" alt="Choose from gallery" />
          <div className="pl-3">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Step 1:</h2>
            <p className="text-gray-800 font-medium">Click/ Select the satellite or drone image from the gallery.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-row border border-blue-500 rounded-lg shadow-xl min-h-11 col-span-2">
          <img className="w-3/5 mb-4 rounded-xl" src="assets/upload_image_step3.jpg" alt="Choose from gallery" />
          <div className="pl-3">
            <h2 className="pt-24 text-2xl font-bold text-blue-700 mb-4">Step 2:</h2>
            <p className="text-gray-800 font-medium">Upload the desired forest/tree image from your local device.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-row border border-yellow-500 rounded-lg shadow-xl min-h-11 col-span-2">
          <img className="w-3/5 mb-4 rounded-xl" src="assets/uploadImage.jpg" alt="Choose from gallery" />
          <div className="pl-3">
            <h2 className="pt-24 text-2xl font-bold text-yellow-600 mb-4">Step 3:</h2>
            <p className="text-gray-800 font-medium max-w-80">Click on the proceed button after uploading the image and wait for a few minutes.</p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="border border-purple-500 rounded-lg shadow-xl min-h-24">
          <img className="h-2/3 w-full mb-4" src="assets/skeleton-loading.png" alt="Choose from gallery" />
          <div className="pl-3">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Step 4:</h2>
            <p className="text-gray-800 font-medium">View the most accurate results in just a few clicks!</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Guide;


