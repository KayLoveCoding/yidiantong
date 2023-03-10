window.onscroll = () => {
	let scrollTop = document.documentElement.scrollTop;
	let box = document.querySelector(".setop-box");
	if (box) {
		if (window.innerWidth < 992 && scrollTop > 350) {
			box.style.display = "block";
		} else {
			box.style.display = "none";
		}
		box.querySelector(".setop").addEventListener("click", () => {
			console.log("制定");
			// box.querySelector(".setop").scrollTop = 0;
			window.scrollBy(0, -30);
		});
	}
};
/**
 * 下拉框
 */
// 收起下拉框
function clearOptions() {
	let options = document.querySelectorAll(".option-list");
	for (let i = 0; i < options.length; i++) {
		options[i].classList.add("hidden");
	}
}
// 点击下拉框
function toggleSelect(target, otherEl) {
	const e = window.event;
	e.preventDefault();
	e.stopPropagation();
	clearOptions();
	if (!otherEl) {
		let options = target.parentNode.querySelector(".option-list");
		if (options.classList.contains("hidden")) {
			options.classList.remove("hidden");
		} else {
			options.classList.add("hidden");
		}
	} else {
		let options = document
			.querySelector(otherEl)
			.querySelector(".option-list");
		if (options.classList.contains("hidden")) {
			options.classList.remove("hidden");
		} else {
			options.classList.add("hidden");
		}
	}
}

// 获取下拉框的值
function getOption(value, el, hiddenEl, alwaysShow) {
	document.querySelector(el).innerText = value;
	clearOptions();
	if (!hiddenEl) {
		showGameZone(value != "不限游戏区" || alwaysShow, "#optional");
	} else {
		showGameZone(value != "不限游戏区" || alwaysShow, hiddenEl);
	}
}
// 获取下拉框的值-pc
function getWebOption(value, el, relativeEl) {
	document.querySelector(el).innerText = value;
	clearOptions();
	if (value == "不限游戏区" && relativeEl) {
		document.querySelector(relativeEl).classList.add("hidden");
		document.querySelector(relativeEl).querySelector("#value").innerText =
			"";
	} else if (document.querySelector(relativeEl)) {
		document.querySelector(relativeEl).classList.remove("hidden");
		document.querySelector(relativeEl).querySelector("#value").innerText =
			"游戏大区：" + value;
	}
}

function toggleJueseSelect(value, el, outerEl, innerEl, innerShowFlag, huobiEl) {
	document.querySelector(el).innerText = value;
	clearOptions();
	if (document.querySelector(outerEl)) {
		document.querySelector(outerEl).classList.remove("hidden");
		if (document.querySelector(outerEl).querySelector(innerEl)) {
			if (innerShowFlag) {
				console.log(1, document
					.querySelector(huobiEl))
				document
					.querySelector(outerEl)
					.querySelector(innerEl)
					.classList.remove("hidden");
				if (huobiEl) {
					document
						.querySelector(huobiEl)
						.classList.add("hidden");
				}
			} else {
				console.log(2, document
					.querySelector(huobiEl))
				document
					.querySelector(outerEl)
					.querySelector(innerEl)
					.classList.add("hidden");
				if (huobiEl) {
					document
						.querySelector(huobiEl)
						.classList.remove("hidden");
				}
			}
		}
	}
}
// 切换ordertab
function toggleOrderTab(target) {
	let list = target.parentNode.querySelectorAll(".order");
	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove("active");
	}
	if (!target.classList.contains("active")) {
		target.classList.add("active");
	}
}
// 是否显示游戏区
function showGameZone(flag, el) {
	if (el && document.querySelector(el)) {
		if (flag) {
			document.querySelector(el).classList.remove("hidden");
		} else {
			document.querySelector(el).classList.add("hidden");
		}
	}
}
// 切换多选标签
function toggleMulti(target, relativeEl) {
	if (target.classList.contains("active")) {
		target.classList.remove("active");
	} else {
		target.classList.add("active");
	}
	if (relativeEl && document.querySelector(relativeEl)) {
		let list = document.querySelector(relativeEl).querySelectorAll(".tag");
		let names = [];
		for (let i = 0; i < list.length; i++) {
			if (list[i].classList.contains("active")) {
				names.push(list[i].innerText);
			}
		}
		if (names.length) {
			document
				.querySelector("#delTag2")
				.querySelector("#value").innerText = "职业：" + names.join(",");
			document.querySelector("#delTag2").classList.remove("hidden");
		} else {
			document
				.querySelector("#delTag2")
				.querySelector("#value").innerText = "";
			document.querySelector("#delTag2").classList.add("hidden");
		}
	}
}

