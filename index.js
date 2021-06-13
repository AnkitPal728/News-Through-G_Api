let source = 'the-times-of-india';
let apikey = 'cce606480e3b1a9aa1e1d95ad444f247';

let new_accordion = document.getElementById('new_accordion');
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${apikey}&lang=hi`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let content = JSON.parse(this.responseText);
        let news = content.articles;
        let cur_news = "";
        news.forEach(function (element, index) {
            cur_news += `
                        <div class="accordian-item">
                                <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="ture" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>

                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#new_accordion">
                                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>
            `;
        });
        new_accordion.innerHTML = cur_news;
    }
    else {
        new_accordion.innerHTML = `<h4>! 404 Error occured !</h4>`;
    }
}
xhr.send();
