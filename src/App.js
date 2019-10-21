import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class IFrameEmbed extends Component
{
  render()
  {
    return (
      <div class="embed-responsive embed-responsive-16by9">
        {this.props.children}
      </div>
    );
  }
}

class YoutubeVideo extends Component
{
  render()
  {
    return (
      <IFrameEmbed>
        <iframe class="embed-responsive-item rounded" src={this.props.src} frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </IFrameEmbed>
    );
  }
}

class VimeoVideo extends Component
{
  render()
  {
    return (
      <IFrameEmbed>
        <iframe class="embed-responsive-item rounded" src={this.props.src} frameborder="0"
          allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </IFrameEmbed>
    );
  }
}

class ImageEmbed extends Component
{
  static defaultProps = {alt: "Screenshot"};

  render()
  {
    return <img src={this.props.src} class="img-fluid" alt={this.props.alt} />
  }
}

class LinkButton extends Component
{
  static defaultProps = {text: "Website"};

  render()
  {
    return <a class="btn btn-primary" href={this.props.url}>{this.props.text}</a>;
  }
}

class GitHubButton extends Component
{
  render()
  {
    return <LinkButton url={this.props.url} text="GitHub" />
  }
}

class IOSAppStoreButton extends Component
{
  render()
  {
    return (
      <a href={this.props.url}>
        <img src={require("./img/apple-app-store.svg")} alt="Download on the App Store" />
      </a>
    )
  }
}

class GooglePlayStoreButton extends Component
{
  render()
  {
    return (
      <a href={this.props.url}><img height='50px' alt='Get it on Google Play' src='https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png'/></a>
    );
  }
}

