import React from 'react'

const Guide = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 relative m-40 gap-14 h-[80vh]">
            <div className=" border-gray-600 rounded-lg shadow-xl min-h-24 ">
                <img className="h-2/3 w-full mb-4" src="assets/gallery.jpg" alt="Choose from gallery" />
              <div className="pl-3">
              <h2 className="text-2xl text-slate-950 mb-4 ">Step 1:</h2>
                <p>Click/ Select the satellite/drone image from gallery. </p>

              </div>
            </div>
            <div className="flex flex-row border-gray-600 rounded-lg shadow-xl min-h-11 col-span-2">
                <img className="w-3/5 mb-4 rounded-xl" src="assets/skeleton-loading.png" alt="Choose from gallery" />
                <div className='pl-3'>
                    <h2 className="pt-24 text-2xl text-slate-950 mb-4 ">Step 2:</h2>
                    <p class>Upload the desired forest/ tree image from local device. </p>
                </div>
            </div>
            <div className="flex flex-row border-gray-600 rounded-lg shadow-xl min-h-11 col-span-2">
                <img className="w-3/5 mb-4 rounded-xl" src="assets/uploadImage.jpg" alt="Choose from gallery" />
                <div className='pl-3'>
                    <h2 className="pt-24 text-2xl text-slate-950 mb-4 ">Step 3:</h2>
                    <p className='max-w-80'>Click on the proceed button after uploading the image and wait for a few minutes. </p>
                </div>
            </div>
            <div className=" border-gray-600 rounded-lg shadow-xl min-h-24 ">
                <img className="h-2/3 w-full mb-4" src="assets/skeleton-loading.png" alt="Choose from gallery" />
              <div className='pl-3'>
              <h2 className="text-2xl text-slate-950 mb-4 ">Step 4:</h2>
                <p>View the most accurate results in few clicks ! </p>

              </div>
            </div>
        </div>

    </section>
  )
}

export default Guide
