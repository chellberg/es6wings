$( document ).ready(() => {
  $('form').on('submit', e => {
    e.preventDefault()
    const totalPrice = $('input#price').val()
    const wingCount = $('input#count').val()
    console.log(`Price per wing: ${pricePerWing(totalPrice, wingCount)}`)
  })
})

const pricePerWing = (total, count) => {
  return (+total / +count)
}
