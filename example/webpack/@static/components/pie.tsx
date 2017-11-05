import * as React from 'react';


export interface State{}
export interface Props{
    name: string
}


export class Pie extends React.Component<Props, State>
{
    log(){
        console.log('PIE!')
    }

    render(){
        return (
            <div onClick={this.log.bind(this)}>
                Pie {this.props.name}
            </div>
        )
    }
}