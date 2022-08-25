<?php
class Person {
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother=null, $father=null) {
    $this -> name = $name;
    $this -> lastname = $lastname;
    $this -> age = $age;
    $this -> mother = $mother;
    $this -> father = $father;
    $this -> hp = 100;
  }
  function sayHi ($name) {
    return "Hi, $name. I'm ".$this -> name;
  }
  function setHp($hp){
    if($this -> hp + $hp > 100) $this -> hp = 100;
    else $this -> hp = $this -> hp + $hp;
  }
  function getHp(){
    return $this -> hp;
  }
  function getName(){
    return $this -> name;
  }
  function getLastName(){
    return $this -> lastname;
  }
  function getAge(){
    return $this -> age;
  }
  function getMother(){
    return $this -> mother;
  }
  function getFather(){
    return $this -> father;
  }
  function getInfo(){
    return "<h3>A few words about myself</h3><br>"."My name is ".$this -> getName()." ".$this -> getLastName().". "."I'm ".$this -> getAge()." years old.<br>".
    "My mother's name is ".$this -> getMother() -> getName()." ".$this -> getMother() -> getLastName().". "."She's ".$this -> getMother() -> getAge()." years old.<br>".
    "My father's name is ".$this -> getFather() -> getName()." ".$this -> getFather() -> getLastName().". "."He's ".$this -> getFather() -> getAge()." years old.<br>".
    "My maternal grandmother's name is ".$this -> getMother() -> getMother() -> getName()." ".$this -> getMother() -> getMother() -> getLastName().". "."She's ".$this -> getMother() -> getMother() -> getAge()." years old.<br>".
    "My maternal grandfather's name is ".$this -> getMother() -> getFather() -> getName()." ".$this -> getMother() -> getFather() -> getLastName().". "."He's ".$this -> getMother() -> getFather() -> getAge()." years old.<br>".
    "My paternal grandmother's name is ".$this -> getFather() -> getMother() -> getName()." ".$this -> getFather() -> getMother() -> getLastName().". "."She's ".$this -> getFather() -> getMother() -> getAge()." years old.<br>".
    "My paternal grandfather's name is ".$this -> getFather() -> getFather() -> getName()." ".$this -> getFather() -> getFather() -> getLastName().". "."He's ".$this -> getFather() -> getFather() -> getAge()." years old.";
  }
}
// $drug = 50;
$igor = new Person("Igor", "Petrov", 68);
$maria = new Person("Maria", "Petrova", 67);
$ivan = new Person("Ivan", "Ivanov", 65);
$svetlana = new Person("Svetlana", "Ivanova", 61);

$alex = new Person("Alex", "Ivanov", 42, $svetlana, $ivan);
$olga = new Person("Olga", "Ivanova", 40, $maria, $igor);
$valera = new Person("Valera", "Ivanov", 17, $olga, $alex);

echo $valera -> getInfo();

// echo $valera -> getMother() -> getFather() -> getName();
// Здоровье человека не может быть больше 100%

// echo $alex -> name;
// echo $alex -> sayHi($igor -> name);



// $alex -> setHp (- 30);
// echo $alex -> getHp()."<br>";
// $alex -> setHp($drug);
// echo $alex -> getHp();



?>