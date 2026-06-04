import { FaBook } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";

export default function ResultCard({
  cgpa,
  totalsubject,
}) {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Calculation Summary
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        
        <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-5 border border-slate-200">
          <div>
            <p className="text-slate-500 text-sm">
              Total Subjects
            </p>
            <h3 className="text-3xl font-bold text-slate-800">
              {totalsubject}
            </h3>
          </div>

          <FaBook className="text-4xl text-slate-400" />
        </div>

        <div className="flex items-center justify-between bg-indigo-50 rounded-2xl p-5 border border-indigo-100">
          <div>
            <p className="text-indigo-600 text-sm">
               CGPA
            </p>
            <h3 className="text-3xl font-bold text-indigo-700">
              {cgpa}
            </h3>
          </div>

          <PiGraduationCapFill className="text-4xl text-indigo-500" />
        </div>

      </div>
    </div>
  );
}