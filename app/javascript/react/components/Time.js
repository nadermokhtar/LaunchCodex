import React  from 'react';
import Moment from 'react-moment';

class Time extends React.Component {

    render() {

        return (
            <Moment format="YYYY-MM-DD HH:mm"></Moment>
        );
    }
}
export default Time