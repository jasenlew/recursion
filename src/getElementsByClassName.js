// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
	//var of current node
	var currentNode = document.body;

	//var of arr to hold all elements with classNames that will be returned
	var arr = [];

	//create recurseDOM function
	function recurseDOM (node) {

		//test to see if node has a class
		if (node.classList !== undefined) {

			//iterate over ClassList as element may have more than one class
			for (var j = 0; j < node.classList.length; j += 1) {

				// check if current node has class
				if (node.classList[j] === className) {
				
					// if have class, then add node to arr
					arr.push(node);
				}
			}
		}

		//need to check if node has children				
		if (node.childNodes.length > 0) {

			// iterate over all children and sibling
			for (var i = 0; i < node.childNodes.length; i += 1) { //vs node.childElementCount			
				//call recursive function
				recurseDOM(node.childNodes[i]);  // vs. node.Children[i]
			}

		}

		return arr;
	}

	return recurseDOM(currentNode);
};


/*
	function iterateDOM(node) {
 		
 		if (node.className === className) {
 			return arr.push(node);
 		}
  		
  		for (node = node.firstChild; node !== null; node = node.nextSibling) {
    		iterateDOM(node);
  		}

  		return arr;
	}

	iterateDOM(currentNode);
};
*/