function createPager(pager, pagerNumber, middlePager, container) {
	let webCondition=window.innerWidth>=1200
    // 清空
    container.innerText = '';
    var divpager = document.createElement('div');
    pager.className = 'pager';
    /*
     * className:样式类
     * text:中间的显示文本
     * newPager: 点击后跳转到哪一页
     */
    function createAnchor(className, text, newPager) {
        var a = document.createElement('a');
        a.className = className;
        a.innerText = text;
        divpager.appendChild(a);
        a.onclick = function() {
            // 做相应的三种情况的判断
            if (newPager < 1 || newPager > pagerNumber || newPager === pager) {
                return;
            }
            createPager(newPager, pagerNumber, middlePager, container);
        }
    }
    // 首页和上一页
    if (pager === 1) {
		if(webCondition){
			 createAnchor('disabled', '首页', 1)
		}
       
        createAnchor('disabled', '上一页', pager - 1)
    } else {
		if(webCondition){
			createAnchor('', '首页', 1)
		}
        createAnchor('', '上一页', pager - 1)
    }
    // 中间的数字
    var min = Math.floor(pager - middlePager / (webCondition?2:4));
    if (min < 1) {
        min = 1;
    }
	console.log(min,middlePager)
    var max = webCondition?(min + middlePager - 1):(min + middlePager - 2);
    if (max > pagerNumber) {
        max = pagerNumber;
    }
    for (var i = min; i <= max; i++) {
        if (i === pager) {
            createAnchor('active', i, i);
        } else {
            createAnchor('', i, i);
        }
    }
    // 下一页和尾页
    if (pager === pagerNumber) {
        createAnchor('disabled', '下一页', pager + 1)
		if(webCondition){
			 createAnchor('disabled', '尾页', pagerNumber);
		}
       
    } else {
        createAnchor('', '下一页', pager + 1)
		if(webCondition){
			 createAnchor('', '尾页', pagerNumber);
		}
       
    }
    // 当前页
    if(webCondition){
		var span = document.createElement('span');
		span.innerText = pager + "/" + pagerNumber;
		divpager.appendChild(span);
	}
    // 添加进容器中
    container.appendChild(divpager);
}
