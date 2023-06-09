const doc = document

/*ф-я создания части эл-та с инфой иконками (ограничения и разрешения)*/

const createQuestIconInfoNode = (questObj) => {
	/*по факту можно убрать, но так понятнее, на мой взгляд*/
	const fragment = doc.createDocumentFragment()

	const iconsInfoBlock = doc.createElement('div')

	iconsInfoBlock.classList.add('quest-icons-info')
	const ageLimit = doc.createElement('p')
	ageLimit.classList.add('age-limit')
	const ageLimitContent = doc.createTextNode(questObj.ageLimit)
	ageLimit.append(ageLimitContent)
	iconsInfoBlock.append(ageLimit)

	const countPeopleP = doc.createElement('p')

	countPeopleP.classList.add('count-people')

	const iconPeople = doc.createElement('img')
	iconPeople.classList.add('icons-info')
	iconPeople.setAttribute('src', questObj.peopleIconSrc)
	iconPeople.setAttribute('alt', 'icon not found')

	countPeopleP.append(iconPeople)

	const countPeopleSpan = doc.createElement('span')
	const countPeopleSpanContent = doc.createTextNode(questObj.countPeople)
	countPeopleSpan.append(countPeopleSpanContent)

	countPeopleP.append(countPeopleSpan)
	iconsInfoBlock.append(countPeopleP)

	fragment.append(iconsInfoBlock)
	console.log('фрагмент с иконками  человечком отобразился)')
	console.log(fragment)

	return fragment
}

/*ф-я создания части эл-та с картинкой и описанием */

const createQuestImageAndDescriptionNode = (questObj) => {
	const fragment = doc.createDocumentFragment()

	const questImageWithText = doc.createElement('div')
	questImageWithText.classList.add('quest-image')

	const questImg = doc.createElement('img')
	questImg.setAttribute('src', questObj.image)
	questImg.setAttribute('alt', 'img not found')

	const questDescription = doc.createElement('div')
	questDescription.classList.add('quest-description')
	const questLink = doc.createElement('a')

	questLink.setAttribute('href', questObj.link)
	questLink.classList.add('a-desription')
	const questDescriptionText = doc.createTextNode(questObj.description)
	questLink.append(questDescriptionText)
	questDescription.append(questLink)

	questImageWithText.append(questImg, questDescription)
	fragment.append(questImageWithText)

	return fragment
}

/*ф-я создания части эл-та с описанием (тип, город... все дела)*/

const createQuestInfoNode = (questObj) => {
	const fragment = doc.createDocumentFragment()

	const itemBoxDescr = doc.createElement('div')
	itemBoxDescr.classList.add('item-box-desc')

	const questTitle = doc.createElement('p')

	const questTitleLink = doc.createElement('a')

	questTitleLink.setAttribute('target', '_blanck')
	questTitleLink.setAttribute('title', `Квест «${questObj.name}» ${questObj.organization}`)
	questTitleLink.setAttribute(
		'href',
		'https://mir-kvestov.ru/quests/wizardium-magicheskoe-podzemelie'
	)
	questTitleLink.classList.add('quest_tile_name_link')
	const questTitleLinkText = doc.createTextNode(questObj.name)
	questTitleLink.append(questTitleLinkText)

	questTitle.append(questTitleLink)
	itemBoxDescr.append(questTitle)

	const questTypeIcon = doc.createElement('span')
	const questTypeIconImg = doc.createElement('img')

	questTypeIconImg.classList.add('quest-icon')
	questTypeIconImg.setAttribute('alt', 'icon not found!')
	questTypeIconImg.setAttribute('src', questObj.questTypeIconSrc)
	questTypeIcon.append(questTypeIconImg)
	itemBoxDescr.append(questTypeIcon)

	const questTypeDesc = doc.createElement('span')
	const questTypeDescText = doc.createTextNode(questObj.questType)

	questTypeDesc.append(questTypeDescText)
	questTypeDesc.classList.add('game-type')

	const city = doc.createElement('p')
	const cityName = doc.createTextNode(questObj.city)

	city.append(cityName)

	const subway = doc.createElement('p')
	const subwayName = doc.createTextNode(questObj.subway)

	subway.append(subwayName)

	const rating = doc.createElement('p')
	const ratingInfo = doc.createTextNode(questObj.rating)

	rating.append(ratingInfo)

	itemBoxDescr.append(questTypeDesc, city, subway, rating)

	fragment.append(itemBoxDescr)

	return fragment
}

/*ф-я создания кнопочки брони */

const createButtonToBookNode = (questObj) => {
	const fragment = doc.createDocumentFragment()
	const buttunToBook = doc.createElement('a')
	const buttunToBookText = doc.createTextNode('Бронировать')

	buttunToBook.append(buttunToBookText)
	buttunToBook.classList.add('item-button')
	buttunToBook.setAttribute('target', '_blank')
	buttunToBook.setAttribute(
		'title',
		`Бронировать ${questObj.questType.toLowerCase()} «${questObj.name}» от ${questObj.organization}`
	)
	buttunToBook.setAttribute('data-scroll', '')
	buttunToBook.setAttribute('href', questObj.link)

	fragment.append(buttunToBook)

	return fragment
}

/*собираем элемент с квестом полностью*/

const createFullQuestNode = (questObj) => {
	const fullElement = doc.createDocumentFragment()

	const element = doc.createElement('div')
	element.classList.add('quest-item')

	/*создание части блока с возрасотом и колвом участников */
	element.append(createQuestIconInfoNode(questObj))

	/*создание части элемента с картинкой квеста и подписью (затравочка)*/
	element.append(createQuestImageAndDescriptionNode(questObj))

	/*создание части элемента с информацией о квесте  */
	element.append(createQuestInfoNode(questObj))

	/*рисуем кнопочку брони*/
	element.append(createButtonToBookNode(questObj))

	fullElement.append(element)

	return fullElement
}

