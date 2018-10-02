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
		<a class="modal-trigger" href="#newsModal">
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
        <a href="https://samsclass.info/#events" target="blank">
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
  
  <!-- News Modal -->
  <div id="newsModal" class="modal news-modal-size">
  <div class="modal-content">
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s6">
            <a id="firstTab" class="active" href="#newsTab1">Internal News</a>
          </li>
          <li class="tab col s6">
            <a href="#newsTab2">External News</a>
          </li>
        </ul>
      </div>
      <div id="newsTab1" class="col s12">
		<iframe src="https://drive.google.com/file/d/1KfMr7aoxUxucXnvd2v5U2lD3tKSDFJTZ/preview" width="100%" height="800px"></iframe>
	 </div>
      <div id="newsTab2" class="col s12">
        <iframe src="https://samsclass.info/newsr.shtml" height="100%" style="width:100%; height:800px;"><!--TBD: Will fix -->
      </div>
    </div>
  </div>
  </div>
`;

newsEvents.appendChild(newsEventsDiv);