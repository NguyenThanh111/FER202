import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";

// Effect hook demo: listen to browser online/offline events, with cleanup.
function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <Badge bg={isOnline ? "success" : "secondary"}>
      {isOnline ? "Online" : "Offline"}
    </Badge>
  );
}

export default OnlineStatus;
