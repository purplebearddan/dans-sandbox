# Fetch and Promises

## Lesson Objectives

- Promises
- `fetch()`
- `.then()`
- `.finally()`

## Intro

Have you ever wanted to get information from the internet without refreshing your entire page? That's where `fetch()` comes in! 

`fetch()` is a built-in function in JavaScript that allows you to make requests to an `API` or server for data. With the help of `.then()` and `.finally()`, you can handle the returned data in a more efficient way.

### Example

Imagine you're building a website that displays random dog images every time you `click` a `button`. You can use the `fetch()` function to make a request to an `API` that *returns a random dog `image`*, and then display that `image` on your website. Here's some code that does just that:

```js
const button = document.querySelector('button');
const img = document.querySelector('img');

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      img.src = data.message;
      img.alt = 'A random dog image';
    })
    .catch(error => {
      console.error('Error fetching dog image:', error);
    })
    .finally(() => {
      console.log('Done fetching dog image');
    });
});
```

In this example, we select a `button` and an `image element` from the `HTML document`, and *add an event listener* to the `button`. When the button is clicked, the fetch() function makes a request to the Dog API for a random dog image.

Once the `API` returns the `image`, the first `.then()` method is called to extract the `JSON data` from the `response`. The second `.then()` method is then called with the extracted data as an `argument`, where we set the `src` and `alt` attributes of the `image element` with the `image URL` and a `description`.

If an error occurs at any point in the `fetch() chain`, the `.catch()` method is called with the `error` as an `argument`. 

Finally, the `.finally()` method is called to `log` a message to the `console`.

By using `fetch()`, `.then()`, and `.finally()`, we were able to make an `asynchronous` request to an `API` and *handle the returned data* in a clear and concise way.

## Resources

By now you should be using problem solving skills by using Search Engines like:

- [google](https://google.com)
- [Bing](https://bing.com)
- [DuckDuckGo](https://duckduckgo.com)
- [StartPage](https://www.startpage.com)

Some helpful phrases to search for from this lesson are:

- "JS fetch"
- "JS then syntax"
- "JS finally"
- "Promises in JavaScript"

If you combo up these phrases with other keywords such as:

- "W3 Schools"
- "MDN Docs"
- "site:youtube.com tutorial"

You should find excellent resources with knowing your "Google-FU"
