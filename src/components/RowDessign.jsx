import React from "react";
import CellDesign from './CellDesign';

class RowDessign extends React.Component{

  render(){

    let cells = this.props.cells.map((data, index) => (
      <CellDesign data={data} open={this.props.open} flag={this.props.flag} key={index} />
    ));

    return(
      <div className="row">{cells}</div>
    )
  }

}

export default RowDessign;