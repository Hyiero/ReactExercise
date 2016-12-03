var React = require('react');
var peopleService = require('../../services/people.service.js');

module.exports = function(){

    var person = React.createClass({
        displayName: "Person",
        getInitialState: function(){
            return {
                isEditing: false
            }
        },
        render: function(){
            if(this.state.isEditing){
                return (
                    <tr className="person">
                        <td><input type="text" defaultValue={this.props.individual.name.first} ref="first" form="personForm"/></td>
                        <td><input type="text" defaultValue={this.props.individual.name.last} ref="last" form="personForm"/></td>
                        <td><input type="number" defaultValue={this.props.individual.age} ref="age" form="personForm"/></td>
                        <td>
                            <button onClick={this.onSaveClick} form="personForm">Save</button>
                            <button onClick={this.onCancelClick}>Cancel</button>
                        </td>
                    </tr>
                )
            }
            return (
                <tr className="person">
                    <td className="first-name">{this.props.individual.name.first}</td>
                    <td className="last-name">{this.props.individual.name.last}</td>
                    <td className="age">{this.props.individual.age}</td>
                    <td>
                        <button onClick={this.onEditClick}>Edit</button>
                        <button onClick={this.onDeleteClick}>Delete</button>
                    </td>
                </tr>
            )
        },
        onCancelClick: function(){
            this.setState({
                isEditing: false
            })
        },
        onDeleteClick: function(){
            peopleService.remove(this.props.index);
            this.props.updateList();
        },
        onEditClick: function(){
            this.setState({
                isEditing: true
            })
        },
        onSaveClick: function(e){
            e.preventDefault();
            this.setState({
                isEditing: false
            });

            var person = {
                id: this.props.individual.id,
                name:{
                    first: this.refs.first.value,
                    last: this.refs.last.value
                },
                age: this.refs.age.value
            };

            peopleService.update(person,this.props.index);
            this.props.updateList();
        }
    });

    return {
        Person: person
    }
}();