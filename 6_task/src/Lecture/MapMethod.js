/* import React from 'react';

const MapMethod = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const listItems = myArray.map((mynumber) => 
        <li>{mynumber}</li>);

    return  <div>{listItems}</div>;
};

export default MapMethod; */


import React, { Component } from 'react';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class MapMethod extends Component {
    state = {
        numbersList: myArray
    };

    removeHandler = listIndex => {
       // const oldArray = this.state.numbersList.slice();
      //  const oldArray = this.state.numbersList.slice();
        const oldArray= [...this.state.numbersList]; //spread method
        oldArray.splice(listIndex, 1);
        this.setState({numbersList: oldArray});
    }
    render() {
        const listItems = this.state.numbersList.map((number, index) => 
        <li key={index} onClick={this.removeHandler.bind(this, index)}>{number}</li>);
        return ( <div><ul>
            {listItems}</ul></div>);
    }
}

export default MapMethod;
