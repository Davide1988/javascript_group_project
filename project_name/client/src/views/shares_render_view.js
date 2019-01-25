

const SharesRenderView = function(sharesSelected , container){
  this.sharesSelected = sharesSelected
  this.container = container
}

SharesRenderView.prototype.render = function () {

this.container.innerHTML = ""

this.sharesSelected.forEach((share) =>{

  const ul = document.createElement('ul')
  this.container.appendChild(ul)

  const name = document.createElement('li')
  name.textContent = `Name : ${share.name}`
  ul.appendChild(name)

  const category = document.createElement('li')
  category.textContent = `Category : ${share.category}`
  ul.appendChild(category)

  const number_of_shares = document.createElement('li')
  number_of_shares.textContent = `Number of shares : ${share.number_of_shares}`
  ul.appendChild(number_of_shares)

  const date_acquisition = document.createElement('li')
  date_acquisition.textContent = `Date of acquisition ${share.date_acquisition}`
  ul.appendChild(date_acquisition)

  const yahoo = document.createElement('a')
  yahoo.textContent = `Look at ${share.name} on Yahoo!`
  yahoo.href = `https://finance.yahoo.com/quote/${share.name_share}/`
  ul.appendChild(yahoo)

})

};


module.exports = SharesRenderView;
