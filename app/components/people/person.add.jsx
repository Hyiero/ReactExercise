var React = require('react');
var peopleService = require('../../services/people.service.js');

module.exports = function(){

    var addPerson = React.createClass({
        displayName: "Add Person",
        render: function(){
            return (
                <form onSubmit={this.createPerson}>
                    <input ref="first" type="text" placeholder="First Name"/>
                    <input ref="last" type="text" placeholder="Last Name" />
                    <input ref="age" type="number" placeholder="Age"/>
                    <button>Add</button>
                </form>
            )
        },
        createPerson: function(e){
            e.preventDefault();
            var person = {
                name:{
                    first: this.refs.first.value,
                    last: this.refs.last.value
                },
                age: this.refs.age.value
            };
            this.clearInputs();

            peopleService.add(person);

            this.props.updateList();
        },
        clearInputs: function(){
            this.refs.first.value = '';
            this.refs.last.value = '';
            this.refs.age.value = '';
        }
    });

    return {
        Add: addPerson
    }
}();