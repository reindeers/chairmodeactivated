var dManager = new function() {

	var dObject = {};
	dObject.start = false;
	var self = this; 

	function onMouseDown(e) { 
		e = fixEvent(e);
		
		if (e.which != 1) return;
		
		var dElement = findDraggableElement(e);
		
		if (!dElement) return;
		
		dObject.element = dElement;
		dObject.xCord = e.pageX;
		dObject.yCord = e.pageY;
	}

	function onMouseMove(e) { 
		if (!dObject.element) return;
		e = fixEvent(e);
		
		if (!dObject.start){
			var moveX = e.pageX - dObject.xCord;
			var moveY = e.pageY - dObject.yCord;
						
			dObject.start = true; 

			var coords = getCoords(dObject.element);
			dObject.shiftX = dObject.xCord - coords.left;
			dObject.shiftY = dObject.yCord - coords.top;
			startDrag(e); 
		}
		dObject.element.style.left = e.pageX - dObject.shiftX + 'px';
		dObject.element.style.top = e.pageY - dObject.shiftY + 'px';
		 
		return false;	
	}
	
	function onMouseUp(e) { 
		if (dObject.start) {
			e = fixEvent(e);
			finishDrag(e);
		}
		dObject = {};
	}
	
	function startDrag(e) {
		var element = dObject.element;
		document.body.appendChild(element);
		element.style.zIndex = 9999;
		element.style.position = 'absolute';
	}


	function finishDrag(e) {
		var dElem = findDroppable(e);
		if (dElem) self.onDragEnd(dObject, dElem);

	}
	
	this.onDragEnd = function(dObject, dElem) { };

	function findDraggableElement(event){
		var element = event.target;
		while (element != document && element.getAttribute('draggable') == null){
			element = element.parentNode;
		}
		
		return element == document ? null : element;
	}
	
	function findDroppable(event) {
	var element = getElementUnderClientXY(dObject.element, event.clientX, event.clientY);
		while(element != document && element.getAttribute('droppable') == null) {
			element = element.parentNode;
		}
	return element == document ? null : element;
	}


	function getElementUnderClientXY(elem, clientX, clientY) {
		var display = elem.style.display || '';
		elem.style.display = 'none';
		var target = document.elementFromPoint(clientX, clientY);
		elem.style.display = display;
		 	
		return target;
	}
 

	
	document.onmousedown = onMouseDown;
	document.onmousemove = onMouseMove;
	document.onmouseup = onMouseUp;
}