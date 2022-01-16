import React, { useState } from "react";
import { Card, Tabs, Tab, Spinner } from "react-bootstrap";
import styled from "styled-components";
import FileUploadComponent from "./components/FileUploader";

const CenterDiv = styled.div`
  margin: auto;
  width: 60%;
  padding: 10%;
  padding-left: 5%;
`;

const StyledCard = styled(Card)`
  width: 50rem;
  border: 1px solid #000;
`;

const GridDiv = styled.div`
  display: grid !important;
  padding-top: 20px;
  grid-template-columns: auto auto;
  div:first-child {
    width: 100%;
  }
  div:nth-child(2) {
    margin: 0 auto;
  }
`;

const App = () => {
  const [processed, setProcessed] = useState<boolean>(true);
  return (
    <CenterDiv className="App">
      <StyledCard>
        <Card.Body>
          <Tabs defaultActiveKey="Original" id="uncontrolled-tab-example">
            <Tab eventKey="Original" title="Original">
              <GridDiv className="grid-container">
                <div className="grid-item">
                  <FileUploadComponent
                    isUploaded={(value: boolean) => setProcessed(value)}
                  />
                </div>
                <div className="grid-item">
                  {/* <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button> */}
                </div>
              </GridDiv>
            </Tab>
            <Tab
              eventKey="RemoveBG"
              title={
                !processed ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  `Remove BG`
                )
              }
              disabled={processed}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              deserunt alias aliquam animi quod sed ducimus, ex illo quis
              aliquid sequi libero nam beatae porro, provident sit quasi
              consequuntur a.
            </Tab>
            <Tab
              eventKey="Add-Background"
              title={
                !processed ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  `Add Background`
                )
              }
              disabled={processed}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              natus aliquam cumque atque minus? Ratione ex sit earum minima
              nostrum unde consequatur sed aliquid quam facere consectetur,
              tempore, reiciendis inventore?
            </Tab>
          </Tabs>
        </Card.Body>
      </StyledCard>
    </CenterDiv>
  );
};

export default App;
