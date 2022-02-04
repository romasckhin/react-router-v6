import {Link , useMatch} from 'react-router-dom'

const CustomLink = ({children,to}) => {

    const math = useMatch(to)

    console.log(math)

    return (

        <Link
            to={to}
            style={{
                color: math ? 'rgb(0,159,255)' : 'black',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize:'20px',
                borderLeft: math ? '3px solid green' : ''
            }}
        >
            {children}

        </Link>
    );
};

export default CustomLink;