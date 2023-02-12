import { getEntries } from "helpers/api";
import { useEffect, useState } from "react";
import Entry from "components/Entry";

export default function Dashboard() {
  const [entries, setEntries] = useState(null);
  useEffect(() => {
    const fetchEntries = async () => {
      await getEntries().then((res) => {
        setEntries(res.data);
      });
    };
    fetchEntries();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mt-8 mx-8">
      {entries
        ? entries.map((entry) => (
            <Entry
              feeling={entry.feeling}
              thoughts={entry.thoughts}
              judgements={entry.judgements}
              need={entry.need}
              key={entry._id}
            />
          ))
        : ""}
    </div>
  );
}
