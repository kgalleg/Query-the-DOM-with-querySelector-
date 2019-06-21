// Practice exercises from slack on monday, June 3, 2019 (this file is connected to the morePractice.html file)

// 1. Create a javascript file

// 2. Use `document.querySelector('.blogPosts')` to create a variable called `blogContainer`

// 3. Use `document.querySelectorAll('.blogArticle')` to create variable called `myArticles`

// console.log each variable. How are they different? Try adding an additional class of "currentBlog" to the elements using `classList.add`. Does it work? Why or why not? If not, what do you need to do to meet the requirement of adding a class?  

// One element
let blogContainer = document.querySelector('.blogPosts')
console.log('blogContainer', blogContainers);
blogContainer.classList.add("currentBlog")

// one or more element wrapped in []
let myArticles = document.querySelectorAll('.blogArticle')
console.log('myArticles', myArticles);
for (let i = 0; i < myArticles.length; i++) {
    myArticles[i]. classList.add("stuff")
}

