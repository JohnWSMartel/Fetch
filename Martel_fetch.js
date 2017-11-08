var displayData = function (data)
{
	var ul = document.createElement('ul')
	for(var creature of data.pokemon)
	{
		var li = document.createElement('li')
		li.innerText = creature.name + "'s weight: " + creature.weight
		ul.appendChild(li)
	}
	document.querySelector('body').appendChild(ul)
}
var loadedData
fetch( "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json" ).then( result => {return result.json()}).then( parsedJSON => {displayData(loadedData),draw()})
/*var xhr = new XMLHttpRequest()
xhr.addEventListener( "load", ()=> 
	{
		loadedData = JSON.parse( xhr.responseText )
		displayData( loadedData )
		draw()
	})
xhr.open( "GET", "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json" )
xhr.send()*/

//https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

var ctx
var canvas
var height
var width

var draw = function()
{
	canvas = document.querySelector('canvas')
	ctx = canvas.getContext('2d')
	width = canvas.width = 600 //window.innerWidth
	height = canvas.height = 500
	var list = document.querySelector('ul')
	ctx.fillRect(0,0,width,height)
	var data = collectedData()
	display(data)
}

var collectedData = function()
{
	var pokeweights = []
	for(i = 0;i<6;i++)
	{
		pokeweights[i] = loadedData.pokemon[i]
	}
	return pokeweights
}

var display = function(data)
{
	for(i=0;i<6;i++)
	{
		ctx.fillStyle = 'red'
		ctx.fillRect(i*100,height-parseFloat(data[i].weight),25,parseFloat(data[i].weight))
		ctx.font = '16px Times New Roman'
		ctx.fillText(data[i].name,i*100,height-parseFloat(data[i].weight)-10)
	}
}
