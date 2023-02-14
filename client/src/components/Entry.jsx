export default function Entry({
  feeling,
  thoughts,
  judgements,
  need,
  setIsShowing,
  onXclick,
}) {
  return (
    <div className="p-4 bg-yellow-300 flex flex-col">
      <button
        onClick={onXclick}
        className="self-end text-red-500 font-extrabold"
      >
        X
      </button>
      <h1>FEELING: {feeling}</h1>
      <p>THOUGHTS: {thoughts}</p>
      <p>JUDGMENTS: {judgements}</p>
      <p>NEED: {need}</p>
    </div>
  );
}
