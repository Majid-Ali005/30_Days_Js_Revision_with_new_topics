# JavaScript Events
- HTML events are "things" that happen to HTML elements.
- When JavaScript is used in HTML pages, JavaScript can "react" on these events.
- hamare pass js me events hotay hy jo k click hone pr aap ko kuch kuch kr k detay hy.

## HTML Events

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:
![alt text](image.png)
- Tho aap iss trha se single or double dono quotes  ko use kr sakty hy.

#### onclick Event in JavaScript
- In the following example, an onclick attribute (with code), is added to a <button> element:
```bash
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>

</body>
</html>
// yaha pr button click hone k baad aap ko current date show hoga q k hum ne js ka Date() ka method use kiya howa hy etc.
```
- In the example above, the JavaScript code changes the content of the element with id="demo".
- In the next example, the code changes the content of its own element (using this.innerHTML):

##### The onclick Event
```bash
<button onclick="this.innerHTML=Date()">The time is?</button>
```
- yaha pr aap k pass onclick k upar aap k pass ossi hi button me date show hojayegi q k hum ne direct button k andar Date() js method ko use kiya howa hy etc.
- JavaScript code is often several lines long. It is more common to see event attributes calling functions:

#### Aap k pass aksar function ko event k click pr call kiya jata hy
```bash
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 
```
- jaise yaha pr hum ne function ko button k onclick pr call kiya howa hy jo k aap k pass kuch date print kr rha hy etc.

## Common HTML Events
![alt text](image-1.png)