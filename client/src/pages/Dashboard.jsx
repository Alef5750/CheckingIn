import { getEntries } from "helpers/api";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    getEntries();
  }, []);
  return <h1>DASHBOARD</h1>;
}
