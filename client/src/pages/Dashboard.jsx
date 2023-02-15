import { getEntries } from "helpers/api";
import { useEffect, useState } from "react";
import Entry from "components/Entry";
import DeleteEntryModal from "components/DeleteEntryModal";

export default function Dashboard() {
  const [entries, setEntries] = useState(null);
  const [isDeleteModalShowing, setIsDeleteModalShowing] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      await getEntries().then((res) => {
        setEntries(res.data);
      });
    };
    fetchEntries();
  }, []);

  const showDeleteModal = () => {
    setIsDeleteModalShowing(true);
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 my-8 mx-8">
        {entries
          ? entries.map((entry) => (
              <Entry entry={entry} key={entry._id} onXclick={showDeleteModal} />
            ))
          : ""}
      </div>
      <DeleteEntryModal isShowing={isDeleteModalShowing} />
    </div>
  );
}
