const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggeditem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];
	
	item.addEventListener('dragstart', function(e) {
		draggeditem = item;
		settimeout(function() {
			item.style.display = 'none';
		}, 0)
	});
	
	item.addEventListener('dragend', function() {
			setTimeout(function() {
			draggeditem.style.display = 'block';
			draggeditem = null;
			}, 0);
	})
	
for (let j = 0; j< lists.length; j ++) {
	const list = lists [j];
	
	list.addEventListener('dragover', function (e) {
		e.preventDefault();
	});
	list.addEventListener('dragenter', function (e) {
		e.preventdefault();
	});
	list.addEventListener('drop', function (e) {
		console.log('drop');
		this.append(draggeditem);
	});
} 
}// JavaScript Document