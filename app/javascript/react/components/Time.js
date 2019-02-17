import React  from 'react';
import Moment from 'react-moment';

class Time extends React.Component {

    render() {

        return (

            <div className="cell auto title2">
                Right now: <Moment format=" LT MMM Do YYYY"/>
            </div>

        );
    }
}
export default Time