<template>
  <header class="header">
    <div class="header_container">
      <a href="#">
        <h1 class="logo">LOGO</h1>
      </a>
      <nav class="nav">
        <ul class="nav_list">
          <li class="nav_item">
            <a href="#">
              work
            </a>
          </li>
          <li class="nav_item">
            <a href="#">
              services
            </a>
          </li>
          <li class="nav_item">
            <a href="#">
              pricing
            </a>
          </li>
          <li class="nav_item">
            <a href="#">
              network
            </a>
          </li>
          <li class="nav_item">
            <a href="#">
              start a project
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="container">
    <div class="box1" @mousemove="circleMove" @mouseleave="circleLeave">
      <div class="circles">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
        <div class="circle circle5"></div>
      </div>
      <div class="box_item"></div>
      <div class="box_item"></div>
      <div class="box_item"></div>
      <div class="box_item"></div>
    </div>
    <div class="blank">
      <div class="blank_head">
        Your&ensp;<span id="blank_text1">aaaaa</span>&ensp;made&ensp;<span id="blank_text2">bbbbb</span>.
      </div>
      <div class="blank_body"></div>
    </div>
    <div class="box2">
      <div class="img_inner">
        <img src="https://assets.website-files.com/6006a29edf050225e91c8a1e/6233a3052c9a091326ff60ca_SLSF.svg" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin.js'
gsap.registerPlugin(TextPlugin)
export default {
  name: 'app',
  mounted() {
    // logo color
    gsap.to('h1', 1, {
      color: 'random([red, blue, green, yellow])',
      repeat: -1,
      yoyo: true,
      repeatRefresh: true,
    })
    // arrow
    gsap.to('.blank_body', .8, {
      y: 50,
      opacity: 0,
      repeat: -1,
    })
    // random text
    gsap.fromTo('#blank_text1', 1, {
      text: 'random([?!@#$%, a@a_$%^&, ^&=-a])',
    }, {
      repeatRefresh: true,
      repeat: -1,
      text: 'aaaaa'
    })
    gsap.fromTo('#blank_text2', 1, {
      text: 'random([st^&*, @#$r*&, zxcKDJ])',
    }, {
      repeatRefresh: true,
      repeat: -1,
      text: 'bbbbb'
    })
    document.addEventListener('scroll', function() {
      if(window.pageYOffset > 969) {
        console.log('1')
      }
    })
  },
  methods: {
    circleMove(e) {
      gsap.to('.circle2', 1, {
        x: e.pageX / 2,
        y: e.pageY / 2
      })
      gsap.to('.circle3', 1, {
        x: -e.pageX / 2,
        y: e.pageY / 2
      })
      gsap.to('.circle4', 1, {
        x: e.pageX / 2,
        y: -e.pageY / 2
      })
      gsap.to('.circle5', 1, {
        x: -e.pageX / 2,
        y: -e.pageY / 2
      })
    },
    circleLeave() {
      gsap.to('.circle2', 1, {
        x: 0,
        y: 0
      })
      gsap.to('.circle3', 1, {
        x: 0,
        y: 0
      })
      gsap.to('.circle4', 1, {
        x: 0,
        y: 0
      })
      gsap.to('.circle5', 1, {
        x: 0,
        y: 0
      })
    },
  },
}
</script>

<style lang="sass" scoped>
*
  box-sizing: border-box
html
  scroll-behavior: smooth
  body
    font-family: Verdana
    line-height: 1.5
    img
      display: block
      vertical-align: bottom
    a
      color: #000
      display: block
      text-decoration: none
    header
      height: 6vh
      .header_container
        display: flex
        justify-content: space-between
        align-items: center
        max-width: 100%
        .logo
          padding: 10px
          font-size: 2rem
        nav
          .nav_list
            display: flex
            .nav_item
              font-size: 1.2rem
              text-align: center
              margin: auto 
              padding: 20px 10px
              &:last-child
                width: 150px
                border-left: 1px solid #000
    .container
      max-width: 100%
      .box1
        position: relative
        display: flex
        flex-wrap: wrap
        height: 84vh
        overflow: hidden
        .box_item
          width: 50%
          border: 1px solid #000
        .circles
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%, -50%)
          height: 100%
          .circle
            position: absolute
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            width: 42vh
            height: 42vh
            border: 1px solid #000
            border-radius: 50%
      .blank
        display: flex
        justify-content: space-between
        align-items: center
        overflow: hidden
        padding: 10px
        height: 10vh
        .blank_head
          font-size: 3rem
        .blank_body
          position: relative
          transform: translate(-20px, -20px)
          width: 5px
          height: 40px
          background-color: #000
          &::before, &::after
              position: absolute
              top: 24px
              display: block
              content: ''
              width: 5px
              height: 20px
              background-color: #000
          &::before
              left: 6px
              transform: rotate(45deg)
          &::after
              left: -6px
              transform: rotate(-45deg)
      .box2
        max-width: 100%
        height: 100vh
        overflow: hidden
        display: flex
        align-items: center
</style>