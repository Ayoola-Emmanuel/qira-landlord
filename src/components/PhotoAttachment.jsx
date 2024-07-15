import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PhotoAttachment = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles([...selectedFiles, ...fileArray]);

      const newImagePreviews = fileArray.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews([...imagePreviews, ...newImagePreviews]);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...imagePreviews];
    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className="rounded-md card-shadow p-5 mb-5">
      <h4 className="text-[#080746] font-medium text-lg mb-3">
        Photo Attachment
      </h4>

      <div className="mb-5 w-full">
        <div
          className="select flex items-center justify-between relative border border-[#C6C6C6] rounded-md"
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full h-full p-2.5"
            id="uploadFile"
          />
          <button className="absolute bg-primary text-white rounded right-0.5 top-0.5 px-6 py-2.5">
            Browse
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {imagePreviews.map((preview, index) => (
          <div key={index} className="relative mb-2 max-w-28 max-h-28">
            <img
              src={preview}
              alt={`Selected ${index + 1}`}
              className="rounded-md w-full h-full"
            />
            <button
              className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-1.5"
              onClick={() => handleRemoveFile(index)}
            >
              <IoClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAttachment;
