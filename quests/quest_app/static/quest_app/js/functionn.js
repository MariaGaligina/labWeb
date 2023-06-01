const createQuestElement = (allQuestsBlock,title,link,cityName) => {

	const allQuestsBlock = doc.querySelector('.quest-items')

	const newQuestBlock = doc.createElement('div')
	newQuestBlock.classList.add('quest-item')

	/*создание части блока с возрасотом и колвом участников */

	
	newQuestBlock.append(createIconInfoBlock())
	/*allQuestsBlock.append(newQuestBlock)*/
	console.dir(newQuestBlock)
	console.log(newQuestBlock)

	/*создание части элемента с картинкой квеста и подписью (затравочка)*/

	const questImageWithText = doc.createElement('div')
	questImageWithText.classList.add('quest-image')

	const questImg = doc.createElement('img')
	questImg.setAttribute('src','https://mir-kvestov.ru/uploads/quests/4033/large/claustrorhobiacom_alhimik_photo3.jpg?1670407880', 'alt', 'img not found')
	questImg.setAttribute('alt', 'img not found')

	const questDescription = doc.createElement('div')
	questDescription.classList.add('quest-description')
	const questLink = doc.createElement('a')


	questLink.setAttribute('href', 'https://mir-kvestov.ru/quests/world-of-quests-osobnyak-s-prvidinyami')
	questLink.classList.add('a-desription')
	const questDescriptionText = doc.createTextNode('Вы когда-нибудь были в пустующем доме? А в доме, где происходят странные вещи?')
	questLink.append(questDescriptionText)
	questDescription.append(questLink)

	questImageWithText.append(questImg, questDescription)

	newQuestBlock.append(questImageWithText)

	/*создание части элемента с информацией о квесте  */

	const itemBoxDescr = doc.createElement('div')
	itemBoxDescr.classList.add('item-box-desc')

	const questTitle = doc.createElement('p')

	const questTitleLink = doc.createElement('a')

	questTitleLink.setAttribute('target', '_blanck')
	questTitleLink.setAttribute('title', 'Квест «Гарри и темное подземелье» от Дом Гарри')
	questTitleLink.setAttribute('href', 'https://mir-kvestov.ru/quests/wizardium-magicheskoe-podzemelie')
	questTitleLink.classList.add('quest_tile_name_link')
	const questTitleLinkText = doc.createTextNode('Гарри и темное подземелье')
	questTitleLink.append(questTitleLinkText)

	questTitle.append(questTitleLink)
	itemBoxDescr.append(questTitle)

	const questTypeIcon = doc.createElement('span')
	const questTypeIconImg = doc.createElement('img')

	questTypeIconImg.classList.add('quest-icon')
	questTypeIconImg.setAttribute('alt', 'icon not found!')
	questTypeIconImg.setAttribute('src', 'https://cdn.icon-icons.com/icons2/1703/PNG/96/ghost_112194.png')

	questTypeIcon.append(questTypeIconImg)
	itemBoxDescr.append(questTypeIcon)

	const questTypeDesc =doc.createElement('span')
	const questTypeDescText = doc.createTextNode('Перформанс')

	questTypeDesc.append(questTypeDescText)
	questTypeDesc.classList.add('game-type')

	const city = doc.createElement('p')
	const cityName = doc.createTextNode('Москва')

	city.append(cityName)

	const subway = doc.createElement('p')
	const subwayName = doc.createTextNode('м. Проспект Мира')

	subway.append(subwayName)

	const rating = doc.createElement('p')
	const ratingInfo = doc.createTextNode('Рейтинг по отзывам: (4.8)')

	rating.append(ratingInfo)

	itemBoxDescr.append(questTypeDesc, city, subway,rating)

	newQuestBlock.append(itemBoxDescr)

	/*наконец рисуем кнопочку брони*/

	const buttunToBook = doc.createElement('a')
	const buttunToBookText =doc.createTextNode('Бронировать')

	buttunToBook.append(buttunToBookText)
	buttunToBook.classList.add('item-button')
	buttunToBook.setAttribute('target','_blank')
	buttunToBook.setAttribute('title', 'Бронировать квест-Перформанс «Алхимия» от Клаустрофобия')
	buttunToBook.setAttribute('data-scroll', '')
	buttunToBook.setAttribute('href', 'https://mir-kvestov.ru/quests/world-of-quests-osobnyak-s-prvidinyami#timetable')

	newQuestBlock.append(buttunToBook)

	allQuestsBlock.append(newQuestBlock)


}


const blockTemplate = document.querySelector("#block")
// !cделать отдельную html только для шаблона и нигде ей не пользоваться! или !display none!

const createElement = (initialData) {
	const element = new Element()

	element.data = initialData

	return element
}




const createBlock = (image, href, blockData) => {
	const block = blockTemplate.cloneNode(true)

	block.style.bgi = image
	block.dldfl.dfldfl.href = href
	block.kdsfk.lsdfjsdf.age = blockData.age
	block.style.bgi = image
	block.dldfl.dfldfl.href = href
	block.kdsfk.lsdfjsdf.age = blockData.ageblock.style.bgi = image
	block.dldfl.dfldfl.href = href
	block.kdsfk.lsdfjsdf.age = blockData.age

	return block
}



/*рлол.длдо
рпавапрпрд
лораппрлд */

const арпроп = (gjhkjk, nhjhlk,vfhjhj,
	khkljlk,hkjhk) => {
	
}