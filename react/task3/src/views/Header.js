import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Header() {
    const [value, setValue] = React.useState(null);
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Paper square>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                <Tab label="о нас" component={Link} to="/about" />
                <Tab label="счетчики" component={Link} to="/counters" />
            </Tabs>
        </Paper>
    );
}

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: 0
//         };
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