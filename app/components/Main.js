var React = require('react');
//var ReactDOM = require('react-dom')
// step 2.. i dont want react to render this component
    var Main = React.createClass({
    render: function() {
        return (
            // Render Main - navbar
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                    Menu
                    </div>
                </nav>
            
            <div className="container">
                {this.props.children}
                </div>
            </div>
            
        )
    }

})

//render component to the view
// i want that Main,js route and doesnt require a render
//ReactDOM.render(<Main />, document.getElementById('app'));

module.exports = Main;