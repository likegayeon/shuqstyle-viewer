// 크롬 익스텐션 우클릭 뷰어
chrome.contextMenus.create({
    title: "DeepLook Search",
    contexts:["image"],
    onclick: (info) => {
        let image_url = encodeURIComponent(info.srcUrl);
        let apiKey = window.localStorage.getItem("apikey");

        chrome.windows.create({
          url: "https://viewer.shuq.com/view.html" + "?type=url&url=" + image_url + "&apikey=" + apiKey,
          type: "popup"
        },  ()=> {
        });
      }
});

// 로컬 스토리지에 key 저장
$(document).ready(function() {
    $("#keyInfo").keypress( function(e) {
      if (e.keyCode == 13) {
          window.localStorage.setItem("apikey", document.querySelector("#keyInfo").value);
      }
    });
  });

// 넣어 놓은 key 값 확인
let input_key = window.localStorage.getItem("apikey");
document.querySelector("#keyInfo").value = input_key;
