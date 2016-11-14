/**
 * Created by MagicLizi on 2016/11/14.
 */
import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <h1>大大说</h1>
        )
    }
}

ReactDom.render(<App />,document.getElementById('root'));