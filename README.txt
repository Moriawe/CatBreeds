1. run npm install
2. set up mock database with command: json-server --watch data/db.json --port 8000




Things that could get better given I had more time to work on them.

One CategoryView instead of four. I made this choice to try out a few things in the beginning and then I ran out of time to make it into a component.
The CategoryViews showing one component in the flatlist instead of having the whole code there. Again, ran out of time.

Valet av kattbilder i Kategorierna. Det är olika storlekar och anpassar sig därför olika bra till den storlek som jag ger dom. Om jag hade haft mer tid hade jag valt bilder som hade liknande storlekar och upplägg. Detsamma gäller de bilder som finns i detaljinformationen. De hämtar jag ifrån API:et och de passar inte heller alltid med en rund bild.

Några av katterna har inte samma rasnamn i API:et som i min CategoriesData, det är ett fåtal som inte fungerar pga detta.
Jag ville använda så många olika state hanteringar som möjligt för att visa att jag kan hantera dom. När tänker på hur de är använda kanske det inte är helt ultimat. Jag skulle antagligen ha kvar API:et med katterna, och använda det även till den första renderingen, så slapp det bli glapp i vilka som fungerade och inte.
Till user skulle jag ha ett context för inloggning, men det andra skulle jag ha en databas som kunde hämta hem uppgifter om användaren.

Jag har valt att samla alla mina data komponenter i samma folder. Det är för att appen är så liten och jag ville ha dom alla på samma ställe.
