export default function Entry({ entry, onXclick }) {
  const emitId = () => {
    onXclick(entry._id);
  };
  return (
    <div className="p-4 bg-yellow-300 flex flex-col">
      <button onClick={emitId} className="self-end text-red-500 font-extrabold">
        X {entry._id}
      </button>
      <h1>FEELING: {entry.feeling}</h1>
      <p>THOUGHTS: {entry.thoughts}</p>
      <p>JUDGMENTS: {entry.judgements}</p>
      <p>NEED: {entry.need}</p>
    </div>
  );
}
