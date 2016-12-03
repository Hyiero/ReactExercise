var React = require('react');

module.exports = function(){

    var header = React.createClass({
        displayName: "Header",
        render: function(){
            return (
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
            )
        }
    });

    return {
        Header: header
    }
}();