export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Welcome to your profile {name} :)!</div>;
};

export default Profile;
