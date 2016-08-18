var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

var Repos = require("./Github/Repos");
var UserProfile = require("./Github/UserProfile")
var Notes = require("./Notes/Notes")

// This class will handle 3 different states of each componenty
var Profile = React.createClass({
    // initial state, data in blank
    getInitialState: function() {
        return {
            notes: [1,2,3],
            bio: {
                name: "Andres Colodrero",
            },
            repos: ["a","b","c"]    
        }
    },
render: function() {
console.log(this.state)
console.log(this.props)
    return (
        <div className="row">
            <div className="col-md-4">
                <UserProfile username={this.props.params.username} bio={this.state.bio} />        
            </div>
            <div className="col-md-4">
                <Repos repos={this.state.repos}/>         
            </div>
            <div className="col-md-4">
              <Notes notes={this.state.notes}/>
         
            </div>
        </div>
    )

}

})

module.exports = Profile;
