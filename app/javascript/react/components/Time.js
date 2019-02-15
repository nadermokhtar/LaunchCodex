import React  from 'react';
import Moment from 'react-moment';

class Time extends React.Component {

    render() {

        return (

            <div className="cell auto title2">
                <Moment format=" HH:mm DD-MM-YYYY"></Moment>
            </div>

        );
    }
}
export default Time