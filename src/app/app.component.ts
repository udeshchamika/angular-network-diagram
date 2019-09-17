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
		    {id: 0, level:'0', label:'internet', shape: 'image', image:''},
        {id: 1, level:'1', label:'hub', shape: 'image', image:''},
        {id: 2, level:'1', label:'server', shape: 'image', image:''},
        {id: 3, level:'2', label:'pc', shape: 'image', image:''},
        {id: 4, level:'4', label:'printer', shape: 'image', image:''},
        {id: 5, level:'2', label:'router', shape: 'image', image:''},
		    {id: 6, level:'3', label:'pc', shape: 'image', image:''},
		    {id: 7, level:'2', label:'hub', shape: 'image', image:''},
        {id: 8, level:'1', label:'pc', shape: 'image', image:''},
        {id: 9, level:'2', label:'server', shape: 'image', image:''},
        {id: 10, level:'3', label:'pc', shape: 'image', image:''},
        {id: 11, level:'4', label:'pc', shape: 'image', image:''},
        {id: 12, level:'2', label:'pc', shape: 'image', image:''},
        {id: 13, level:'4', label:'printer', shape: 'image', image:''},
        {id: 14, level:'5', label:'hub', shape: 'image', image:''},
        {id: 15, level:'1', label:'pc', shape: 'image', image:''},
        {id: 16, level:'5', label:'pc', shape: 'image', image:''},
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
        {from: 0, to: 2},
        {from: 1, to: 3},
        {from: 2, to: 7},
        {from: 2, to: 5},
        {from: 5, to: 6},
        {from: 7, to: 4},
        {from: 2, to: 8},
        {from: 5, to: 9},
        {from: 5, to: 10},
        {from: 4, to: 8},
        {from: 9, to: 12},
        {from: 9, to: 13},
        {from: 9, to: 11},
        {from: 3, to: 14},
        {from: 14, to: 16},
        {from: 0, to: 15},

        /*{from: 0, to: 1},
        {from: 0, to: 7},
        {from: 0, to: 14},
        {from: 7, to: 5},
        {from: 1, to: 2},
        {from: 14, to: 9},
        {from: 2, to: 5},
        {from: 9, to: 5},
        {from: 5, to: 3},
        {from: 5, to: 6},
        {from: 5, to: 8},
        {from: 5, to: 10},
        {from: 5, to: 11},
        {from: 5, to: 12},
        {from: 5, to: 15},
        {from: 5, to: 16},
        {from: 10, to: 4},
        {from: 11, to: 13},*/
        
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

    var options = {
      edges: {
        width:2,
        
      color: {
        color:'blue',
        highlight:'green',
    },
        },
      
      layout: {
        hierarchical: {
          direction: 'UD',
          levelSeparation:100,
          nodeSpacing: 100,
          sortMethod : 'directed'
  }
}
    };
	
    // initialize your network!
    var network = new Network(container, data, options);
}
  
}
