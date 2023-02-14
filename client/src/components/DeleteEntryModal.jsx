export default function DeleteEntryModal({ isShowing }) {
  return (
    <div>
      {isShowing ? (
        <div className="border-4 border-red-500">
          <h1>ARE YOU SURE YOU WANT TO DELETE THIS ENTRY?</h1>
          <button>Yes</button>
          <button>Cancel</button>
          <h3>This action cannot be undone</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
