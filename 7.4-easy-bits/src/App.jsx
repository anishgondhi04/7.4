import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms"


function App() {

  
  return (
    
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
   
  )
}

function MainApp(){
  const networknotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobAtom)
  const [messageCount,setMessagingCount] = useRecoilState(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  return(
  <>
 
  <button>home</button>

  <button>My network({networknotificationCount >= 100 ? "99+":networknotificationCount})</button>
  <button>jobs({jobsCount})</button>
  <button>Messaging({messageCount})</button>
  <button>Notification({notificationCount})</button>

  <button onClick={()=>{
    setMessagingCount(messageCount+ 1)
  }}>Me</button>
  
  </>
  )
}

export default App
