import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

let urls = [
    '/about',
    '/counters',
    '/',
];

const Header = () => {
    let hid = false;
    const [value, setValue] = React.useState(()=> {
        if(window.location.pathname === '/404') {
            hid = true;
        }
        return urls.indexOf(window.location.pathname) === 2 ? false : urls.indexOf(window.location.pathname);
    });

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    
    const style = hid === true ? {display: 'none'} : {};

    return (
        <div style={style}>
            <Paper  square>
            <Tabs value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
                <Tab label="о нас" component={Link} to="/about" />
                <Tab label="счетчики" component={Link} to="/counters" />
            </Tabs>
        </Paper>
        </div>
    );
}

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: 0
//         };
//       }

//       handleChange = (event, newValue) => {
//           this.setState({
//               value:
//           })
//       }
//       render() {
//         return (
//             <Paper square>
//                 <Tabs value={this.value} indicatorColor="primary" textColor="primary" onChange={this.setState({
//                     value: this.value
//                 })}>
//                     <Tab label="о нас" component={Link} to="/about" />
//                     <Tab label="счетчики " component={Link} to="/counters" />
//                 </Tabs>
//             </Paper>
//         );
//       }
// }

export default Header;