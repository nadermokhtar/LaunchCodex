import React  from 'react';
import Moment from 'react-moment';

class Time extends React.Component {

    render() {

        return (
            <div className="card1">
                <Moment format="YYYY-MM-DD HH:mm"></Moment>
            </div>

        );
    }
}
export default Time