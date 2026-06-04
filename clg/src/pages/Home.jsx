import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaFileAlt, FaMoneyBillWave } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100">

<h1 className=" m-3 flex items-center">
  <img
          src="/Logo.png"
          alt="KCE Logo"
          className="w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10 object-contain"
        />
        <p className="mt-[5px] text-xl sm:text-2xl md:text-3xl font-extrabold  text-[#CA6A27] tracking-wide ">CE Portal</p>
</h1>

      <div className="text-center px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-center gap-3 sm:gap-4 m-4 sm:m-8 text-center sm:text-left">
        <img
          src="/Logo.png"
          alt="KCE Logo"
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-35 md:h-35 object-contain"
        />

        <div className="leading-tight">
          <p className="text-xl sm:text-2xl md:text-6xl font-bold text-slate-700 tracking-widest sm:tracking-[6px] md:tracking-[9px]">
            KARPAGAM
          </p>

          <p className="text-xs sm:text-sm md:text-[28px]  text-orange-500 tracking-wider">
            COLLEGE OF ENGINEERING
          </p>

          <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
            Rediscover | Refine | Redefine
          </p>
        </div>
      </div>

        <p className="mt-4 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          A unified academic platform for students to calculate CGPA,
          access results, and manage examination fee payments seamlessly.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

        {/* CGPA */}
        <div
          onClick={() => navigate("/cgpa")}
          className="group cursor-pointer p-[2px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 h-full shadow-xl transition-all duration-300 group-hover:scale-[1.03]">

            <FaGraduationCap className="text-4xl sm:text-5xl text-indigo-600 mb-4 sm:mb-6" />

            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              CGPA Calculator
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mt-2 sm:mt-3">
              Instantly calculate your academic performance with precision.
            </p>

          </div>
        </div>

        {/* RESULTS */}
        <a
          href="https://121.200.52.122/Automation/studentOnline.do?param=login&Id=2"
          target="_blank"
          rel="noreferrer"
          className="group p-[2px] rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 block"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 h-full shadow-xl transition-all duration-300 group-hover:scale-[1.03]">

            <FaFileAlt className="text-4xl sm:text-5xl text-emerald-600 mb-4 sm:mb-6" />

            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Results
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mt-2 sm:mt-3">
              View your semester results and academic history.
            </p>

          </div>
        </a>

        {/* FEES */}
        <a
          href="https://admissions.kifees.com/"
          target="_blank"
          rel="noreferrer"
          className="group p-[2px] rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 block"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 h-full shadow-xl transition-all duration-300 group-hover:scale-[1.03]">

            <FaMoneyBillWave className="text-4xl sm:text-5xl text-amber-600 mb-4 sm:mb-6" />

            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              Exam Fees
            </h2>

            <p className="text-sm sm:text-base text-slate-500 mt-2 sm:mt-3">
              Pay your examination fees quickly and securely online.
            </p>

          </div>
        </a>

      </div>

      {/* FOOTER */}
      <div className="mt-10 sm:mt-auto text-center bg-slate-100 text-xs sm:text-sm text-slate-400 py-4 sm:py-5 border-t">
        <p>© {new Date().getFullYear()} KCE Portal • Built with React</p>
        <p className="text-[10px] sm:text-xs mt-1">
          Designed and Developed by Ravi Prasath
        </p>
      </div>

    </div>
  );
}