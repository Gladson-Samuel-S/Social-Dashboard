// Styles
import { PrimaryButton } from "../../../styles/GlobalStyledComponents/Buttons/PrimaryButton";
import {
  ActionSection,
  Card,
  Container,
  Grid,
  TitleSection,
  CardHeader,
  Status,
  CardBody,
  Box,
  Details,
  CardFooter,
  NoImage,
} from "./MyProjectStyled";

// Data
import {
  MyProjectsHeader,
  Projects,
} from "../../../Data/Dashboard-data/MyProjectsData";
import { useState } from "react";
import { Progress } from "../../../styles/GlobalStyledComponents/Progress";
import { ToolTip } from "../../../styles/GlobalStyledComponents/ToolTip";
import { useTheme } from "../../../styles/theme";

const MyProjects = () => {
  const [currentStatus, setCurrentStatus] = useState("Active");
  const { theme } = useTheme();

  return (
    <>
      <Container>
        {/* Header */}
        <TitleSection>
          <h3>{MyProjectsHeader.title}</h3>
          <p>{currentStatus}</p>
        </TitleSection>
        <ActionSection>
          <select onChange={(e) => setCurrentStatus(e.target.value)}>
            {MyProjectsHeader.status.map((status) => (
              <option key={status.id}>{status.text}</option>
            ))}
          </select>
          <PrimaryButton>{MyProjectsHeader.buttonText}</PrimaryButton>
        </ActionSection>
      </Container>

      {/* Main */}
      <Grid>
        {Projects.map((project) => (
          <Card key={project.Title}>
            <CardHeader>
              <div className='image-wrapper'>
                <img
                  src={project.logo}
                  alt={project.Title}
                  height='32'
                  width='32'
                />
              </div>

              <Status
                clr={
                  theme === "light"
                    ? project.status.text
                    : project.statusDark.text
                }
                bg={
                  theme === "light"
                    ? project.status.background
                    : project.statusDark.background
                }
              >
                <p>{project.status.title}</p>
              </Status>
            </CardHeader>

            <CardBody>
              <h3>{project.Title}</h3>
              <p>{project.Description}</p>

              <Details>
                <Box>
                  <h4>{project.DueDate}</h4>
                  <p>Due Date</p>
                </Box>
                <Box>
                  <h4>{project.Budget}</h4>
                  <p>Budget</p>
                </Box>
              </Details>

              <ToolTip
                content={`This project is ${project.progress} completed`}
              >
                <Progress bg={project.status.text} w={project.progress}>
                  <div className='progressBar'></div>
                </Progress>
              </ToolTip>
            </CardBody>

            <CardFooter>
              {project.contributers.map((contributer) =>
                contributer.location !== "" ? (
                  <ToolTip key={contributer.name} content={contributer.name}>
                    <img
                      src={contributer.location}
                      alt={contributer.name}
                      height='35'
                      width='35'
                    />
                  </ToolTip>
                ) : (
                  <ToolTip key={contributer.name} content={contributer.name}>
                    <NoImage
                      key={contributer.name}
                      bg={contributer.color || "green"}
                    >
                      {contributer.name.charAt(0)}
                    </NoImage>
                  </ToolTip>
                )
              )}
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default MyProjects;
