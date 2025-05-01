import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UploadSection = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <section className="text-center py-10">
      <h1 className="text-5xl text-slate-950 font-semibold mb-10">Upload Image Here!</h1>

      <div className="flex flex-col items-center gap-6">
        <label
          htmlFor="file_input"
          className="inline-block px-6 py-3 text-white bg-black rounded cursor-pointer hover:bg-blue-700 transition"
        >
          Upload Image
        </label>
        <input
          id="file_input"
          type="file"
          accept="image/jpeg, image/jpg, image/png"
          className="hidden"
          onChange={handleFileChange}
        />

        {uploadSuccess && (
          <p className="text-green-600 font-semibold">✅ Successfully uploaded!</p>
        )}

        <Link to="/some-path">
          <button
            type="button"
            className="px-5 py-2 bg-lime-500 hover:bg-lime-700 text-black text-sm rounded transition"
          >
           Proceed
          </button>
        </Link>
      </div>
    </section>
  );
};

export default UploadSection;
