import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid red',
        }

        return (
            <div className="Home">
                <h1>Home</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <a href="https://www.youtube.com/watch?v=yOkZhgLvYD0">Overwatch</a>

                <div>
                    {/*Styles inline  */}
                    <button style= {{ 
                        backgroundColor: 'red',
                        border: '1px solid black',
                    }}>
                        click
                    </button>
                    
                    {/*Styles objects  */}
                    <button style={buttonStyle}>
                        click
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;