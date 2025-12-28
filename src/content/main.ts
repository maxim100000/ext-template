import css from '@/content/style.css?inline'
import { mount } from 'svelte'
import App from './views/App.svelte'

function mountApp() {
  if (document.querySelector('#crxjs-app')) return
  const container = document.createElement('div')
  container.id = 'crxjs-app'
  container.style.position = 'fixed'
 container.style.zIndex='3434676567'
  container.style.bottom='0'
  container.style.right='0'
  document.body.appendChild(container)
  let shadow = container.attachShadow({mode: "open"})
  let style = document.createElement('style')
  style.textContent = css
  shadow.appendChild(style)
  mount(App, {
    target: shadow,
  })
}

mountApp()
