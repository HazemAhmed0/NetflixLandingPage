const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
	removeBorder();
	removeShow();
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('active');
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('active');
	});
}


tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});