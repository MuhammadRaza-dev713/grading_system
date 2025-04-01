import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ExamCreation = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold">Create Exam</h1>
      </div>
    </div>
  );
};

export default ExamCreation;
