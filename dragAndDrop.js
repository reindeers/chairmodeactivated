var dManager = new function() {

	var dObject = {};
	dObject.start = false;
	var self = this; // для доступа к себе из обработчиков

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
			
			if ( Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ) {
				return; // ничего не делать, мышь не передвинулась достаточно далеко
			}
			
			dObject.start = true; // создать аватар
			if (!dObject.element) { // отмена переноса, нельзя "захватить" за эту часть элемента
				dObject = {};
				return;
			}
		
			var coords = getCoords(dObject.element);
			dObject.shiftX = dObject.xCord - coords.left;
			dObject.shiftY = dObject.yCord - coords.top;
			startDrag(e); // отобразить начало переноса
		}
	 
		// отобразить перенос объекта при каждом движении мыши
		dObject.element.style.left = e.pageX - dObject.shiftX + 'px';
		dObject.element.style.top = e.pageY - dObject.shiftY + 'px';
		 
		return false;	

	}
	function onMouseUp(e) { 
		// (1) обработать перенос, если он идет
		if (dObject.start) {
			e = fixEvent(e);
			finishDrag(e);
		}
		  // в конце mouseup перенос либо завершился, либо даже не начинался
		  // (2) в любом случае очистим "состояние переноса" dObject
		dObject = {};
		
	 
	}
	

	function findDraggableElement(event){
		var element = event.target;
		
		while (element != document && element.getAttribute('draggable') == null){
			element = element.parentNode;
		}
		
		return element == document ? null : element;
	}


	function startDrag(e) {
		var element = dObject.element;

		// инициировать начало переноса
		document.body.appendChild(element);
		element.style.zIndex = 9999;
		element.style.position = 'absolute';
	}


	function finishDrag(e) {

		var dElem = findDroppable(e);

		if (!dElem) {
			self.onDragCancel(dObject);
		} else {
			self.onDragEnd(dObject, dElem);
		}
		
	}


	function findDroppable(event) {
	var element = getElementUnderClientXY(dObject.element, event.clientX, event.clientY);
		while(element != document && element.getAttribute('droppable') == null) {
			element = element.parentNode;
		}
	return element == document ? null : element;
	}

	/* получить элемент на координатах clientX/clientY, под elem */
	function getElementUnderClientXY(elem, clientX, clientY) {
		// сохранить старый display и спрятать переносимый элемент
		var display = elem.style.display || '';
		elem.style.display = 'none';
		 
		  // получить самый вложенный элемент под курсором мыши
		var target = document.elementFromPoint(clientX, clientY);
		 
		  // показать переносимый элемент обратно
		elem.style.display = display;
		 
		if (!target || target == document) { // такое бывает при выносе за границы окна
			target = document.body; // поправить значение, чтобы был именно элемент
		}
		 
		return target;
	}

	 
	document.onmousedown = onMouseDown;
	document.onmousemove = onMouseMove;
	document.onmouseup = onMouseUp;
	 
	this.onDragEnd = function(dObject, dElem) { 


	};
	
	this.onDragCancel = function(dObject) { 


	};
  
}