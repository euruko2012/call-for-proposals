# Data are awesome

Tracking easy metrics is easy.  Tracking useful activity in your app, on the other hand, takes more work, and understanding that data is even tougher.  It's worth it, though -- being able to measure activity over time as you improve your site is not only useful but awesome.  Admit it: deep down, you'd be excited to crunch the numbers and discover that promoting your iPhone app increased usage by N%, or that you had M% better retention with the numbers.  (And that's not to mention the Javascript-based charts and graphs you can make.)

In this talk, I'll review working with metrics from start to finish:

* Storing knowledge: what data to store, and how to store it.  (tl;dr: it's mostly obvious, but filled with gotchas, and it's hard to backfill info you wish you'd been collecting.)
* Asking questions: figuring out what you want to know, and how to ask those questions to your data. (tl;dr: top-line data like user growth can be deceiving; constructing queries is hard but fun.)
* Getting answers: using tools like map/reduce to turn data into answers. (tl;dr: map/reduce is great once you get your head around it, and you can write code to make adding queries and exporting the results easy.)

The presentation will draw from my experience building [Wunderkit](http://wunderkit.com/) at 6Wunderkinder, an app with deeply integrated metrics, as well as designing Facebook applications for Fortune 500 clients at Context Optional.  Though the code examples given will focus on Rails and on map/reduce using Mongo, most of the ideas will be general and portable.  


### Notes to the Talk

There's a lot of information in here, and I'd welcome feedback on whether to focus it more on the mechanics of map/reduce (providing a longer intro and more code examples) or of walking through the entire topic and focusing just as much on how to log the data (and what data to log) and identifying the right questions to ask.

In addition to providing code examples (see the [map/reduce framework](https://github.com/arsduo/call-for-proposals/blob/master/data_are_awesome/map_reduce_framework.js)), I'd like to provide at least one or two interesting public metrics from Wunderkit and the code used to generate them.  The framework code referenced should be released as an open-source toolkit at some point soon.

Finally, I'll touch briefly on related topics like safeguarding user privacy, tracking server-level log data, and integrating into Rails, though mostly just acknowledging them in passing.


### Alex Koppel

An enthusiastic Rubyist with a secret love for Javascript, an amateur cook, a book reader, social network expert, and inveterate tinkerer.  He's the author of Koala, an Facebook gem, and several smaller open-source projects, and currently spends his days (and some nights) playing with new technology and building productivity software at 6Wunderkinder in Berlin.  Over the course of over 200,000 miles flown (first as a healthcare IT consultant and then as a migrant), he's met a lot of interesting people and learned a lot of random things, and likes few things better than a fresh beer in a new bar with good company.  

![Profile picture](https://github.com/arsduo/call-for-proposals/raw/master/data_are_awesome/profile_picture.jpg)

- [My twitter](https://twitter.com/#!/arsduo)
- Past presentations:
  - [Metaprogramming](http://www.slideshare.net/koppel/metaprogramming-11823022), Berlin RUG, 3/2012, San Francisco RUG, 7/2010
  - [Facebook + Ruby](http://www.slideshare.net/koppel/facebook-ruby), Munich RUG, 2/2011

