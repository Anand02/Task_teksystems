import  React from 'react';
import MainBoard from './MainBoard';

class Home extends React.Component{

    constructor() {
        super();
    
        this.state = {
          rows: 10,
          columns: 10, 
          time: 0, 
          flagCount: 10,
          open: 0,
          totalMines: 10,
          rows: 10,
          columns: 10,
          gameStatus: "waiting",
        };
    
      }

      handleCellClick = () => {
        if (this.state.open === 0 && this.state.gameStatus !== "running") {
          this.setState(
            {
              gameStatus: "running"
            },
            this.setInterval(this.tick, 1000)
          );
        }
        this.setState(prevState => {
          return { open: prevState.open + 1 };
        });
      };

      
      componentWillMount() {
        this.intervals = [];
      }

    
      setInterval = (tik, t) => {
        this.intervals.push(setInterval(tik, t));
      };

    
      reset = () => {
        this.intervals.map(clearInterval);
        this.setState(Object.assign({}, this.baseState), () => {
          this.intervals = [];
        });
      };
    
      tick = () => {
        if (this.state.open > 0 && this.state.gameStatus === "running") {
          let time = this.state.time + 1;
          this.setState({ time });
        }
      };
    
      endGame = () => {
        this.setState({
          gameStatus: "ended"
        });
      };

      Winner = () => {
        if (this.state.totalMines + this.state.open >= this.state.rows * this.state.columns) {
          this.setState({
            gameStatus: "winner"
          }, alert("WINNER"))
        }
      }
    
      changeFlagAmount = amount => {
        this.setState({ flagCount: this.state.flagCount + amount });
      };
      

      componentDidUpdate(nextProps, nextState) {
        if (this.state.gameStatus === "running") {
          this.Winner();
        }
      }
    
     

    render(){

        console.log("props",this.state)
        let minutes = Math.floor(this.state.time / 60);
        console.log("props",minutes)
        let formattedSeconds = this.state.time - minutes * 60 || 0;
        console.log("props",formattedSeconds)

        formattedSeconds = formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
        let time = `${minutes}:${formattedSeconds}`;

        let gameStatus =this.state.gameStatus === "running" || this.state.gameStatus === "waiting" ? (
              <p style={{color:'green'}}> W </p>
            ) : (
              <p style={{color:'red'}}> Fail </p>
            );

        return(
            <div className="game">
                <h1 style={{color:'blue'}}>MINESWEEPER</h1>
                <h2>Anand Gadag </h2>

                <div className="board-head">
                    <div className="flag-count"> {this.state.flagCount} </div>
                        <button className="reset" onClick={this.state.reset}>
                            {gameStatus}
                        </button>
                    <div className="timer">{time}</div>
                </div>
                
                <MainBoard
                    columns={this.state.columns}
                    endGame={this.endGame}
                    status={this.state.gameStatus}
                    onCellClick={this.handleCellClick}
                    open={this.state.open}
                    totalMines={this.state.totalMines}
                    rows={this.state.rows}
                    changeFlagAmount={this.changeFlagAmount}
                />
            </div>
        )
    }
}

export default Home