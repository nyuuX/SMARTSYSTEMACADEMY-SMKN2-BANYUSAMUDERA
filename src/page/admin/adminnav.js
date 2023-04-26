import { Link } from "react-router-dom";;

const Adminnav = () => {
    return ( 
        <nav className="h-20 flex justify-center gap-8">
            <Link to="/admin-pkl">PKL</Link>
            <Link to="/admin-ws">Workshop</Link>
            <Link to="/admin-startup">Startup</Link>
            <Link to="/admin-training">Training</Link>
            <Link to="/event">Event</Link>
        </nav>
     );
}
 
export default Adminnav;