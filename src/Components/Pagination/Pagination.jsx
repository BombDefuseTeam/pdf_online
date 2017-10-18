import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationBasic = React.createClass({
    getInitialState() {
        return {
            activePage: 1
        };
    },

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey
        });
    },

    render() {
        return (
            <div>
                <Pagination

                    prev
                    next
                    bsSize="large"
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
                <br />
            </div>
        );
    }
});

export { PaginationBasic };