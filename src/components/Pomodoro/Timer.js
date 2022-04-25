import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900, // 15min
        }
    }

    componentDidMount() {

        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //BUTTONS
    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        })
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break!'
            }
        })
    }
    
    render() {

        const {alert: { message, type}, time } = this.state;

        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    Mostrar tiempo en minutos
                </div>

                <div className = "types">
                    <button
                        className= "start"
                        onClick= {this.setTimeForWork}
                    >
                        Start Working
                    </button>

                    <button
                        className= "short"
                        onClick= {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>

                    <button
                        className= "long"
                        onClick= {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
                
                
            </div>
        )
    }
}


export default Timer;