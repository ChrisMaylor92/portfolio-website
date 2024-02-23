import { Link } from "react-router-dom";
export const Header = () => {
    return <div>
        <div id="container" >
            <Link to={`/`} >CM Portfolio</Link>
            <Link to={`/blog`} >Blog</Link>
            <Link to={`/mini_apps`} >Mini Apps</Link>
            <Link to={`/mini_games`} >Mini Games</Link>
            <Link to={`/contact`} >Contact</Link>
        </div>
        
    </div>
}