(function(){

if("localStorage" in window){

  function LocalDB(name) {
    this.name = name;

  }

  LocalDB.prototype.save = function(key, val){
      window.localStorage.setItem(this.name + "." + key, JSON.stringify(val));
  }

  LocalDB.prototype.get = function(key){
    var tmp = JSON.parse(window.localStorage.getItem(this.name + "." + key));
    console.log(tmp);
  }

  var DB1 = new LocalDB("DB1");

  var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
  };

  DB1.save("janek", janek);
  DB1.get("janek");


} else return;

})();