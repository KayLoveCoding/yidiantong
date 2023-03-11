(() => {
	let pathList = ['index', 'role', 'lingfu', 'jingangshi', 'card', 'yuanbao', 'jinbi']
	let list = document.querySelector(".menu-list").querySelectorAll(".menu-item")
	let pathMap = {}
	let pathIndex = -1

	function getPathName() {
		let index = location.pathname.lastIndexOf('/')
		let pathname = location.pathname.slice(index + 1)
		return pathname.split('.html')[0]
	}
	for (let index = 0; index < pathList.length; index++) {
		pathMap[pathList[index]] = index
	}
	pathIndex = pathMap[getPathName()]
	if (pathIndex >= 0) {
		list.forEach(item => {
			item.classList.remove('active')
			item.addEventListener("click", toPage)
		})
		list[pathIndex].classList.add('active')
	}

	function toPage(e) {
		let path = ''
		let flag = ''
		for (let i = 0; i < e.target.classList.length; i++) {
			if (e.target.classList[i] == 'menu-item') {
				flag = '01'
				break
			}
			if (e.target.classList[i] == 'line') {
				flag = '02'
				break
			}
		}
		if (flag == '01') {
			path = e.target.dataset.path + '.html'
		} else if (flag == '02') {
			path = e.target.parentElement.parentElement.dataset.path + '.html'
		} else {
			path = e.target.parentElement.dataset.path + '.html'
		}
		location.href = './' + path

	}
})()

function toHome() {
	location.href = './index.html'
}

function toggleLayer(el, flag) {
	if (flag) {
		document.querySelector(el).classList.remove("hidden")
	} else {
		document.querySelector(el).classList.add("hidden")
	}
	mSubReset1()
	mSubReset2()
}
