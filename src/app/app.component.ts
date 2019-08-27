import { Component } from '@angular/core';
import { Network } from 'vis-network';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

getNodes(){	
var nodes = [
		    {id: 0, label:'internet', shape: 'image', image:'images/blank.png'},
        {id: 1, label:'hub', shape: 'image', image:'images/blank.png'},
        {id: 2, label:'server', shape: 'image', image:'images/blank.png'},
        {id: 3, label:'pc', shape: 'image', image:'images/blank.png'},
        {id: 4, label:'printer', shape: 'image', image:'images/blank.png'},
        {id: 5, label:'router', shape: 'image', image:'images/blank.png'},
		    {id: 6, label:'pc', shape: 'image', image:'images/blank.png'},
		    {id: 7, label:'pc', shape: 'image', image:'images/blank.png'},
	]
	
	var i = 0;
	
	while(i < nodes.length){
	nodes[i].image = this.checkIcon(nodes[i].label);
	i++;
	}
 return nodes;
}

getEdges(){	
	var edges = [
		{from: 0, to: 1},
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5},
		    {from: 5, to: 3},
		    {from: 5, to: 6},
		    {from: 5, to: 7}
	]
	
	return edges;
}

checkIcon(txt){	
	var value;
	
	switch(txt) {
	
	case 'internet':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/internet.png';
    break;
	
	case 'hub':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/hub.png'
    break;
	
	case 'server':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/server.png'
    break;
	
	case 'pc':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/pc.png'
    break;
	
	case 'printer':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/printer.png'
    break;
	
	case 'router':
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/router.png'
    break;
	
	default:
    value = 'https://raw.githubusercontent.com/udeshchamika/images/master/blank.png'
}

return value;
}

ngOnInit(){
  // create an array with nodes
    var nodes = this.getNodes();

    // create an array with edges
    var edges = this.getEdges();

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
	
    // initialize your network!
    var network = new Network(container, data, options);
}
  
}