let projects = [
  {
    name: "hiveSynth",
    description: <>
      <p>
        A virtual modular analogue synthesiser with a unique augmented reality interface.
        It gives musicians the ability to design and play synthesisers built out of limitless numbers of virtual components.
        In contrast to existing virtual modular synthesisers which are limited to the flat screen, 
        hiveSynth uses room-scale virtual/augmented/mixed reality to provide an intuitive 3D interface.
      </p>
      <p>Developed by <a href="https://beesting.xyz">Beesting Labs</a>.</p>
    </>,
    technologies: ["Unity", "C#", "Juce", "C++", "ARKit"],
    buttons: [],
    embed: <VimeoVideo src="https://player.vimeo.com/video/336929104" />,
    bgImage: require("./img/hivesynth-background.jpg")
  },
  {
    name: "edpowley.com",
    description: <>
      <p>This website. A portfolio website developed in React and hosted on GitHub Pages.</p>
    </>,
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    buttons: [
      <GitHubButton url="https://github.com/edpowley/edpowley.com" />
    ],
    embed: <ImageEmbed src={require("./img/edpowleydotcom.png")} />
  },
  {
    name: "Wevva",
    description: <>
      <p>A fluidic game: an app blurring the lines between gameplay and game design.
        Gives a playful, easy-to-use interface for users (particularly children) to design and share their own casual games.
      </p>
      <p>Developed by a team in the MetaMakers Institute at Falmouth University, funded by a European Research Area grant.</p>
    </>,
    technologies: ["Swift", "SpriteKit"],
    buttons: [
      <IOSAppStoreButton url="https://itunes.apple.com/us/app/wevva/id1322519841?mt=8" />
    ],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/u3JGp1_keTQ" />,
    bgImage: require("./img/wevva-background.jpg")
  },
  {
    name: "Augmented Telegrapher",
    description: <>
      <p>A mixed reality game experience for the Microsoft Hololens, developed in partnership with <a href="https://telegraphmuseum.org/">Porthcurno Telegraph Museum</a>.
        Using game design to bring new audiences to a small but historically significant local museum.
        Bridging eras of technology: using the new to tell the story of the old.
      </p>
      <p>Developed by a team in the Games Academy at Falmouth University, funded by the UK Arts and Humanities Research Council.</p>
    </>,
    technologies: ["Unity", "C#", "Hololens", "Vuforia", "Arduino"],
    buttons: [<LinkButton url="https://www.falmouth.ac.uk/research/programmes/digital-creativity/augmented-telegrapher" />],
    embed: <VimeoVideo src="https://player.vimeo.com/video/265748699" />,
    bgImage: require("./img/augtel-background.jpg")
  },
  {
    name: "Hololens MCTS Visualisation",
    description: <>
      <p>Interactive Mixed Reality visualisation of the Monte Carlo Tree Search algorithm for game AI.
        Demoed at <a href="http://aisb2018.csc.liv.ac.uk/">AISB 2018</a> conference.
      </p>
      <p>Solo project.</p>
    </>,
    technologies: ["Unity", "C#", "Hololens"],
    buttons: [<GitHubButton url="https://github.com/edpowley/HoloMCTS" />],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/ZrW4AEqL1po" />,
    bgImage: require("./img/holomcts-background.jpg")
  },
  {
    name: "COMP250 Competition Server",
    description: <>
      <p>A server for running AI bot tournaments in the context of an undergraduate Game AI course.
        Bots are submitted automatically when students push to their individual GitHub repositories,
        and the system runs a round-robin tournament to assess the bots.
      </p>
      <p>Solo project.</p>
    </>,
    technologies: ["Python", "Flask", "Jinja", "MongoDB", "Java", "GitHub WebHooks", "HTML", "CSS", "JavaScript"],
    buttons: [<GitHubButton url="https://github.com/falmouth-games-academy/comp250-server" />],
    embed: <ImageEmbed src={require("./img/comp250.png")} />
  },
  {
    bgImage: require("./img/snorri-background.jpg"),
    name: "Snorri",
    description: <>
      <p>A puzzle-platform game developed for the 2016 Global Game Jam.
        Features physics-based puzzles based on the elements of earth, air, fire and water.
      </p>
      <p>Developed by a small team of staff and students in the Games Academy at Falmouth University.</p>
    </>,
    technologies: ["Unity", "C#"],
    buttons: [
      <LinkButton url="https://globalgamejam.org/2016/games/snorri" />,
      <GitHubButton url="https://github.com/edpowley/GlobalGameJam2016" />
    ],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/IXNsXJIqvx8" />
  },
  {
    bgImage: require("./img/spacecaves-background.jpg"),
    name: "SpaceCaves",
    description: <>
      <p>A roguelike stealth shooter game with procedural level generation, physics-based terrain destruction and retro vector-style graphics.</p>
      <p>Solo project.</p>
    </>,
    technologies: ["Unity", "C#"],
    buttons: [
      //<LinkButton url="dl/SpaceCaves_prealpha_296.zip" text="Executable (Alpha version, Windows)" />
    ],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/Ar5OnpKMUYQ" />
  },
  {
    bgImage: require("./img/shallow-seas-background.jpg"),
    name: "Shallow Seas",
    description: <>
      <p>A game designed to study cooperation and communication within fishing communities.
        A simulation of ocean fishing and radio communication between fishing vessels, played on several PCs over a network.
      </p>
      <p>Designed and developed in collaboration with scientists from Oxford University and the University of York.
        Funded by the UK Engineering and Physical Sciences Research Council.
      </p>
    </>,
    technologies: ["Unity", "C#"],
    buttons: [
      <GitHubButton url="https://github.com/edpowley/ShallowSeas" />,
      <LinkButton url="https://github.com/edpowley/ShallowSeas/releases" text="Executables (Windows/OSX/Linux)" />
    ],
    embed: <ImageEmbed src={require("./img/shallow-seas.jpg")} />
  },
  {
    bgImage: require("./img/blobjam-background.jpg"),
    name: "Blobjam",
    description: <>
      <p>A casual puzzle game, bringing a physics-based twist to classic bubble popping gameplay.
        Featuring online leaderboards and Facebook social integration.
      </p>
      <p>Solo project.</p>
    </>,
    technologies: ["Java", "LibGDX", "Facebook Graph API"],
    buttons: [<GooglePlayStoreButton url={"https://play.google.com/store/apps/details?id=com.orangehelicopter.blobjam&hl=en_GB&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"} />],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/9QpZuKnQHjc" />
  },
  {
    name: "mcts.ai",
    description: <>
      <p>Responsive web-based bibliography, based on a custom JavaScript BibTeX parser.
      </p>
      <p>Solo project on contract from Goldsmiths, University of London. Funded by the UK Engineering and Physical Sciences Research Council.
      </p>
    </>,
    technologies: ["JavaScript", "JQuery", "HTML", "CSS"],
    buttons: [<LinkButton url="http://mcts.ai/bibliography/index.html" />],
    embed: <ImageEmbed src={require("./img/mcts-ai-bib.png")} />
  },
  {
    bgImage: require("./img/spades-background.jpg"),
    name: "AI Factory Spades",
    description: <>
      <p>Worked with AI Factory Ltd to integrate new AI techniques from academic research into one of their popular Android games.
        I implemented the algorithms we had developed into production-ready C++ code.
      </p>
      <p>Developed with Peter Cowling and Daniel Whitehouse at the University of York.
        Funded by the UK Engineering and Physical Sciences Research Council.
      </p>
    </>,
    technologies: ["C++"],
    buttons: [<GooglePlayStoreButton url={"https://play.google.com/store/apps/details?id=uk.co.aifactory.spadesfree&hl=en"} />]
  },
  {
    bgImage: require("./img/mctsdemo-background.jpg"),
    name: "MCTSDemo",
    description: <>
      <p>Interactive kiosk application, demonstrating and visualising the Monte Carlo Tree Search algorithm for game AI.
        Allows a range of board games to be played against an AI opponent, with the AI's decision process visualised in real-time.
        Developed for the British Science Festival 2011 (Bradford, UK), and demonstrated at many subsequent events.
      </p>
      <p>Developed with Peter Cowling and Daniel Whitehouse at the University of York.
          Funded by the UK Engineering and Physical Sciences Research Council.
          </p>
    </>,
    technologies: ["C#", "WPF"],
    buttons: [<LinkButton url="http://bit.ly/mctsdemo" text="Executable (Windows)" />],
    embed: <YoutubeVideo src="https://www.youtube.com/embed/f2FfHVzXTq0" />
  },
  {
    bgImage: require("./img/buzz-background.jpg"),
    name: "Buzz Machines",
    description: <>
      <p>Several plugins for Jeskola Buzz, a freeware modular music tracker.
        Including samplers, granular synthesisers, and tools for algorithmic composition and live performance.
      </p>
      <p>Mostly solo projects, some open-source work, some collaborations with other developers.</p>
    </>,
    technologies: ["C++"],
    buttons: [
      <LinkButton url="https://sourceforge.net/projects/btdsys/" text="SourceForge" />,
      <LinkButton url="http://buzz.robotplanet.dk/search.php?u=BTDSys" text="Executables" />
    ],
    embed: <ImageEmbed src={require("./img/buzz-pulsar.jpg")} />
  }
];

class Project extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    let page = (
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
              {this.props.project.embed}
            </div>
          </div>
        </div>
      </div>
    );

    if (this.props.project.bgImage !== undefined)
    {
      return (
        <Parallax bgImage={this.props.project.bgImage} strength={300}>
          {page}
        </Parallax>
      );
    }
    else
    {
      return (
        <div class="page-no-parallax">
          {page}
        </div>
      );
    }
  }
}

function App() {
  return (<>
      <div class="page" id="top">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-3">
              <h1>Ed Powley</h1>
              <h4>Coder / Creative Technologist / AI Researcher / Game Developer / Lecturer / Musician</h4>
              <p>The following is a selection of my software development / creative technology projects,
                in roughly reverse chronological order.
              </p>
              <p>I also have an <a href="http://mcts.ai/edpowley">academic homepage</a> with a list of publications.
              </p>
            </div>
          </div>
        </div>
      </div>
      { projects.map(p => <Project project={p} />) }
      <footer class="bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; Ed Powley 2019</p>
        </div>
      </footer>
  </>);
}

export default App;
