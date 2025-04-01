import { useState } from "react";

const FileUploader = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
