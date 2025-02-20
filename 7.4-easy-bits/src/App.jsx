import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCountSelector } from "./atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networknotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector)

  // const totalNotificationCount = useMemo(() => {
  //   const count =
  //     networknotificationCount + messageCount + notificationCount + jobsCount;
  //   return count;
  // }, [notificationCount, jobsCount, messageCount, networknotificationCount]);

  return (
    <>
      <button>home</button>

      <button>
        My network(
        {networknotificationCount >= 100 ? "99+" : networknotificationCount})
      </button>
      <button>jobs({jobsCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notification({notificationCount})</button>
      <button>Me({totalNotificationCount})</button>
    </>
  );
}

export default App;
