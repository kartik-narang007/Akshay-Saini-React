import React from "react";
import { User } from "./User";


class About extends React.Component {
  render() {
    return (
      <div>
        <h1 className="font-bold text-center text-2xl">About</h1>
        <User />
      </div>
    );
  }
}

export default About;