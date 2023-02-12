export default function Entry({ feeling, thoughts, judgements, need }) {
  return (
    <div className="p-4 m-8 bg-yellow-300">
      <h1>FEELING: {feeling}</h1>
      <p>THOUGHTS: {thoughts}</p>
      <p>JUDGMENTS: {judgements}</p>
      <p>NEED: {need}</p>
    </div>
  );
}