function toggleSingle(target, className, toggleOptional) {
	let list = target.parentNode.querySelectorAll("." + className);
	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove("active");
	}
	target.classList.add("active");
	if (toggleOptional) {
		if (target.innerText == "货币") {
			target.parentNode.parentNode
				.querySelector("#optional")
				.classList.add("hidden");
				if(document.querySelector('#mRoleSelect')){
					document.querySelector('#mRoleSelect').classList.remove('hidden')
				}
		} else {
			target.parentNode.parentNode
				.querySelector("#optional")
				.classList.remove("hidden");
				if(document.querySelector('#mRoleSelect')){
					document.querySelector('#mRoleSelect').classList.add('hidden')
				}
		}
	}
	if (document
		.querySelector("#delTag3")) {
		document
			.querySelector("#delTag3")
			.querySelector("#value").innerText = "性别：" + target.innerText;
		document.querySelector("#delTag3").classList.remove("hidden");
	}

}

function changeNumber(target, relativeEl, name) {
	let list = target.parentNode.parentNode.querySelectorAll(".price-item")
	let value1 = list[0].querySelector("input").value
	let value2 = list[1].querySelector("input").value
	if (document
		.querySelector(relativeEl)) {
		document
			.querySelector(relativeEl)
			.querySelector("#value").innerText = name + value1 + '-' + value2;
		document.querySelector(relativeEl).classList.remove("hidden");
	}
}

function clearDelTag(target, relativeEl) {
	let parent = target && target.parentNode;
	if (parent) {
		parent.querySelector("#value").innerText = "";
		parent.classList.add("hidden");
	}
	if (document.querySelector(relativeEl)) {
		let dom = document.querySelector(relativeEl);
		if (relativeEl === "#layerSelect1Web") {
			dom.innerText = "不限游戏区";
		} else if (relativeEl === "#level" || relativeEl === "#price") {

			let list = document.querySelector(relativeEl).querySelectorAll(".price-item")
			for (let i = 0; i < list.length; i++) {
				console.log(list[i].querySelector("input"))
				list[i].querySelector("input").value = ''
			}
		} else if (relativeEl === "#multiSelection") {
			let list = dom.querySelectorAll(".tag");
			for (let i = 0; i < list.length; i++) {
				list[i].classList.remove("active");
			}
		}
	}
}

function togglePaixu(target) {
	if (target.querySelector(".paixu")) {
		target.querySelector(".paixu-item").classList.remove("paixu");
		target.querySelector(".paixu-item").classList.add("paixu-reverse");
	} else {
		target.querySelector(".paixu-item").classList.remove("paixu-reverse");
		target.querySelector(".paixu-item").classList.add("paixu");
	}
}

function toPage(path) {
	location.href = "./" + path + ".html";
	toggleMMenu(false);
}

function toggleMMenu(flag) {
	console.log(document.querySelector("#mMenu"))
	if (flag == true) {
		document.querySelector("#mMenu").classList.remove("hidden");
	} else {
		document.querySelector("#mMenu").classList.add("hidden");
	}
}

function setCountdown(target, ts = 24 * 60 * 60 * 1000 * 2.5) {
	let timer = null
	if (ts > 1000) {
		timer = setInterval(() => {
			ts-=1000
			//将时间戳格式转换成年月日时分秒
			const day = parseInt(ts / (24 * 60 * 60 * 1000))
			var D = (day < 10 ? '0' + (day) : day + '');
			const remain1 = ts - day * (24 * 60 * 60 * 1000)
			const hour = parseInt(remain1 / (60 * 60 * 1000))
			var h = (hour < 10 ? '0' + (hour) : hour + '');
			const remain2 = remain1 - hour * (60 * 60 * 1000)
			const min = parseInt(remain2 / (60 * 1000))
			const remain3 = remain2 - min * (60 * 1000)
			const sec = parseInt(remain3 / (1000))
			var m = (min < 10 ? '0' + (min) : min + '');
			var s = (sec < 10 ? '0' + (sec) : sec + '');
			let cList = target.querySelectorAll('.blue')
			if (cList && cList.length) {
				cList[0].innerText = D.substring(0, 1)
				cList[1].innerText = D.substring(1)
				cList[2].innerText = h.substring(0, 1)
				cList[3].innerText = h.substring(1)
				cList[4].innerText = m.substring(0, 1)
				cList[5].innerText = m.substring(1)
				cList[6].innerText = s.substring(0, 1)
				cList[7].innerText = s.substring(1)
			}
		}, 1000)
	} else {
		clearInterval(timer)
		let cList = target.querySelectorAll('.blue')
		if (cList && cList.length) {
			cList[0].innerText = '0'
			cList[1].innerText = '0'
			cList[2].innerText = '0'
			cList[3].innerText = '0'
			cList[4].innerText = '0'
			cList[5].innerText = '0'
			cList[6].innerText = '0'
			cList[7].innerText = '0'
		}
	}


}
function togglePage(target){
	let list=target.parentNode.querySelectorAll('.page-item')
	for(let i=0;i<list.length;i++){
		list[i].classList.remove('active')
	}
	target.classList.add('active')
	
}