export default function Entry({ feeling, thoughts }) {
  return (
    <div className="p-4 m-8 bg-yellow-300">
      <h1>{feeling}</h1>
      <p>{thoughts}</p>
    </div>
  );
}
