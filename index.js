$( document ).ready(() => {
  $('a').on('click', e => {
    e.preventDefault()
    alert('foo')
  })
})
