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
	if (document.querySelector(el)) {
		document.querySelector(el).innerText = value;
	}

	clearOptions();
	if (document.querySelector(outerEl)) {
		document.querySelector(outerEl).classList.remove("hidden");
		if (document.querySelector(outerEl).querySelector(innerEl)) {
			if (innerShowFlag) {
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
	console.log(value)
	if (value == '货币') {
		// //
		clearDelTag(document.querySelector("#delTag2").querySelector('.glyphicon-remove'), '#multiSelection')
		// console.log("性别",query3)
		clearDelTag(document.querySelector("#delTag3").querySelector('.glyphicon-remove'), '#singleSelection')
		// console.log("等级区间",query4)
		clearDelTag(document.querySelector("#delTag4").querySelector('.glyphicon-remove'), '#level')

		// // 
	} else {
		// console.log("货币类型",query5)
		clearDelTag(document.querySelector("#delTag6").querySelector('.glyphicon-remove'), '#huobiSelection')
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
	console.log(relativeEl)
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
			if (relativeEl == '#multiSelection') {
				document
					.querySelector("#delTag2")
					.querySelector("#value").innerText = "职业：" + names.join(",");
				document.querySelector("#delTag2").classList.remove("hidden");
			} else if (relativeEl == '#huobiSelection') {
				document
					.querySelector("#delTag6")
					.querySelector("#value").innerText = "货币类型：" + names.join(",");
				document.querySelector("#delTag6").classList.remove("hidden");
			}

		} else {
			if (relativeEl == '#multiSelection') {
				document
					.querySelector("#delTag2")
					.querySelector("#value").innerText = "";
				document.querySelector("#delTag2").classList.add("hidden");
			} else if (relativeEl == '#huobiSelection') {
				document
					.querySelector("#delTag6")
					.querySelector("#value").innerText = "";
				document.querySelector("#delTag6").classList.add("hidden");
			}

		}
	}
}

function toggleSingle(target, className, toggleOptional,isReset) {
	console.log(target,toggleOptional)
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
			if (document.querySelector('#mRoleSelect')) {
				document.querySelector('#mRoleSelect').classList.remove('hidden')
			}

		} else {
			target.parentNode.parentNode
				.querySelector("#optional")
				.classList.remove("hidden");
			if (document.querySelector('#mRoleSelect')) {
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
	if(isReset){
		mSubReset1()
		mSubReset2()
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
	console.log(target, relativeEl)
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
		} else if (relativeEl === "#multiSelection" || relativeEl === "#huobiSelection" || relativeEl ===
			"#singleSelection") {
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
			ts -= 1000
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

function togglePage(target) {
	let list = target.parentNode.querySelectorAll('.page-item')
	for (let i = 0; i < list.length; i++) {
		list[i].classList.remove('active')
	}
	target.classList.add('active')

}

function search() {
	let searchValue = document.querySelector("#value").value
	let search1 = document.querySelector('#select1').innerText
	let search2 = document.querySelector('#select2').innerText
	console.log("输入框的值", searchValue)
	console.log("头部导航游戏区选择：", search1)
	console.log("头部导航角色/货币选择：", search2)
}

function subReset() {
	clearDelTag(document.querySelector("#delTag1").querySelector('.glyphicon-remove'), '#layerSelect1Web')
	clearDelTag(document.querySelector("#delTag2").querySelector('.glyphicon-remove'), '#multiSelection')
	clearDelTag(document.querySelector("#delTag3").querySelector('.glyphicon-remove'), '#singleSelection')
	clearDelTag(document.querySelector("#delTag4").querySelector('.glyphicon-remove'), '#level')
	clearDelTag(document.querySelector("#delTag5").querySelector('.glyphicon-remove'), '#price')
	clearDelTag(document.querySelector("#delTag6").querySelector('.glyphicon-remove'), '#huobiSelection')

}

function subSearch() {
	// 4,6为组合输入框
	let query1 = document.querySelector("#layerSelect1Web").innerText
	let _query2 = document.querySelector("#multiSelection").querySelectorAll('.tag.active')
	let query2 = ''
	for (let i = 0; i < _query2.length; i++) {

		query2 += ',' + (_query2[i].innerText)
	}
	query2 = query2.replace(',', '')
	let _query3 = document.querySelector("#singleSelection").querySelectorAll('.tag.active')
	let query3 = ''
	for (let i = 0; i < _query3.length; i++) {

		query3 += ',' + (_query3[i].innerText)
	}
	query3 = query3.replace(',', '')
	let _query5 = document.querySelector("#huobiSelection").querySelectorAll('.tag.active')
	let query5 = ''
	for (let i = 0; i < _query5.length; i++) {

		query5 += ',' + (_query5[i].innerText)
	}
	query5 = query5.replace(',', '')
	let _query4 = document.querySelector("#query4").querySelectorAll('input')
	let _query4Arr = []
	for (let i = 0; i < _query4.length; i++) {
		_query4Arr.push(_query4[i].value)
	}
	let query4 = _query4Arr.join('-')
	let _query6 = document.querySelector("#query6").querySelectorAll('input')
	let _query6Arr = []
	for (let i = 0; i < _query6.length; i++) {
		_query6Arr.push(_query6[i].value)
	}
	let query6 = _query6Arr.join('-')
	console.log("-----------搜索框参数------------")
	console.log("游戏大区", query1)
	console.log("职业", query2)
	console.log("性别", query3)
	console.log("货币类型", query5)
	console.log("等级区间", query4)
	console.log("价格区间", query6)
	console.log("-----------搜索框参数------------")
}

function mSubReset1() {
	document.querySelector('#layerSelect1').innerText = '不限游戏区'

	let _query2 = document.querySelector('#mQuery1')
	let _query2List = _query2.querySelectorAll('.tag.active')
	for (let i = 0; i < _query2List.length; i++) {
		_query2List[i].classList.remove('active')
	}

	let _query3 = document.querySelector('#mQuery2')
	let _query3List = _query3.querySelectorAll('.tag.active')
	for (let i = 0; i < _query3List.length; i++) {
		_query3List[i].classList.remove('active')
	}

	let _query4 = document.querySelector('#mQuery3')
	let _query4List = _query4.querySelectorAll('input')
	for (let i = 0; i < _query4List.length; i++) {
		_query4List[i].value = ''
	}

	let _query5 = document.querySelector('#mQuery4')
	let _query5List = _query5.querySelectorAll('input')
	for (let i = 0; i < _query5List.length; i++) {
		_query5List[i].value = ''
	}
}

function mSubSearch1() {
	let query1 = document.querySelector('#layerSelect1').innerText
	let _query2 = document.querySelector('#mQuery1')
	let _query2List = _query2.querySelectorAll('.tag.active')
	let query2List = []
	for (let i = 0; i < _query2List.length; i++) {
		query2List.push(_query2List[i].innerText)
	}
	let query2 = query2List.join(",")

	let _query3 = document.querySelector('#mQuery2')
	let _query3List = _query3.querySelectorAll('.tag.active')
	let query3List = []
	for (let i = 0; i < _query3List.length; i++) {
		query3List.push(_query3List[i].innerText)
	}
	let query3 = query3List.join(",")

	let _query4 = document.querySelector('#mQuery3')
	let _query4List = _query4.querySelectorAll('input')
	let query4List = []
	for (let i = 0; i < _query4List.length; i++) {
		query4List.push(_query4List[i].value)
	}
	let query4 = query4List.join("-")

	let _query5 = document.querySelector('#mQuery4')
	let _query5List = _query5.querySelectorAll('input')
	let query5List = []
	for (let i = 0; i < _query5List.length; i++) {
		query5List.push(_query5List[i].value)
	}
	let query5 = query5List.join("-")
	console.log("---------------移动端弹窗1---------------")
	console.log('游戏分区', query1)
	console.log('职业', query2)
	console.log('性别', query3)
	console.log('等级区间', query4)
	console.log('价格区间', query5)
	console.log("---------------移动端弹窗1---------------")
}

function mSubSearch2() {
	// 游戏大区
	let query1 = document.querySelector('#layerSelect2').innerText
	// 货币类型
	let _query2 = document.querySelector('#mRoleSelect')
	let _query2List = _query2.querySelectorAll('.tag.active')
	let query2List = []
	for (let i = 0; i < _query2List.length; i++) {
		query2List.push(_query2List[i].innerText)
	}
	let query2 = query2List.join(",")
	// 职业
	let _query3 = document.querySelector('#mRoleQuery')
	let _query3List = _query3.querySelectorAll('.tag.active')
	let query3List = []
	for (let i = 0; i < _query3List.length; i++) {
		query3List.push(_query3List[i].innerText)
	}
	let query3 = query3List.join(",")
	// 性别
	let _query10 = document.querySelector('#mGenderQuery')
	let _query10List = _query10.querySelectorAll('.tag.active')
	let query10List = []
	for (let i = 0; i < _query10List.length; i++) {
		query10List.push(_query10List[i].innerText)
	}
	let query10 = query10List.join(",")

	let _query4 = document.querySelector('#mLevelQuery')
	let _query4List = _query4.querySelectorAll('input')
	let query4List = []
	for (let i = 0; i < _query4List.length; i++) {
		query4List.push(_query4List[i].value)
	}
	let query4 = query4List.join("-")

	let _query5 = document.querySelector('#mPriceQuery')
	let _query5List = _query5.querySelectorAll('input')
	let query5List = []
	for (let i = 0; i < _query5List.length; i++) {
		query5List.push(_query5List[i].value)
	}
	let query5 = query5List.join("-")
	console.log("---------------移动端弹窗2---------------")
	console.log('游戏分区', query1)
	console.log('货币类型', query2)
	console.log('职业', query3)
	console.log('性别', query10)
	console.log('等级区间', query4)
	console.log('价格区间', query5)
	console.log("---------------移动端弹窗2---------------")
}

function mSubReset2() {
	// 游戏大区
	document.querySelector('#layerSelect2').innerText = '不限游戏区'
	// 货币类型
	let _query2 = document.querySelector('#mRoleSelect')
	let _query2List = _query2.querySelectorAll('.tag.active')
	for (let i = 0; i < _query2List.length; i++) {
		_query2List[i].classList.remove('active')
	}
	// 职业
	let _query3 = document.querySelector('#mRoleQuery')
	let _query3List = _query3.querySelectorAll('.tag.active')
	for (let i = 0; i < _query3List.length; i++) {
		_query3List[i].classList.remove('active')
	}
	// 性别
	let _query10 = document.querySelector('#mGenderQuery')
	let _query10List = _query10.querySelectorAll('.tag.active')
	for (let i = 0; i < _query10List.length; i++) {
		_query10List[i].classList.remove('active')
	}

	let _query4 = document.querySelector('#mLevelQuery')
	let _query4List = _query4.querySelectorAll('input')
	for (let i = 0; i < _query4List.length; i++) {
		_query4List[i].value = ''
	}

	let _query5 = document.querySelector('#mPriceQuery')
	let _query5List = _query5.querySelectorAll('input')
	for (let i = 0; i < _query5List.length; i++) {
		_query5List[i].value = ''
	}
}
