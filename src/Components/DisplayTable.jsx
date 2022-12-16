import React, { Component } from 'react';
import { TableSection } from "./TableSection.jsx";

class DisplayTable extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            outputData: [],
        }
    }

    componentDidMount() {
        
         const symbol='IBM';
         const interval ='5min';
         const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY'
         +'&symbol='+symbol+'&interval='+interval+
         '&outputsize=full&apikey=demo';
         
         fetch(url)
         .then(response => response.json())
             .then(records => {
                 var recordKeys = records[Object.keys(records)[1]];
                 var outputData =[];
                 const entries = Object.entries(recordKeys);
                 for (const [key, val] of entries) {
                 outputData.push([
                     key,
                     val["1. open"],
                     val["2. high"],
                     val["3. low"],
                     val["4. close"],
                     val["5. volume"]
                 ]);
                 }
                 this.setState({
                    outputData: outputData
                   
                 });

                 //console.log(outputData[0]);
             })
             .catch(error => console.log(error))
            }

    render() {
        var info = this.state.outputData;
        return (
        <table>
            <thead>
                <td></td>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>volume</th>
            </thead>
        
            {info.map((tradeDetails, index) => (
                <TableSection tradeDetails={tradeDetails} index={index} />
            ))}
       </table>
        );
    }
}

export default DisplayTable;