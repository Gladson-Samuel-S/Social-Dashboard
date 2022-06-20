// Data
import { Link } from "react-router-dom";
import { UserHeader, CardData } from "../../../Data/Dashboard-data/UserData";
import { useState } from "react";

// Styles
import {
  ActionArea,
  ActionSection,
  Avatar,
  BoxContainer,
  Breadcrumbs,
  Card,
  Container,
  Dot,
  Flex,
  ProfileCompletion,
  TitleSection,
  UserDetails,
  Wrapper,
} from "./UserStyled";
import { PrimaryButton } from "../../../styles/GlobalStyledComponents/Buttons/PrimaryButton";
import {
  OutlinedButton,
  SecondaryButton,
} from "../../../styles/GlobalStyledComponents/Buttons/SecondaryButton";
import {
  AiFillFunnelPlot,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { FaUserAlt, FaLocationArrow } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Box } from "../MyProjects/MyProjectStyled";
import { Progress } from "../../../styles/GlobalStyledComponents/Progress";
import { TiTick } from "react-icons/ti";
import BreadCrumbs from "./Breadcrumbs/BreadCrumbs";

const User = () => {
  const [follow, setFollow] = useState("Follow");

  return (
    <>
      <Container>
        <TitleSection>
          <h3>{UserHeader.title}</h3>
          <Breadcrumbs>
            {UserHeader.links.map((link) => (
              <li key={link}>
                <Link to='/'>{link}</Link>
              </li>
            ))}
          </Breadcrumbs>
        </TitleSection>
        <ActionSection>
          <SecondaryButton
            bg={({ theme }) => theme.colors.grey}
            clr={({ theme }) => theme.colors.primary}
          >
            <AiFillFunnelPlot />
            {UserHeader.filterButton}
          </SecondaryButton>
          <PrimaryButton>{UserHeader.createButton}</PrimaryButton>
        </ActionSection>
      </Container>

      <Wrapper>
        <Card>
          <Avatar>
            <div className='AvatarWrapper'>
              <img src={CardData.logo} alt='' />
              <Dot />
            </div>
          </Avatar>

          <UserDetails>
            <Flex>
              <div>
                <h2>{CardData.profile.name}</h2>
                <div className='data'>
                  <Link to='/'>
                    <FaUserAlt />
                    {CardData.profile.role}
                  </Link>
                  <Link to='/'>
                    <FaLocationArrow />
                    {CardData.profile.location}
                  </Link>
                  <Link to='/'>
                    <MdMail />
                    {CardData.profile.email}
                  </Link>
                </div>
              </div>

              <div>
                <ActionArea>
                  {follow === "Follow" ? (
                    <OutlinedButton
                      bg={({ theme }) => theme.colors.grey}
                      clr={({ theme }) => theme.colors.text}
                      onClick={() =>
                        follow === "Follow"
                          ? setFollow("Following")
                          : setFollow("Follow")
                      }
                    >
                      {follow}
                    </OutlinedButton>
                  ) : (
                    <OutlinedButton
                      bg={({ theme }) => theme.colors.lightBlue}
                      clr={({ theme }) => theme.colors.white}
                      onClick={() =>
                        follow === "Follow"
                          ? setFollow("Following")
                          : setFollow("Follow")
                      }
                    >
                      <TiTick />
                      {follow}
                    </OutlinedButton>
                  )}

                  <PrimaryButton>{CardData.hireMe}</PrimaryButton>
                  <OutlinedButton
                    bg={({ theme }) => theme.colors.grey}
                    clr={({ theme }) => theme.colors.text}
                  >
                    {CardData.more}
                  </OutlinedButton>
                </ActionArea>
              </div>
            </Flex>

            <Flex>
              <BoxContainer>
                <Box>
                  <div className='wrap'>
                    <AiOutlineArrowUp className='up' />
                    <h2>{CardData.earnings.value}</h2>
                  </div>
                  <p>{CardData.earnings.text}</p>
                </Box>
                <Box>
                  <div className='wrap'>
                    <AiOutlineArrowDown className='down' />
                    <h2>{CardData.projects.value}</h2>
                  </div>
                  <p>{CardData.projects.text}</p>
                </Box>
                <Box>
                  <div className='wrap'>
                    <AiOutlineArrowUp className='up' />
                    <h2>{CardData.success.value}</h2>
                  </div>
                  <p>{CardData.success.text}</p>
                </Box>
              </BoxContainer>

              <ProfileCompletion>
                <div className='title'>
                  <p>{CardData.profile.completion.text}</p>
                  <h5>{CardData.profile.completion.status}</h5>
                </div>

                <Progress
                  className='progress'
                  bg={({ theme }) => theme.colors.lightBlue}
                  w={CardData.profile.completion.status}
                >
                  <div className='progressBar'></div>
                </Progress>
              </ProfileCompletion>
            </Flex>
          </UserDetails>
        </Card>
      </Wrapper>

      <BreadCrumbs />
    </>
  );
};

export default User;
