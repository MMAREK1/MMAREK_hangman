var secret ='JAVASCRIPT';


function getGuessedWord(secret, lettersGuessed)
{
  var knowsletters='';
  for(var i=0;i<secret.length;i++)
    {
      if(lettersGuessed.indexOf(secret.charAt(i))>=0)
        {
          knowsletters+=secret.charAt(i);
        }
      else
        knowsletters+='_';
    }
  return knowsletters;
}
function onClick(event)
{
  //deactive button
  event.target.setAttribute('disabled','disabled');
  if(secret.indexOf(event.target.textContent)<0)
  {
    state++;
  }
  var picture=document.getElementById('picture');
  switch(state)
  {
    case 1:
    picture.setAttribute('src','images/picture01.jpg');
    break;
    case 2:
    picture.setAttribute('src','images/picture02.jpg');
    break;
    case 3:
    picture.setAttribute('src','images/picture03.jpg');
    break;
    case 4:
    picture.setAttribute('src','images/picture04.jpg');
    break;
    case 5:
    picture.setAttribute('src','images/picture05.jpg');
    break;
    case 6:
    picture.setAttribute('src','images/picture06.jpg');
    alert('Prehral si.');
    for (var btn of document.getElementById('alphabet').childNodes)
    {
      btn.setAttribute('disabled','disabled');
    }
    break;
    default:
    break;

  }
  lettersGuessed+=event.target.textContent;

  var adress=document.getElementById('secret');
  var returned=getGuessedWord(secret, lettersGuessed);
  adress.textContent=returned;
  if(returned.indexOf('_')<0)
  {
    alert('Vyhral si');
        for(var btn of document.getElementById('alphabet').childNodes)
    {
      btn.setAttribute('disabled','true');
    }
  }
}
function restart()
{
  state=0;
  lettersGuessed='';
  var adress=document.getElementById('secret');
  returned=getGuessedWord(secret, lettersGuessed);
  adress.textContent=returned;
  for(var btn of document.getElementById('alphabet').childNodes)
    {
      btn.removeAttribute('disabled');
    }
}

window.onload=function(){
  restart();
  var reset=document.getElementById('restart');
  reset.addEventListener('click',restart);
  var group=document.getElementById('alphabet');

for(var i=65;i<91;i++)
{
  el=document.createElement('button');
  el.setAttribute('type','button');
  el.setAttribute('id','button');
  el.setAttribute('class','btn btn-primary');
  el.addEventListener('click',onClick);
  el.textContent=String.fromCharCode(i);

  group.appendChild(el);

}
}