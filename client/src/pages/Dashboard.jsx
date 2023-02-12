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

  // const entryCard = () => {
  //   if (entries) {
  //     console.log(entries);
  //     entries.map((entry) => <Entry />);
  //   }
  // };
  return (
    <div>
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
