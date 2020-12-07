class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null
  }

  //read playerCount from database
  //.ref : refer to location
//.on : listener to the value
//.val() : read the value
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  //writes the playerCount to the database
  //.update : updates the value in database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //writes the player name and distance to the database
  //.set : updates multiple values
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //reads all players info from database
  //static : it is not connected to one single player
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
  //reads carsAtEnd from database
  getcarsAtend(){
    var playerRef = database.ref('carsAtend');
    playerRef.on("value",(data)=>{
      this.rank = data.val();
    })
  }

  //writes carsAtEnd to the datbase
  static updatecarsAtend(rank){
    database.ref('/').update({
      carsAtend: rank
    });
  }
}
