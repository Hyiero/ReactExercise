var React = require('react');
var peopleService = require('../services/people.service');
var Header = require('./people/people.list.header.jsx').Header;
var AddPerson = require('./people/person.add.jsx').Add;
var People = require('./people/people.list.jsx').People;
//Create Class takes an object
//All classes must implement ONE thing and that is render(which is a method)
module.exports = function(){

    var layout = React.createClass({
            displayName: "ListOfPeople",
            getInitialState: function(){
                return {
                    people: peopleService.getList()
                }
            },
            render: function(){
                return (
                    <div>
                        <h2> List Of People</h2>
                        <div>
                            <AddPerson updateList={this.updateList}/>
                            <table>
                                <Header/>
                                    <People people={this.state.people}
                                            updateList={this.updateList}/>
                            </table>
                        </div>
                    </div>
                )
            },
            updateList: function(){
                console.log("Updating List");
                this.setState({
                    people: peopleService.getList()
                });
            }
        });

    return {
        App: layout
    }
}();