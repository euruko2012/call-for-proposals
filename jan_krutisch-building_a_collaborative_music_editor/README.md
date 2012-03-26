# Building a collaborative music editor

Since around 2009, when realtime audio in the browser first seemed feasible, I've been working on and off on an idea of building a truly collaborative music editor for the web. With Cloudtracker 2.0, a winning demo at the [Musichackday Amsterdam](http://amsterdam.musichackday.org) I built together with [Sven Steinheisser](http://twitter.com/rockogranato), we now have a platform based on a very old (and thus well known) music file format called a Protracker Module to test ideas and concepts around this.

After introducing you to the idea and the technical challenges of collaborative music editing, I will talk about some (if not all) of the following topics:

* Dealing with binary data formats on the web, in both Javascript and Ruby
* Optimizing wire formats for speed of operation and bandwidth, respecively format overhead
* Implementing or selecting a datastore for a binary file format that can handle a continuous stream of updates and artefacts of this, including conflict resolution etc.
* Distributing the changes to a number of clients in realtime, visualizing the changes in a non-confusing way

The project is live at [cloudtracker.fm](http://cloudtracker.fm), the bug ridden, hackday-style code (that will surely massively improve until Euruko) is available at the [githubs](http://github.com/halfbyte/ct2).

## Jan Krutisch

An environmental engineer by training, a web developer by trade and a hacker by night. Building Rails based web applications for more than 20 years now. This year, for the first time, writing more javascript code than ruby code. Also been dipping my toes into python-land a bit. Recently wrote a LOGO program.

![Profile picture](../raw/master/jan_krutisch-building_a_collaborative_music_editor/profile_picture.jpg)

- [My website](http://jan.krutisch.de)
- [My twitter](https://twitter.com/halfbyte)
- [Past talk slides: 10 fun projects to improve your coding skills](http://www.slideshare.net/jan_mindmatters/10-fun-projects-to-improve-your-coding-skills)
- [Past talk video: Your Small Things on The Net](http://videos.sapo.pt/3yPm3NeMornyR0wCY2ba)

