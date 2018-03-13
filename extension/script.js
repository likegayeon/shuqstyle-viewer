// 크롬 익스텐션 우클릭 뷰어
chrome.contextMenus.create({
    title: "DeepLook Search",
    contexts:["image"],
<<<<<<< HEAD
    onclick: (info) => {
        let image_url = encodeURIComponent(info.srcUrl);
        let apiKey = window.localStorage.getItem("apikey");
=======
    onclick: function(info) {
        var image_url = encodeURIComponent(info.srcUrl);
        var apiKey = window.localStorage.getItem("apikey");
>>>>>>> f0974cb2b315d4e1993d8409cf0897345f8d4e48

        alert(apiKey);

        chrome.windows.create({
          url: "https://viewer.shuq.com/view.html" + "?type=url&url=" + image_url + "&apikey=" + apiKey,
          type: "popup"
        },  ()=> {

        });
<<<<<<< HEAD
      }
});

// 로컬 스토리지에 key 저장
$(document).ready(function() {
    $("input[type=text]").keypress( function(e) {
      if (e.keyCode == 13) {
          window.localStorage.setItem("apikey", document.getElementById("keyInfo").value);
      }
    });
  });
=======
    }
});

// 로컬 스토리지에 key 저장
document.getElementById("save").addEventListener("click", function()
  {
    var key = document.getElementById("keyInfo").value;
    window.localStorage.setItem("apikey", key);
  }, false);
>>>>>>> f0974cb2b315d4e1993d8409cf0897345f8d4e48

// 넣어 놓은 key 값 확인
var input_key = window.localStorage.getItem("apikey");
document.getElementById("keyInfo").value = input_key;
