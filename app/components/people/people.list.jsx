var React = require('react');
var _ = require('lodash');
var Person = require('./person.jsx').Person;

module.exports = function(){

    var people = React.createClass({
        renderEachPerson: function(){
            var props = _.omit(this.props, 'people');

            return _.map(this.props.people, function(individual,index){
                return <Person key={"person_"+index}
                               index={index}
                               updateList={props.updateList}
                               individual={individual}/>
            });
        },
        render: function(){
            return (
                <tbody>
                    {this.renderEachPerson()}
                </tbody>
            )
        }
    });

    return {
        People: people
    }
}();