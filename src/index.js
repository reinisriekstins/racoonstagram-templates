import './index.scss'
import $ from 'jquery'

//****************
// Index Page
//****************
$('.row.small-up-1.medium-up-2.large-up-3').append(() => {
  let content = ''
  for (let i = 0; i < 12; i++) {
    content += `
      <div class="column">
        <div class="post-thumbnail">
          <a href="#">
            <figure>
              <img src="https://placehold.it/1200x900?text=Picture" alt="">
            </figure>
            <h5>Lorem ipsum dolor sit amet, consectetur.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore possimus dolorem maxime, nisi...</p>
          </a>
        </div>
      </div>`
  }
  return content
})

//********************
// Top sticky navbar
// ********************
const $nav = $('nav')

const navPositionFromTop = $nav.offset().top + $nav.height() / 4
$(window).bind('scroll', () => {

    if ($(window).scrollTop() > navPositionFromTop) {
        $nav.attr('style', 'position:fixed;top:0px');
    } else {
        $nav.attr('style', 'position:absolute;');
    }
});

//****************************************
// Button that collapses navbar on mobile
//****************************************
const
  $navCollapseButton = $('#nav-collapse>button'),
  $collapsableItems = $('#navbar>*:not(#nav-collapse)')

let collapsed = true
$navCollapseButton.click(() => {
  if (!collapsed) $collapsableItems.addClass('collapsed')
  else $collapsableItems.removeClass('collapsed')

  collapsed = !collapsed
})

//****************
// Posts Page
//****************
$('#blog-posts').html(() => {
  let content = ''
  const date = new Date()
  const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}.`
  for (let i = 0; i < 6; i++) {
    content += `
      <div class="large-10 large-offset-1 medium-10 medium-offset-1 small-10 small-offset-1">
        <div class="blog-post">
          <a class="title" href="#"><h4>Raksts ${i+1}</h4></a>
          <a class="date" href="#">${formattedDate}</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nostrum repudiandae, ullam voluptatum amet quaerat unde dolorum debitis soluta harum.
          </p>
          <p>Corporis dolorem voluptatum voluptatem debitis placeat nihil, laborum est quisquam, neque recusandae aspernatur atque doloremque, explicabo maiores ut at qui!
          </p>
          <p>Doloremque vel voluptatem consequatur incidunt non debitis omnis pariatur totam unde adipisci, soluta, in laborum ipsa saepe perferendis temporibus modi.
          </p>
        </div>
      </div>`
  }
  return content
})