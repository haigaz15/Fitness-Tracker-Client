import { Outlet } from "react-router-dom";
import Bar from "../../components/AppBar/Bar";
import NavBar from "../../components/NavBar/NavBar";
import "./UserProfile.css";
import Navigations from "../../types/Navigations";
const UserProfileContainer: React.FC = () => {
  return (
    <>
      <Bar />
      <div className="profile-container">
        <NavBar
          navigations={[
            Navigations.DASHBOARD,
            Navigations.EXERCISELIBRARY,
            Navigations.WORKOUTS,
            Navigations.ANALYTICS,
          ]}
        />
        <Outlet />
      </div>
    </>
  );
};

export default UserProfileContainer;
