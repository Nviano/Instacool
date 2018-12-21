import * as React from 'react';

const style = {
    container: {
        borderRadius: '100%',
    }
}


export default class ProfileImg extends React.Component {
    public render() {
        return (
            <div >
                <img style={style.container} src='http://lorempixel.com/g/100/100/' />
            </div>
        )
    }
}