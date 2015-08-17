/* ---------------------------- JC_Functions: Get Object Information ---------------------------- */
//http://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
var listLocalStorageKeys = function (){
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
	console.log( localStorage.getItem( localStorage.key( i ) ) );
	}
}


function getDyads(){

var nativeEnumerables = ['top', 'location', 'document', 'window', 'external', 'chrome', '$', 'jQuery'];
var myEnumerables = [];

var windowObjs = Object.keys(window);
//console.log(windowObjs);
	for(obj in windowObjs){
		//if((nativeEnumerables.indexOf(windowObjs[obj]) == -1) && (typeof obj !== "function")){
		//if(typeof obj !== "function" && typeof obj == "object"){
		//myEnumerables.push[windowObjs[obj]];
		//console.log(windowObjs[obj]);
		//}
	}
 //console.log(all);
 //return all;
}

var countProps = function(){
var count = 0;
    for (var prp in this){
        if(this.hasOwnProperty(prp) && typeof this[prp] !== 'function'){
            count++;
        };
    }
    return count;
}


/*
//Source: http://stackoverflow.com/questions/17246309/get-all-user-defined-window-properties
var globalProps = [ ];

function readGlobalProps() {
    globalProps = Object.getOwnPropertyNames( window );
}

function findNewEntries() {
    var currentPropList = Object.getOwnPropertyNames( window );

    return currentPropList.filter( findDuplicate );

    function findDuplicate( propName ) {
        return globalProps.indexOf( propName ) === -1;
    }
}

function getParentName(childName){
	for(p in document){
		if(typeof document[p] !== 'function'){
			if(document[p].hasOwnProperty(childName)){
				return p
			}
		}
	}
}

*/

//Source: http://stackoverflow.com/questions/15690706/recursively-looping-through-an-object-to-build-a-property-list
var paths = [];
function getpaths(obj) {
   for(var property in obj) {	
		if(typeof obj !== "function" && typeof obj[property] == "object"){//if current property contains an object
			paths.push("[" +  property + "][" + obj[property] + "]");//then push object name and property as string				
			getpaths(obj[property]);//and recursively call function again to go the next level down
		}
		else{//base case: if current property contains only a value, not an object
			//then DO NOTHING; we've reached the bottom level
		}
	}
	return paths;
}