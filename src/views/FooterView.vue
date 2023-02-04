<template>
  <footer id="FooterView">
    <div class="contact-container">
      <p class="contact-container__header header">Address</p>
      <ul class="contact">
        <li class="contact-info">
          <img src="../assets/svgs/location-icon.svg" alt="Location icon" />
          <p>Tam Phu ward, Thu Duc district, Ho Chi Minh city</p>
        </li>
        <li class="contact-info">
          <img src="../assets/svgs/email-icon.svg" alt="Email icon" />
          <a href="mailto:hgqbinh2002@gmail.com">hgqbinh2002@gmail.com</a>
        </li>
        <li class="contact-info">
          <img src="../assets/svgs/phone-icon.svg" alt="Phone icon" />
          <a href="tel:+84961792948" target="_blank">096-179-2948</a>
        </li>
      </ul>
    </div>
    
    <div class="follow-container">
      <p class="follow-container__header header">Follow me </p>
      <ul class="follow">
        <li>
          <img src="../assets/svgs/github-logo.svg" alt="Github logo" />
          <a href="https://github.com/Binh2" target="_blank">Binh2</a>
        </li>
        <li>
          <img src="../assets/svgs/linkedin-logo.svg" alt="Linkedin logo" />
          <a href="https://www.linkedin.com/in/hgqbinh2002/" target="_blank">hgqbinh2002</a>
        </li>
        <li>
          <img src="../assets/svgs/frontend-mentor-logo.svg" alt="Frontend mentor logo" />
          <a href="https://www.frontendmentor.io/profile/Binh2" target="_blank">@Binh2</a>
        </li>
      </ul>
    </div>

    <div class="subscribe-container">
      <p class="subscribe-container__header header">Subscribe (Currently, subscribe doesn't work yet)</p>
      <p>to not miss any new updates from me</p>
      <form class="subscribe">
        <input type="text" id="footer-subscribe__email" name="email" placeholder="johndoe@gmail.com" disabled required />
        <button type="button" disabled>Subscribe</button>
      </form>
    </div>
    <p class="copyright">© 2023 Hoang Gia Quoc Binh. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;

  background: var(--color-desaturated);
  color: var(--color-whitish);
  padding: 1em;
}
.copyright {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;

  margin: 1em auto 0;
}
img[src*=".svg"] {
  height: 1.3em;
  width: 1.3em;
  background: var(--color-whitish);
  border-radius: 50%;
}

.header {
  font-size: 2em;
  margin-bottom: 0.2em;
}
a {
  color: var(--color-whitish);
}
ul {
  display: flex;
  flex-direction: column;
  row-gap: 0.4em;
}
li {
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 0.2em;
}
.contact-info {
  display: flex;
  width: 100%;
}
.contact-info img {
  margin: auto 0;
}
.contact-info > p, .contact-info > a {
  line-height: 100%;
}
</style>
