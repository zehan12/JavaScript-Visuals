import React, { Component } from 'react';
import filter from 'lodash/filter';
import includes from 'lodash/includes';

const App = () => {
    return (
        <div className="App">
            <div className="warning-text">
                <p>Note: This application is not built for smaller devices.</p>
            </div>
            <div className="Navbar">
                <Navbar filterMethods={this.filterMethods} />
            </div>
            <div className="results-app">
                <Results methods={this.state.filteredMethods} />
            </div>
            <Footer />
        </div>
    )
}