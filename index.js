

  function receivesAFunction(cb){
    return cb()
  }
  
  
  function returnsANamedFunction(){
    return function test(){
    }
  }
  
  
  function returnsAnAnonymousFunction(){
    return function(){
    }
  }

// function Monday() {
//     runFiveMiles();
//     liftWeights();
//     }
    
//     function exerciseRoutine(postRunActivity) { 
//     runFiveMiles();
//     postRunActivty();
//     }
    
//     function Monday() {
//     exerciseRoutine(liftWeights);
//     }
    
//     function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//     }
      