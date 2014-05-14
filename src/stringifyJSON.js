// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
  if (typeof obj === 'number') {
  	return obj.toString();
  } else if (typeof obj === 'boolean') {
  	return obj.toString();  	
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (typeof obj === 'undefined') {
  	return "undefined";
  } else if (obj === null) {
  	return "null";
  } else if (Object.prototype.toString.call(obj) === '[object Array]' || Object.prototype.toString.call(obj) === '[object Object]') {
 
  	var str = '';

  	if (Object.prototype.toString.call(obj) === '[object Array]') {
	  	str += '[';
	  	
	  	for (var i = 0, l = obj.length; i < l; i += 1) {
	  		if (typeof obj[i] !== 'function' && typeof obj[i] !== 'undefined') {
		  		str += stringifyJSON(obj[i]);
		  		if (i + 1 < l) {
		  			str += ',';
		  		}
		  	}
	  	}
	  	str += ']';
  	}

  	if (Object.prototype.toString.call(obj) === '[object Object]') {
		str += '{';
		var objectLength = _.size(obj);
		var counter = 1;
		
		for (var key in obj) {
		  if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
		    str += stringifyJSON(key);
		    str += ':';
		    str += stringifyJSON(obj[key]);
		  
 			if (counter < objectLength) {
		  		str += ',';
		  	}
		  }
		  counter += 1;
		}
	  	str += '}';
	}
  	return str;
  }
};