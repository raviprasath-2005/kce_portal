import { MdDelete } from "react-icons/md";

export default function SubjectRow({
  subject,
  index,
  handleChange,
  deleteSubject,
  canDelete,
}) {
  return (
    <div className="flex items-center gap-4 mb-4 bg-white p-4 rounded-2xl shadow-md border border-gray-100">
      
      <div className="flex-1">
        <input
          type="number"
          placeholder="Credits"
          value={subject.credits}
          onChange={(e) =>
            handleChange(index, "credits", e.target.value)
          }
          className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-gray-300
            outline-none
            bg-gray-50
            focus:bg-white
            focus:ring-2
            focus:ring-amber-500
            focus:border-amber-500
            transition
          "
        />
      </div>

      <div className="flex-1">
        <input
          type="number"
          placeholder="Grade Point"
          value={subject.gradePoint}
          onChange={(e) =>
            handleChange(index, "gradePoint", e.target.value)
          }
          className="
            w-full
            px-4
            py-3
            rounded-xl
            border
            border-gray-300
            outline-none
            bg-gray-50
            focus:bg-white
            focus:ring-2
            focus:ring-amber-500
            focus:border-amber-500
            transition
          "
        />
      </div>

      <button
        disabled={!canDelete}
        onClick={() => deleteSubject(index)}
        className=" cursor-pointer
          h-12
          w-12
          flex
          items-center
          justify-center
          rounded-full
          bg-red-100
          text-red-600
          hover:bg-red-500
          hover:text-white
          transition-all
          duration-300
          disabled:bg-gray-200
          disabled:text-gray-400
          disabled:cursor-not-allowed
        "
      >
        <MdDelete className="text-2xl" />
      </button>
    </div>
  );
}