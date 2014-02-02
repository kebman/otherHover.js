otherHover.js
=============

otherHover.js makes it easy to highlight other elements in your HTML

K, this is kind of hard to explain. The script basically demonstrates how you can manipulate other elements based on interaction with the current element. So if you hover over one element, another element will light up. 

## Prerequisites
You'll need to know a bit of HTML to use the script. While it isn't strictly required, knowing a bit of JavaScript will also help.

Caveat: The script may not work in older browsers, especially if it is an older version of MSIE...

## Usage
Say you have a long article. To make it easier to come to grips with the text, you collect keywords from some of the paragraphs and store it in a list. But you have a problem. When you look at the list of keywords, it's not easy to find the paragraph the keyword is actually pointing to. 

Enter otherHover.js!

Just put a span-tag with the class of "highlight" around each keyword you wish to store in the list.
Then add the ID "list" to the, errr, list. Each keyword in the list also needs needs to be surrounded by a span-tag. The reason is simply to prevent that the active area spans the whole width of the page. With the span-tag the active area only spans the width of the actual keyword. 

Now, whenever you hover your mouse over keyword in the list, the word will also light up in the paragraph you took it from. Small caveat: Works best if you can see both the paragraph and the list at the same time, though.

Try out the example HTML-file with the script and see for yourself!

## License
This project is licenced under the very permissive MIT license. Copy, share and change the code as you like. :)
