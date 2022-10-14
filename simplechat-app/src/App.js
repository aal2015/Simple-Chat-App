import './App.css';
import Navbar from './components/NavBar';
import ChatRoom from './components/ChatRoom';
import Input from './components/Input';
import { auth, GoogleAuthHandler } from './firebase/firebaseConfig';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  let content;

  const GoogleAccountAuth = () => {
    GoogleAuthHandler();
  }


  if (user) {
    content = <ChatRoom uid={user.uid} />;
  } else {
    content = (
      <div id="auth-content-background">
        <button onClick={GoogleAccountAuth}>Sign In with Google Account <i className="bi bi-google"></i></button>
      </div>
    );
    
  }

  return (
    <div className="App">
      <Navbar user={user} />
      <div id="content-background">
        { content }
      </div>
      
      <Input user={user} />
    </div>
  );
}

export default App;
