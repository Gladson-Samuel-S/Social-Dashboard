import { UserProfileContainer } from "./UserProfileStyled";

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <div>
        <p>Max</p>
        <p>UX Designer</p>
      </div>
      <img src='/Assets/Header/Avatar.jpg' alt='Avatar' />
    </UserProfileContainer>
  );
};

export default UserProfile;
