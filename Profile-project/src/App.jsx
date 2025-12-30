 import './App.css'
 import avatarImage from './assets/avatar.png'
 import ProfilePage from './components/ProfilePage'

function App() {
  const user = {
    name: "Farzana Akbari",
    username: "@farzanaakbari",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 30 2025",
    streakDays: 2,
    longestStreak: 2,
    recentBadgesText: "No badges earned yet.",


    personalInfo: {
      Email: 'akbarifarzana77@gmail.com',
      Gender: 'Famale',
      Country: 'Afghanistan',
      "Province or state": 'Bamyan',
      "Programing Experiance": "1",
      "Date of Birth": "24/9/2002",
      "Onlion Portfolio Link": "N/A",
      "Linkedin Link": "Open the Link",
      Languages: "Farsi, English",
      Bio: "CS Student",



    },

    accountDetails: {
      Role: "Front_end Developer",
      status: "Active",
      Verification: "Verified"

    }




  }
  return (
    <div className='page'>
      <ProfilePage user={user}></ProfilePage>
      
    </div>
  )
}

export default App
