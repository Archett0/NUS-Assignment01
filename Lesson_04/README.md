#  This is a README file to explain how my profile page is displayed

##  Overview

First, I think I'm supposed to show what the page looks like *without* CSS being implemented.

The following image shows this situation:

![img1](https://user-images.githubusercontent.com/63484755/175950155-281afc55-5a35-4518-a07f-74d3ce408bc1.png)

We can easily tell that this is a total mess. So this is what the page looks like after I linked them with CSS files:

![img2](https://user-images.githubusercontent.com/63484755/175950282-1b9e8080-c9d4-4d0e-83c3-b0c595129925.png)

The page works fine now.

##  Step by step explanations

1. Set `Hi, I'm Cooper`'s color by defining a new CSS class `font-special-color`
  
```css
.font-special-color {
    color: palevioletred;
}
```

And by using this code to use this CSS:

```css
<h2 class="font-special-color">Hi, I'm Cooper</h2>
```

2. Set the picture of Tom Cruise floated on the left side with demonstrations on its right:
  
```css
.picture-and-demonstrations {
    position: relative;
    bottom: 10px;
}

img {
    width: 20%;
    float: left;
    padding-right: 10px;
}

ol{
    padding-left: 23%;
}
```

And by constraining them inside a `div` to use this CSS:

```html
    <div class="picture-and-demonstrationss">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQynIAJReBEhr6FGTQHQkIo0jmfWLY07G0J7qMOUQow9hBHf-Ad"
            alt="Tom Cruise">
        <h5>Surely you know who he is right?</h5>
        <ol>
            <li>Thomas Cruise Mapother IV (born July 3, 1962), better known as Tom Cruise, is an American actor and
                producer. One of the world's highest-paid actors,[1] he has received various accolades, including an
                Honorary Palme d'Or and three Golden Globe Awards, in addition to nominations for three Academy Awards
                and a British Academy Film Award. His films have grossed over $4 billion in North America and over $10.1
                billion worldwide,[2] making him one of the highest-grossing box office stars of all time.[3]</li>
            <li>Cruise began acting in the early 1980s and made his breakthrough with leading roles in the comedy film
                Risky Business (1983) and action film Top Gun (1986). Critical acclaim came with his roles in the dramas
                The Color of Money (1986), Rain Man (1988), and Born on the Fourth of July (1989). For his portrayal of
                Ron Kovic in the latter, he won a Golden Globe Award and received a nomination for the Academy Award for
                Best Actor. As a leading Hollywood star in the 1990s, he starred in several commercially successful
                films, including the drama A Few Good Men (1992), the thriller The Firm (1993), the horror film
                Interview with the Vampire (1994), and the romance Jerry Maguire (1996). For his role in the latter, he
                won a Golden Globe Award for Best Actor and received his second Academy Award nomination. Cruise's
                performance as a motivational speaker in the drama Magnolia (1999) earned him another Golden Globe Award
                and a nomination for the Academy Award for Best Supporting Actor.</li>
            <li>Since then, he has largely starred in science fiction and action films, establishing himself as an
                action star, often performing his own risky stunts. He has played Ethan Hunt in all six of the Mission:
                Impossible films from 1996 to 2018. His other notable roles in the genre include Vanilla Sky (2001),
                Minority Report (2002), The Last Samurai (2003), Collateral (2004), War of the Worlds (2005), Knight and
                Day (2010), Jack Reacher (2012), Oblivion (2013), Edge of Tomorrow (2014), The Mummy, American Made
                (both 2017) and Top Gun: Maverick (2022).</li>
        </ol>
    </div>

```

I cleared this floating effect by setting this subsequent `div` :

```html
<div class="clear-floating-divs"></div>
```

```css
.clear-floating-divs{
    clear: both;
}
```

3. And finally I set the CSS for bold elements:
  
```css
b {
    font-family: verdana;
}
```

So this is it!
