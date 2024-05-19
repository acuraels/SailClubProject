// part 1

let darkThemeBut = document.querySelector('.theme-button-dark');
let lightThemeBut = document.querySelector('.theme-button-light');

let serifFontBut = document.querySelector('.font-button-serif');
let sansSerifFontBut = document.querySelector('.font-button-sans-serif');

darkThemeBut.onclick = function() 
{
	document.body.classList.add('dark');
	lightThemeBut.classList.remove('active');
	darkThemeBut.classList.add('active');
};

lightThemeBut.onclick = function() 
{
	document.body.classList.remove('dark');
	darkThemeBut.classList.remove('active');
	lightThemeBut.classList.add('active');
};

serifFontBut.onclick = function() 
{
	document.body.classList.add('serif');
	sansSerifFontBut.classList.remove('active');
	serifFontBut.classList.add('active');
};

sansSerifFontBut.onclick = function() 
{
	document.body.classList.remove('serif');
	serifFontBut.classList.remove('active');
	sansSerifFontBut.classList.add('active');
};

// part 2

let webSectionsBlogs = document.querySelectorAll('.blog-article.short');

for (let webSectionsBlog of webSectionsBlogs) 
	{
	let moreOptionBut = webSectionsBlog.querySelector('.more');

	moreOptionBut.onclick = function() 
	{
		webSectionsBlog.classList.remove('short');
	};
};

// part 3

let cardGridBut = document.querySelector('.card-view-button-grid');
let carsListBut = document.querySelector('.card-view-button-list');
let generalCardList = document.querySelector('.cards');

carsListBut.onclick = function () 
{
	generalCardList.classList.add('list');
	cardGridBut.classList.remove('active');
	carsListBut.classList.add('active');
};

cardGridBut.onclick = function () 
{
	generalCardList.classList.remove('list');
	cardGridBut.classList.add('active');
	carsListBut.classList.remove('active');
};

// part 4

let activePic = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let preview of previews) 
	{
	preview.onclick = function (evt) 
	{
		evt.preventDefault();
		activePic.src = this.href;

		let currentActivePic = document.querySelector('.preview-list .active-item');
		
		if (currentActivePic) {
			currentActivePic.classList.remove('active-item');
		}
		this.classList.add('active-item');
	};
}
