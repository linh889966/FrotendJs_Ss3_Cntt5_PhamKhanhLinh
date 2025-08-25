import React, { Component } from "react";

interface State {
    subject: string[]
}

export default class Execise01 extends Component<{},State>{

    constructor(props:{}){
        super(props)
        this.state = {
            subject :['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh']
        }
    }

    render(){
        return(
            <div>
                <h2>Danh sách môn học</h2>
                <ul>
                    {this.state.subject.map((subject) => (<ol>{subject}</ol>))}
                </ul>
            </div>
        )
    }
}