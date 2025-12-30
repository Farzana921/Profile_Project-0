import TopHeader from "./TopHeader";
import StatCard from "./StatCard";

export default function ProfilePage({ user }) {
  return (
    <div className="layout">

    
    <TopHeader>
      name={user.name}
      username={user.username}
      avatarImage={user.avatarImage}
    </TopHeader>
    <div className="statsGrid">
      <StatCard 
      title="STREAK"
      bigValue={`${user.streakDays} days`}
      footerText={`Longest Streak: ${user.lastActive}`}>
      icon="🔥"  
      </StatCard>
      
      <StatCard 
      title="STREAK"
      bigValue={`${user.streakDays} days`}
      footerText={`Longest Streak: ${user.lastActive}`}>
      icon="🔥"  
      </StatCard>

    </div>

    </div>
  )
}
