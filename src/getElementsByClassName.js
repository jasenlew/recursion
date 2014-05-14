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

		//iterate over ClassList as element may have more than one class
		for (var j = 0; j < node.classList.length; j += 1) {

			// check if current node has class
			if (node.classList[j] === className) {
			
				// if have class, then add node to arr
				return arr.push(node);
			}
		}

		//need to check if node has children, i.e. may be null				
		if (node.childNodes !== undefined) {

			// iterate over all children and sibling
			for (var i = 0; i < node.childNodes.length; i += 1) { //vs node.childElementCount			
				//call recursive function
				recurseDOM(node.childNodes[i]);  // vs. node.Children[i]
			}

		}

		return arr;
	}

	recurseDOM(currentNode);
};


/*
	//create recurseDOM function
	function recurseDOM (node) {

		// if no children
		if (node.childNodes[0] === false) {

			// check if current node has class
			if (node.classList[0] === className) {
		
				// if have class, then return arr of node
				return arr.push(node);

			}
		
		// if have children
		} else {

			// get number of children to know how many to iterate over
			var l = node.childNodes.length;

			// iterate over all children
			for (var i = 0; i < l; i += 1) {
				//call recursive function
				recurseDOM(node.childNodes[i]);
			}
		}

		return arr;

	}

	recurseDOM(currentNode);

};
*/

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