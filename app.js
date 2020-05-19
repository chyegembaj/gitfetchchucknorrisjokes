//Simple project to get Chuck Norris Jokes using external API with AJAX/XMLHttpRequest)

//Add event listner
document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const xhr = new XMLHttpRequest();
  number0fJokes = document.getElementById('number').value;


  xhr.open('GET', `http://api.icndb.com/jokes/random/${number0fJokes}`, true);

  
  xhr.onload = function(){ 
    if(this.status === 200){
      const jokes = JSON.parse(this.responseText);
      let output = '';
      
      if(jokes.type === "success" ){
        jokes.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output += `<li>Something went wrong</li>`;
      }
      document.getElementById("display-jokes").innerHTML = output;
    }

  }
  xhr.send();


  e.preventDefault();
}
//Create object of XMLHttpRequest Object
//Call onload method
//send 


