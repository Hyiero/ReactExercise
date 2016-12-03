module.exports = function(){
    var listOfPeople = [
        {
            id: 1,
            name: {
                first: "Brandon",
                last: "Ripley"
            },
            age: 27
        },
        {
            id: 2,
            name: {
                first: "Holly",
                last: "Laudenslager"
            },
            age: 29
        },
        {
            id: 3,
            name: {
                first: "Edward",
                last: "Scissorhands"
            },
            age: 32
        }
    ];

    var getListOfPeople = function(){
        return listOfPeople;
    };

    var addToList = function(person){
        person.id = listOfPeople.length + 1;
        listOfPeople.push(person);
    };

    var removeFromList = function(index){
        listOfPeople.splice(index,1);
        console.log(listOfPeople)
    };

    var updatePerson = function(person,index){
        console.log(person);
        listOfPeople.splice(index,1,person);
    };

    return {
        getList: getListOfPeople,
        add: addToList,
        remove: removeFromList,
        update: updatePerson
    }
}();