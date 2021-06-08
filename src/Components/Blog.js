import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
export default class Blog extends Component {
    render() {
        return (
            <div>
                <Card style={{width: '90%',padding:'5px',margin:'10px auto',boxShadow:'1px 2px 3px grey'}}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.author}</Card.Title>
                        <Card.Text>
                            {this.props.content}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