class questInfoFromServer {
	constructor(
		name,
		organization,
		link,
		ageLimit,
		countPeople,
		peopleIconSrc,
		questType,
		questTypeIconSrc,
		image,
		description,
		city,
		subway,
		rating
	) {
		this.name = name
		this.organization = organization
		this.link = link
		this.ageLimit = ageLimit
		this.countPeople = countPeople
		this.peopleIconSrc = peopleIconSrc
		this.questType = questType
		this.questTypeIconSrc = questTypeIconSrc
		this.image = image
		this.description = description
		this.city = city
		this.subway = subway
		this.rating = rating
	}

	fullInfo = () => {
		console.log(
			`Full info about quest '${this.name}':\n\n`,
			`name: ${this.name}\norganization: ${this.organization}`,
			`link: ${this.link}\nageLimit: ${this.ageLimit}\n`,
			`countPeople: ${this.countPeople}\npeopleIconSrc: ${this.peopleIconSrc}\n`,
			`questType: ${this.questType}\nquestTypeIconSrc: ${this.questTypeIconSrc}\n`,
			`image: ${this.image}\ndescription: ${this.description}\n`,
			`city: ${this.city}\nsubway: ${this.subway}\n`,
			`rating: ${this.rating}`
		)
	}
}
/*

const quest0 = new questInfoFromServer(
	'Алхимик',
	'Клаустрофобия',
	'quest0',
	'16+',
	'1-6',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Перформанс',
	'https://cdn.icon-icons.com/icons2/1703/PNG/96/ghost_112194.png',
	'https://mir-kvestov.ru/uploads/quests/4033/large/claustrorhobiacom_alhimik_photo3.jpg?1670407880',
	'Вы когда-нибудь были в пустующем доме,где происходят странные вещи?',
	'Москва',
	'м. Проспект Мира',
	'Рейтинг по отзывам: (4.8)'
)

const quest1 = new questInfoFromServer(
	'Особняк с привидениями',
	'Клаустрофобия',
	'quest1',
	'12+',
	'1-5',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Квест',
	'https://mir-kvestov.ru/uploads/quest_type_icons/1/original.svg?1602791444',
	'https://mir-kvestov.ru/uploads/quests/838/large/kvest_kom_osobnyak_s_privideniyami_photo2.jpg?1643753748',
	'Таинственный особняк, окруженный мрачным лесом, хранит много тайн.',
	'Москва',
	'м. Проспект Мира',
	'Рейтинг по отзывам: (4.7)'
)

const quest2 = new questInfoFromServer(
	'Люди в чёрном',
	'Quest Stars',
	'quest2',
	'14+',
	'1-5',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Квест',
	'https://mir-kvestov.ru/uploads/quest_type_icons/1/original.svg?1602791444',
	'https://mir-kvestov.ru/uploads/quests/7619/large/quest_stars_ludi_v_chernom_photo3.jpg?1676032614',
	'Вы когда-нибудь были в пустующем доме? А в доме, где происходят странные вещи?',
	'Москва',
	'м. Красносельская',
	'Рейтинг по отзывам: (4.7)'
)

const zelQuest0 = new questInfoFromServer(
	'Игра в кальмара',
	'Мультяшки-шоу',
	'questZel0',
	'10+',
	'6-15',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Квест',
	'https://mir-kvestov.ru/uploads/quest_type_icons/1/original.svg?1602791444',
	'https://mir-kvestov.ru/uploads/quests/19205/large/multyashki_shou_igra_v_kalmara_photo1.jpg?1667379116',
	'Давайте сыграем.',
	'Зеленоград',
	'пл. Шокина',
	'Рейтинг по отзывам: (5.0)'
)

const zelQuest1 = new questInfoFromServer(
	'Хаги Ваги',
	'Мультяшки-шоу',
	'questZel1',
	'6+',
	'2-10',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Квест-анимация',
	'https://mir-kvestov.ru/uploads/quest_type_icons/1/original.svg?1602791444',
	'https://mir-kvestov.ru/uploads/quests/19204/xlarge/multyashki_shou_hagi_vagi_photo1.jpg?1667378595',
	'Ребят ждет приключение с Хаги Ваги. Будет ли он добрым другом или страшным монстром – выбор за вами!',
	'Зеленоград',
	'р.п. Андреевка',
	'Рейтинг по отзывам: (5.0)'
)

const zelQuest2 = new questInfoFromServer(
	'Зомби-апокалипсис',
	'Мультяшки-шоу',
	'questZel2',
	'18+',
	'2-9',
	'https://www.clipartmax.com/png/full/9-96044_big-image-icon-person-png-white.png',
	'Квест',
	'https://mir-kvestov.ru/uploads/quest_type_icons/1/original.svg?1602791444',
	'https://mir-kvestov.ru/uploads/quests/12330/xlarge/multyashki_shou_zombiapokalipsis_photo1.jpg?1643795450',
	'Халатность учёного привела к полномасштабной эпидемии зомби-вируса.',
	'Зеленоград',
	'р.п. Андреевка',
	'Рейтинг по отзывам: (5.0)'
)

let questArrays = [quest0, quest1, quest2]
let zelQuestArrays = [zelQuest0, zelQuest1, zelQuest2]

quest0.fullInfo()
quest1.fullInfo()

const allQuestsNearZelBlock = doc.querySelector('#questNearZelenograd')

questArrays.forEach((element) => allQuestsNearZelBlock.append(createFullQuestNode(element)))

const allQuestsIntoZelBlock = doc.querySelector('#questZelenograd')

zelQuestArrays.forEach((element) => allQuestsIntoZelBlock.append(createFullQuestNode(element)))
*/
