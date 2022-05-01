import React from 'react';
import Spinner from 'react-spinner-material';
import {
    Grid,
} from "@material-ui/core";

class Loading extends React.Component {
    render() {
        let spinner =  (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '50vh' }}
            >
                    <Spinner size={120} spinnercolor={"#333"} spinnerwidth={2} visible={true} />
            </Grid>
        )
        return <div className="Loading">{spinner}</div>; 
    };
}

export default Loading;