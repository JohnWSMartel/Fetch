'use strict'

var ctx
var canvas
var height
var width

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
	draw(data)
}

fetch( "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json" ).then( result => {return result.json()}).then( parsedJSON => {displayData(parsedJSON),draw()})

var draw = function(json)
{
	canvas = document.querySelector('canvas')
	ctx = canvas.getContext('2d')
	width = canvas.width = 600 //window.innerWidth
	height = canvas.height = 500
	var list = document.querySelector('ul')
	ctx.fillRect(0,0,width,height)
	var data = collectedData(json)
	display(data)
}

var collectedData = function(json)
{
	var pokeweights = []
	for(var i = 0;i<6;i++)
	{
		pokeweights[i] = json.pokemon[i]
	}
	return pokeweights
}

var display = function(data)
{
	for(var i=0;i<6;i++)
	{
		ctx.fillStyle = 'red'
		ctx.fillRect(i*100,height-parseFloat(data[i].weight),25,parseFloat(data[i].weight))
		ctx.font = '16px Times New Roman'
		ctx.fillText(data[i].name,i*100,height-parseFloat(data[i].weight)-10)
	}
}