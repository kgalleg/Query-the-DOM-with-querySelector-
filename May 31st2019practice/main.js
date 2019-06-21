
// Use JavaScript to obtain a reference to the first section with the class of
// article_header and change its text with the textContent property to "Welcome
// to the {insert your name here} blog" 

//Use JavaScript to obtain a reference to
// all article__header elements and change their classList property value to
// article__header important. 

//Obtain a reference the element with a class of
// dashed and remove it. 

//Obtain a reference the element with a class of
// article_footer and add the class of goldenrod it.

//below is the second time I went back to practice this chapter 

const changingHeader = document.querySelector(".article__header");
changingHeader.textContent = "Welcome to the Karla Blog"
console.log(changingHeader);

const alArticleHeaders = document.querySelectorAll(".article__header");
alArticleHeaders[0].classList.add("important");
alArticleHeaders[1].classList.add("important");
console.log(alArticleHeaders)

const dashedArticleRemoval = document.querySelector(".dashed");
dashedArticleRemoval.classList.remove("dashed")
console.log(dashedArticleRemoval)

const goldenFooter = document.querySelector(".article__footer");
goldenFooter.classList.add("goldenrod")
console.log(goldenFooter)




//Below is the first time I practiced this chapter

// const firstSectionReference = document.querySelector(".article__header")
// firstSectionReference.textContent = "Welcome to the Karla blog!"
// console.log(firstSectionReference)

// const allHeaders = document.querySelectorAll(".article__header")
// console.log(allHeaders)
// allHeaders[0].classList.add("important")
// allHeaders[1].classList.add("important")
// console.log(allHeaders)

// const dashedElement = document.querySelector(".dashed")
// dashedElement.classList.remove("dashed")
// console.log(dashedElement)

// const goldenRodElement = document.querySelector(".article__footer")
// goldenRodElement.classList.add("goldenrod")
// console.log(goldenRodElement)







