const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(a) {
	removeActive();
    console.log(a.id)
	const currTab = document.getElementById(`${a.id}-content`)
	currTab.classList.add('active')
}

function removeActive() {
	tabContentItems.forEach(item => {
		item.classList.remove('active');
	});
}

