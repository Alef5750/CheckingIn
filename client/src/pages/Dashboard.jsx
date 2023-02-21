import { deleteEntryById, getEntries } from "helpers/api";
import { useEffect, useState } from "react";
import Entry from "components/Entry";
import DeleteEntryModal from "components/DeleteEntryModal";

export default function Dashboard() {
  const [entries, setEntries] = useState(null);
  const [isDeleteModalShowing, setIsDeleteModalShowing] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await getEntries();
      if (res.status === 200) setEntries(res.data);
    };
    fetchEntries();
  }, []);

  const showDeleteModal = (id) => {
    setIdToDelete(id);
    setIsDeleteModalShowing(true);
  };
  const hideDeleteModal = () => {
    setIsDeleteModalShowing(false);
  };
  const deleteEntry = async () => {
    const res = await deleteEntryById(idToDelete);
    console.log(res);
    if (res.status === 200 && res.data.deletedCount === 1) console.log(res);
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
        idToDelete={idToDelete}
        onDelete={deleteEntry}
      />
    </div>
  );
}
