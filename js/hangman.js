var secret ='JAVASCRIPT';
var remove=0;


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
  lettersGuessed+=event.target.textContent;
  event.target.setAttribute('disabled','disabled');
  var adress=document.getElementById('secret');
  var returned=getGuessedWord(secret, lettersGuessed);
  adress.textContent=returned;
  if(secret.indexOf(event.target.textContent)<0)
  {
    state++;
  }
  var picture=document.getElementById('picture');

    picture.setAttribute('src','images/picture0' + state + '.jpg');

    if (state==6){
    alert('Prehral si.');
    remove=1;
    for (var btn of document.getElementById('alphabet').childNodes)
    {
      btn.setAttribute('disabled','disabled');
    }
    //remove element with id secret
    var element = document.getElementById("secret");
    element.parentNode.removeChild(element);
    //in element with id divsecretr creat new element div with id secret
    var divsec=document.getElementById('divsecret');
    elem=document.createElement('div');
    elem.setAttribute('class','col-md-12 text-center');
    elem.setAttribute('id','secret');
    //show element
    divsec.appendChild(elem);
    //get address of element - secret
    var sec=document.getElementById('secret');
    for(var i=0;i<secret.length;i++)
    {
        if(returned.charAt(i)!=secret.charAt(i))
        {
          ele=document.createElement('span');
          ele.setAttribute('style','color:red');
          sec.appendChild(ele);
          ele.textContent=secret.charAt(i);
        }
        else
        {
          ele=document.createElement('span');
          ele.setAttribute('style','color:#000000');
          sec.appendChild(ele);
          ele.textContent=secret.charAt(i);
        }
    }
  }

  


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
  picture.setAttribute('src','images/picture00.jpg');
  state=0;
  if(remove==1)
  {
    var element = document.getElementById("secret");
    element.parentNode.removeChild(element);
    var divsec=document.getElementById('divsecret');
    elem=document.createElement('span');
    elem.setAttribute('id','secret');
    divsec.appendChild(elem);
  }
  remove=0;
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