import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FileUploader from "../components/FileUploader";

const UploadAnswerSheet = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold">Upload Answer Sheet</h1>
        <FileUploader onFileUpload={(file) => console.log(file)} />
      </div>
    </div>
  );
};

export default UploadAnswerSheet;
