import { useContext, useRef } from "react";

import UserContext from "../context/UserContext";
import Navigation from "../components/Navigation";

function Profile() {

  const { username, setUsername } = useContext(UserContext);

  // Create a reference
  const usernameInputRef = useRef(null);

  // Focus the input
  function focusInput() {
    usernameInputRef.current.focus();
  }

  return (
    <div>

      <Navigation />

      <h1>My Profile</h1>

      <h3>Current Username: {username}</h3>

      <input
        ref={usernameInputRef}
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button onClick={focusInput}>
        Focus Username Input
      </button>

    </div>
  );
}

export default Profile;

