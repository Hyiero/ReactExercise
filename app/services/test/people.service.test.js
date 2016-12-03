var assert = require('assert');
var peopleService = require('../people.service');

describe('People Service',function(){
    it('should return a list of length 3 to start with',function(){
        //Arrange

        //Act
        var listOfPeople = peopleService.getList();

        //Assert
        assert.equal(listOfPeople.length,3);
    });

    it('should return a list of length 4 if we call add',function(){
        //Arrange
        var person = {
            id: 4,
            name:{
                first: "Blah",
                last: "Moreblah"
            },
            age: 23
        };

        //Act
        peopleService.add(person);
        var listOfPeople = peopleService.getList();

        //Assert
        assert.equal(listOfPeople.length,4);
    });

    it('should delete from list at index if remove is called',function(){
        //Arrange
        var index = 0;
        var initialIdAtIndex = peopleService.getList()[index].id;

        //Act
        peopleService.remove(index);
        var afterRemoveIdAtIndex = peopleService.getList()[index].id;

        //Assert
        assert.notEqual(initialIdAtIndex,afterRemoveIdAtIndex);
    });

    it('should update a person at list when update is called',function(){
        //Arrange
        var index = 0;
        var updatedName = "Roger";
        var listOfPeople = peopleService.getList();
        var personInitialFirstName = listOfPeople[0].name.first;
        var person = listOfPeople[0];
        person.name.first = updatedName;

        //Act
        peopleService.update(person,index);
        var freshList = peopleService.getList();
        var updatedPersonFirstName = freshList[0].name.first;

        //Assert
        assert.notEqual(updatedPersonFirstName,personInitialFirstName);
        assert.equal(updatedPersonFirstName,person.name.first);
    })

});