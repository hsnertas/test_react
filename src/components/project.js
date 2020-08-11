import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  Button,
  CardMenu,
} from "react-mdl";
import { CardText } from "react-mdl/lib/Card";

export default class project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
         <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Frond End Projects #1
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Frond End Projects #2
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Frond End Projects #3
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
              <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Back End Projects #1
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Back End Projects #2
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>     
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png) center/cover",
            }}
          >
            Back End Projects #3
          </CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
        </div>
        </div>
      );
    } 
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Front End</Tab>
          <Tab>Back End</Tab>
          
        </Tabs>
        
          <Grid >
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        
      </div>
    );
  }
}
