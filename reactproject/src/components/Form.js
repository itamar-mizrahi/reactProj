import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

let search;

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    async getData(){
        let data = await axios.get('https://itunes.apple.com/search?'+search);
        console.log(data);
    }

    render() {
        return (
            <div className="search">
                <TextField id="standard-basic" label="Search" onChange={e=> search = e.target.value}></TextField>
                <Button style={{margin: '10px 0px 0px 20px'}} variant="contained" color="primary" onClick={this.getData}>Primary</Button>
            </div>
        );
    }

}

export default Form;