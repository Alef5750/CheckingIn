import { getEntries } from "helpers/api";
import { useEffect, useState } from "react";
import Entry from "components/Entry";
import DeleteEntryModal from "components/DeleteEntryModal";

export default function Dashboard() {
  const [entries, setEntries] = useState(null);
  const [isDeleteModalShowing, setIsDeleteModalShowing] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await getEntries();
      if (res.status === 200) setEntries(res.data);
    };
    fetchEntries();
  }, []);

  const showDeleteModal = (id) => {
    console.log(id);
    setIsDeleteModalShowing(true);
  };
  const hideDeleteModal = () => {
    setIsDeleteModalShowing(false);
  };
  const logData = (data) => {
    console.log(data);
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
      <DeleteEntryModal
        isShowing={isDeleteModalShowing}
        onCancel={hideDeleteModal}
        func={logData}
      />
    </div>
  );
}
