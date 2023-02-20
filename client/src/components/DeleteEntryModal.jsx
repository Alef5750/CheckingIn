export default function DeleteEntryModal({ isShowing, onCancel }) {
  return (
    <div className="w-full h-full">
      {isShowing ? (
        <div className="border-4 border-red-500 bg-slate-400 rounded-xl shadow-xl modal fade fixed top-1/2 right-1/2">
          <h1>ARE YOU SURE YOU WANT TO DELETE THIS ENTRY?</h1>
          <button>Yes</button>
          <button onClick={onCancel}>Cancel</button>
          <h3>This action cannot be undone</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
