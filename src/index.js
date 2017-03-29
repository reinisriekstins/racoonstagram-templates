import './index.scss'
import $ from 'jquery'

$('.row.small-up-1.medium-up-2.large-up-3').html(function() {
  let content = ''
  for (let i = 0; i < 12; i++) {
    content += `
      <div class="column">
        <div class="post-thumbnail">
          <a href="#">
            <img src="https://placehold.it/400x300?text=Picture" alt="">
            <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore possimus dolorem maxime, nisi...</p>
          </a>
        </div>
      </div>`
  }
  return content
})