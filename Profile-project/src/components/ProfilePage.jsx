import TopHeader from "./TopHeader";

export default function ProfilePage({ user }) {
  return (
    <TopHeader 
      name={user.name} 
      username={user.username} 
      avatarImage={user.avatarImage}
    />
  );
}
