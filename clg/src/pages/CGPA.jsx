import { useEffect, useState } from "react";
import SubjectRow from "../components/SubjectRow";
import ResultCard from "../components/ResultCard";

export default function CGPA() {
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem("subjects");

    return saved
      ? JSON.parse(saved)
      : [
          {
            credits: "",
            gradePoint: "",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        credits: "",
        gradePoint: "",
      },
    ]);
  };

  const deleteSubject = (index) => {
    setSubjects(
      subjects.filter((_, i) => i !== index)
    );
  };

  const handleChange = (
    index,
    field,
    value
  ) => {
    const updated = [...subjects];

    updated[index][field] = value;

    setSubjects(updated);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credits = Number(subject.credits);
      const grade = Number(subject.gradePoint);

      if (credits && grade >= 0) {
        totalCredits += credits;
        totalPoints += credits * grade;
      }
    });

    if (totalCredits === 0) return "0.00";

    return (
      totalPoints / totalCredits
    ).toFixed(2);
  };

  const cgpa = calculateCGPA();
  const totalsubject = subjects.length;

  const resetAll = () => {
    setSubjects([
      {
        credits: "",
        gradePoint: "",
      },
    ]);
  };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-slate-50">
<h1 className=" m-3 flex items-center">
  <img
          src="/Logo.png"
          alt="KCE Logo"
          className="w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain"
        />
        <p className="mt-[5px] text-xl sm:text-2xl md:text-3xl font-extrabold  text-[#CA6A27] tracking-wide ">CE Portal</p>
</h1>
  {/* CENTER CONTENT */}
  <div className="flex flex-1 justify-center items-center p-5">
    
    <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-3xl">

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-amber-600">
        Cumulative Grade Point Average Calculator
      </h1>

      {subjects.map((subject, index) => (
        <SubjectRow
          key={index}
          index={index}
          subject={subject}
          handleChange={handleChange}
          deleteSubject={deleteSubject}
          canDelete={subjects.length > 1}
        />
      ))}

      <div className="flex justify-end gap-4 mt-6 flex-wrap">
        <button
          onClick={resetAll}
          className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
        >
          Reset
        </button>

        <button
          onClick={addSubject}
          className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl bg-amber-600 text-white font-medium hover:bg-amber-700 shadow-md transition"
        >
          + Add Subject
        </button>
      </div>

      <ResultCard totalsubject={totalsubject} cgpa={cgpa} />

    </div>

  </div>

  {/* FOOTER */}
  <div className="text-center bg-slate-100 text-xs sm:text-sm text-slate-400 py-4 border-t">
    <p>© {new Date().getFullYear()} KCE Portal • Built with React</p>
    <p className="text-[10px] sm:text-xs mt-1">
      Designed and Developed by Ravi Prasath
    </p>
  </div>

</div>
    </>
  );
}