import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let projects = [
  {
    name: "Wevva",
    description: <>
      <p>
        A fluidic game: an app blurring the lines between gameplay and game design.
        Gives a playful, easy-to-use interface for users (particularly children) to design and share their own casual games.
      </p>
      <p>
        Developed by a team in the MetaMakers Institute at Falmouth University, funded by a European Research Area grant.
      </p>
    </>,
    technologies: ["Swift", "SpriteKit"],
    buttons: <>
      <a class="btn btn-primary" href="http://www.wevvagame.com/">Website</a>
      <a href="https://itunes.apple.com/us/app/wevva/id1322519841?mt=8"><img src={require("./img/apple-app-store.svg")} alt="Download on the App Store" /></a>
    </>,
    bgImage: require("./img/wevva-background.jpg")
  },
];

class Project extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <Parallax bgImage={this.props.project.bgImage} strength={300}>
        <div class="page">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5 mb-3 mb-md-0 text-white-bg">
                <h3>{this.props.project.name}</h3>
                {this.props.project.description}
                <p>Technologies: {this.props.project.technologies.join(", ")}.</p>
                {this.props.project.buttons}
              </div>
              <div class="col-12 col-md-7">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item rounded" src="https://www.youtube.com/embed/u3JGp1_keTQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    )
  }
}

function App() {
  return (
    <div>
      { projects.map(p => <Project project={p} />) }
    </div>
  );
}

export default App;
