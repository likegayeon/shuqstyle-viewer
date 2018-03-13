// 크롬 익스텐션 우클릭 뷰어
chrome.contextMenus.create({
    title: "DeepLook Search",
    contexts:["image"],
    onclick: function(info) {
        var image_url = encodeURIComponent(info.srcUrl);
        var apiKey = window.localStorage.getItem("apikey");

        alert(apiKey);

        chrome.windows.create({
          url: "https://viewer.shuq.com/view.html" + "?type=url&url=" + image_url + "&apikey=" + apiKey,
          type: "popup"
        },  ()=> {

        });
    }
});

// 로컬 스토리지에 key 저장
document.getElementById("save").addEventListener("click", function()
  {
    var key = document.getElementById("keyInfo").value;
    window.localStorage.setItem("apikey", key);
  }, false);

// 넣어 놓은 key 값 확인
var input_key = window.localStorage.getItem("apikey");
document.getElementById("keyInfo").value = input_key;
