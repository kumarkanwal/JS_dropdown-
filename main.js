let month = [ 'january', 'february', 'march', 'april','may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
let option = "";
for( i = 0; i < month.length; i++){

 option += '<option value="' + month[i] + '">' + month[i] + '</option>';    
// option = month[i] ;
console.log(option);

}

document.querySelector("#month").innerHTML = (option);


