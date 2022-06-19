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
} from "./MyProjectStyled";

// Data
import {
  MyProjectsHeader,
  Projects,
} from "../../../Data/Dashboard-data/MyProjectsData";
import { useState } from "react";
import { Progress } from "../../../styles/GlobalStyledComponents/Progress";
import { ToolTip } from "../../../styles/GlobalStyledComponents/ToolTip";

const MyProjects = () => {
  const [currentStatus, setCurrentStatus] = useState("Active");

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

              <Status clr={project.status.text} bg={project.status.background}>
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

              <ToolTip>
                <Progress
                  className='tooltip'
                  data-tooltip={`This project is ${project.progress} completed`}
                  bg={project.status.text}
                  w={project.progress}
                >
                  <div className='progressBar'></div>
                </Progress>
              </ToolTip>

              <ToolTip>
                <h1
                  className='tooltip'
                  data-tooltip={`This project is ${project.progress} completed`}
                >
                  Hello
                </h1>
              </ToolTip>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default MyProjects;
