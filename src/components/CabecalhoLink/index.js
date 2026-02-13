import { Link } from 'react-router-dom';
import syles from './CabecalhoLink.module.css';

function CabecalhoLink({ children, url }) {
    return (
        <Link to={url} className={syles.link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;