import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        bio: "",
        avatar_url: "",
        email: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arbazahmed1999");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="about-profile-container text-center">
        <div className="profile-class-container flex flex-row justify-start items-center">
          <div className="profile-container rounded-md">
            <h2 className="profile-title font-semibold text-2xl">About Me</h2>
            <div className="profile-user-card flex items-center justify-center flex-col mt-5">
              <img
                className="profile-user-img rounded-full w-40 h-40"
                alt="DP"
                src={this.state.userInfo.avatar_url}
              />
              <h2 className="user-name font-semibold text-2xl">
                {this.state.userInfo.name}
              </h2>
              <h2 className="user-bio flex flex-wrap text-base m-0 text-center font-semibold text-gray-600">
                <p>me.arbazahmed@gmail.com</p>
                {this.state.userInfo.bio}
              </h2>
              <h2 className="font-semibold text-3xl">
                {this.state.userInfo.location}
              </h2>
            </div>
          </div>

          <div className="repository-container rounded-md">
            <h1 className="repository-title text-center font-semibold text-3xl mb-[30px]">
              About My Work
            </h1>

            <div>
              <a
                className="anchor-title"
                href="https://github.com/arbazahmed1999"
              >
                <h2 className="profile-repo-container flex items-center justify-center rounded-md font-semibold text-2xl">
                  <span className="font-bold">FoodVilla &nbsp;</span>App
                  Repository
                </h2>
              </a>
              <h3 className="repository-des text-gray-500">
                The <strong>FoodVilla</strong> food ordering and delivery app,
                developed using React.js, is a comprehensive web application
                that includes four distinct components: a home page, an about
                page, a contact us page, and a login page. The home page
                features an intuitive add-to-cart section that allows users to
                easily customize their orders. The app also incorporates offline
                functionality, displaying a notification when the network
                connection is lost, ensuring uninterrupted usage. A shimmer
                effect is implemented to provide smooth and visually appealing
                transitions between loading states. Live API fetching enables
                real-time updates on menu items, prices, and availability. React
                Router DOM is utilized for seamless navigation between different
                pages. The app also employs Redux Toolkit for efficient state
                management, and is bundled with Parcel for optimized code
                delivery. These features and technologies together create a
                robust and user-friendly food ordering and delivery experience
                on the <strong>FoodVilla</strong> app.
              </h3>
              <div className="profile-repo-items flex justify-evenly"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
