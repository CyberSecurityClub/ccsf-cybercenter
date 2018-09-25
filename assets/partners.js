// ===============================================================
// SECTION for PARTNERS
// ===============================================================

const partners = document.querySelector('#partners');
const partnersDiv = document.createElement('div');

partnersDiv.innerHTML = `
  <h3 class="text-light-grey title-resources center-align title-header">Partners</h3>
  <div class="container hide-on-small-only">
    <!-- first row for partners -->
    <div class="row partner-row">
      <div class="col s2">
        <a href="https://www.comptia.org/" target="blank">
          <img src="img/comptia-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="https://bavc.org/youth-programs/next-gen" target="blank">
          <img src="img/bavc-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="http://www.cisco.com/c/en/us/training-events/resources/networking-academy.html" target="blank">
          <img src="img/cisco-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="http://www.ieee.org/index.html" target="blank">
          <img src="img/ieee-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="http://www.iwitts.org/" target="blank">
          <img src="img/iwitts-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
    </div>

    <!-- second row for partners -->
    <div class="row partner-row">
      <div class="col s2">
        <a href="http://www.juniper.net/us/en/" target="blank">
          <img src="img/juniper-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="https://www.microsoft.com/en-us/" target="blank">
          <img src="img/microsoft-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="http://oewd.org/" target="blank">
          <img src="img/sfgov-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="https://nsf.gov/" target="blank">
          <img src="img/nsf-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
      <div class="col s2">
        <a href="https://niccs.us-cert.gov/training/search/city-college-san-francisco" target="blank">
          <img src="img/dhs-logo.png" class="responsive-img partner-img" alt="">
        </a>
      </div>
    </div>
  </div>

  <!-- PARTNERS in MOBILE SCREEN -->
  <div class="container hide-on-med-and-up show-on-small">
    <div class="row partner-row">
      <div class="col s6">
        <a href="https://www.comptia.org/" target="blank">
          <img src="img/comptia-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
      <div class="col s6">
        <a href="https://bavc.org/youth-programs/next-gen" target="blank">
          <img src="img/bavc-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
    </div>
    <div class="row partner-row">
      <div class="col s6">
        <a href="http://www.cisco.com/c/en/us/training-events/resources/networking-academy.html" target="blank">
          <img src="img/cisco-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
      <div class="col s6">
        <a href="http://www.ieee.org/index.html" target="blank">
          <img src="img/ieee-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
    </div>
    <div class="row partner-row">
      <div class="col s6">
        <a href="http://www.iwitts.org/" target="blank">
          <img src="img/iwitts-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
      <div class="col s6">
        <a href="http://www.juniper.net/us/en/" target="blank">
          <img src="img/juniper-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
    </div>
    <div class="row partner-row">
      <div class="col s6">
        <a href="https://www.microsoft.com/en-us/" target="blank">
          <img src="img/microsoft-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
      <div class="col s6">
        <a href="http://oewd.org/" target="blank">
          <img src="img/sfgov-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
    </div>
    <div class="row partner-row">
      <div class="col s6">
        <a href="https://nsf.gov/" target="blank">
          <img src="img/nsf-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
      <div class="col s6">
        <a href="https://niccs.us-cert.gov/training/search/city-college-san-francisco" target="blank">
          <img src="img/dhs-logo.png" class="responsive-img partner-img-mobile" alt="">
        </a>
      </div>
    </div>
  </div>
`;

partners.appendChild(partnersDiv);