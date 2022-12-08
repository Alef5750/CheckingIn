import checkinIcon from "images/logo1.png";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateToDashBoard = () => {
    navigate("/dashboard");
  };
  return (
    <header className="bg-red-800 bg-opacity-100 flex w-full justify-between p-3">
      <button onClick={navigateHome}>
        <img
          src={checkinIcon}
          alt="CheckIn Icon"
          className="h-16 w-16 rounded-full"
        />
      </button>
      <button className="">My Dashboard</button>
    </header>
  );
}
