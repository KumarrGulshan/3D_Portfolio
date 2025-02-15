import "./SideBar.css"
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { FcContacts } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";


export default function SideBar() {
  return (
    <>
      <div className="box">
        <ul>
          <li>
            <div className="icon-section">
              <a href="/"> <FcHome size={25}/> <p>Home</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="/About"><FcAbout/> <p>About</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="/Project"> < GrProjects /> <p>Project</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="/Contact"> <FcContacts/> <p>Contact</p> </a>
            </div>
          </li>
          <li>
            <div className="icon-section">
              <a href="#feedback"> <FcFeedback/> <p>Feedback</p> </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}