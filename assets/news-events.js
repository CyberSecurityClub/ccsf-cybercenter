// ===============================================================
// SECTION for NEWS & EVENTS
// ===============================================================

const newsEvents = document.querySelector('#news-events');
const newsEventsDiv = document.createElement('div');

newsEventsDiv.innerHTML = `
  <h3 class="text-light-grey title-resources center-align">News & Events</h3>
  <div class="container">
    <div class="row news-events-row-styling">
      <div class="col s12 m6">
        <a href="https://samsclass.info/newsr.shtml" target="blank">
          <div class="card-panel hoverable">
            <i class="material-icons large red-text text-darken-4">
              insert_comment
            </i>
            <h5 class="text-light-grey">News</h5>
            <p class="text-light-grey">On industry insights in cyber security and defense</p>
          </div>
        </a>
      </div>
      <div class="col s12 m6">
        <a href="https://samsclass.info/"target="blank">
          <div class="card-panel hoverable">
            <i class="material-icons large red-text text-darken-4">
              event
            </i>
            <h5 class="text-light-grey">Events</h5>
            <p class="text-light-grey">Check out our ongoing cyber security events and workshops</p>
          </div>
        </a>
      </div>
    </div>
  </div>
`;

newsEvents.appendChild(newsEventsDiv);