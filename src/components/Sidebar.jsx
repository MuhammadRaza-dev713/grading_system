import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 space-y-6">
      <h2 className="text-2xl font-semibold">Menu</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="block hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/upload" className="block hover:text-gray-300">Upload Answer Sheet</Link></li>
        <li><Link to="/exam-creation" className="block hover:text-gray-300">Create Exam</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
