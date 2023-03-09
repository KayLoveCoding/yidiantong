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

function toggleJueseSelect(value, el, outerEl, innerEl, innerShowFlag) {
    document.querySelector(el).innerText = value;
    clearOptions();
    if (document.querySelector(outerEl)) {
        document.querySelector(outerEl).classList.remove("hidden");
        if (document.querySelector(outerEl).querySelector(innerEl)) {
            if (innerShowFlag) {
                document
                    .querySelector(outerEl)
                    .querySelector(innerEl)
                    .classList.remove("hidden");
            } else {
                document
                    .querySelector(outerEl)
                    .querySelector(innerEl)
                    .classList.add("hidden");
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
        } else {
            target.parentNode.parentNode
                .querySelector("#optional")
                .classList.remove("hidden");
        }
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
    if (flag == true) {
        document.querySelector("#mMenu").classList.remove("hidden");
    } else {
        document.querySelector("#mMenu").classList.add("hidden");
    }
}
