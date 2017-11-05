import * as React from 'react';


export interface State{}
export interface Props{
    name: string
}


export class Coffee extends React.Component<Props, State>
{
    log(){
        console.log('COFFEE!')
    }

    render(){
        return (
            <div onClick={this.log.bind(this)}>
                Coffee {this.props.name}
            </div>
        )
    }
}