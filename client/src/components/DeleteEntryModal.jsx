export default function DeleteEntryModal({ isShowing, onCancel }) {
  return (
    <div className="w-full h-full">
      {isShowing ? (
        <div className="space-y-4 p-4 border-4 border-slate-50 bg-slate-600 rounded-xl shadow-xl modal fade fixed top-1/2 right-1/2">
          <h1 className="text-white">
            ARE YOU SURE YOU WANT TO DELETE THIS ENTRY?
          </h1>
          <span className="flex justify-center space-x-4 w-full">
            <button className="bg-red-500 rounded-full text-white font-semibold px-3">
              Delete
            </button>
            <button
              className="bg-blue-400 rounded-full text-white font-semibold px-3"
              onClick={onCancel}
            >
              Cancel
            </button>
          </span>
          <h3 className="italic text-slate-50 text-center">
            This action cannot be undone
          </h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
