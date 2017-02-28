function addPerson()
{
    var firstNameElement = document.getElementById("firstNameField");
    // console.log("Adding a person: " + firstNameElement.value);
    viewController.addPerson(firstNameElement.value);
    localStorage.setItem("Username", firstNameElement.value);
}


function Person(personName)
{
  this.name = personName;

}

function PersonModel()
{
  this.persons = new Array();

  this.addPerson = function(person)
  {
    this.persons.push(person);
  }

  this.getPersons = function()
  {
    return this.persons;
  }
}
var viewController = new ViewController();

function ViewController()
{
  this.personModel = new PersonModel();

  this.updateView = function()
  {
    var results = document.getElementById("resultBox");

    for (var i = 0; i < this.personModel.getPersons().length; i++)
    {
      var onePerson = this.personModel.getPersons()[i];
      results.innerHTML = onePerson.name;
    }
  }
  this.addPerson = function(name)
  {
    var newPerson = new Person(name);
    this.personModel.addPerson(newPerson);
    this.updateView();
    document.getElementById("resultBox").innerHTML = localStorage.getItem("Username");

  }
}