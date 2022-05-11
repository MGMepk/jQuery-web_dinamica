// https://image.tmdb.org/t/p/w1280/
let api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

$(document).ready(() => {
  const $showData = $("#show-data");

  setTimeout(function () {
    $.getJSON(api, (data) => {
      const markup = data.results
        .map(
          (item) =>
            `<div class="row">
      <div class="movie card">
        <div
          class="wrapper"
          style="
            background: url(https://image.tmdb.org/t/p/w1280/${
              item.poster_path
            })
              center/cover no-repeat;
          "
        >
          <div class="header">
            <div class="date">
              <span class="day">${item.release_date.split("-")[2]}</span>
              <span class="month">${
                month[item.release_date.split("-")[1] - 1]
              }</span>
              <span class="year">${item.release_date.split("-")[0]}</span>
            </div>
            <ul class="menu-content">
              <li>
                <a href="#" class="fa fa-bookmark-o"></a>
              </li>
              <li>
                <a href="#" class="fa fa-heart-o"><span></span></a>
              </li>
              <li>
                <a href="#" class="fa fa-comment-o"><span></span></a>
              </li>
            </ul>
          </div>
          <div class="data">
            <div class="content">
              <h1 class="title">
                <a href="#"> ${item.title}</a>
              </h1>
              <p class="text">
              ${item.overview}
              </p>
              <a href="#" class="button">Read more</a>
            </div>
          </div>
        </div>
        </div>
    </div>`
        )
        .join("");

      const list = $("<div class='grid' />").html(markup);
      $showData.html(list);
    });
  }, 2000);
});
