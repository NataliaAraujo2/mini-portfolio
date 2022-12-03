import './style.css';
import LinkGitHub from "./github";
import LinkLinkedin from "./linkedin";

function SocialMedia() {
    const socialmedia = (
        <div className="socialmedia">
            <LinkGitHub></LinkGitHub>
            <LinkLinkedin></LinkLinkedin>
        </div>
    );
    return socialmedia;
}


export default SocialMedia;