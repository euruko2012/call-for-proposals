# Decoupling Persistence (Like There’s Some Tomorrow)

_When I open up a Rails project and the models dir is full of 100%
ActiveRecord classes I shudder. Model ≠ Persistence._ — Ben Mabey

From DCI to presenters, from Uncle Bob’s
[architecture talk](http://confreaks.com/videos/759)
and Avdi Grimm’s upcoming [_Objects on
Rails_](http://avdi.org/devblog/2011/11/15/early-access-beta-of-objects-on-rails-now-available-2/)
book to the proliferation of (competing? complementing?) database
systems, it seems the time has come to seriously consider decoupling
our objects’ persistence from the rest of the application.

This talk – after describing the general vices of strong object/database
coupling and the all-too-usual `rails g model`-driven development
– covers the various approaches to separating the objects’ persistence
layer, along with their virtues (cleaner, simpler tests! backend
independence! no RDBMS-related shortcuts impacting the design!)
and potential vices (performance? perceived compexity? YAGNI?).

_Note: This talk got accepted to the
[wroc_love.rb](http://wrocloverb.com)
conference to be held mid-March. I’m
not sure whether it will be recorded,
so if you’d rather have a strictly original
talk on persistence, the [‘Persist, Little
Objects!’](https://github.com/euruko2012/call-for-proposals/pull/17)
might fit the bill better._

_Note: I also have [some other talks I would love
to give](https://github.com/chastell/talk-proposals),
so if you prefer any of the other topics just let me
know and I’ll happily switch._



## Piotr Szotkowski

Piotr Szotkowski is an assistant professor at Warsaw University of
Technology (where he happily sneaks Ruby, EventMachine and newfangled
database systems into the creaking world of twentieth-century academia),
a Ruby developer at [Rebased](http://rebased.pl) and an alumnus of
[Mendicant University](http://university.rubymendicant.com). He’s
also a long-time contributor to various open source projects for
the civic sector and co-organiser of [NetWtorek](http://netwtorek.pl)
– monthly [NetTuesday](http://netsquared.org/share/meetup)
meetings of people from the NGO/non-profit and IT sectors,
as well as [SocHack](http://sochack.pl) – quarterly 48-hour
hackatons for worthy causes, in coordination with [Random
Hacks of Kindness](http://www.rhok.org), [Open Data
Day](http://www.opendataday.org) and [Open Education
Week](http://www.openeducationweek.org).

![Profile picture](https://github.com/chastell/talk-proposals/raw/master/chastell.png)

- [Other talk proposals](https://github.com/chastell/talk-proposals)
- [Twitter](https://twitter.com/#!/chastell)
- [Past talk slides: Persisting Relations Across Time and Space](http://persistence-rubyconf-2011.heroku.com)
- [Past talk video: Persisting Relations Across Time and Space](http://confreaks.com/videos/657)
- [Past talk slides: From Profiling Ruby to Frankenstein Programming](http://profiling-ruby-src-2011.heroku.com)
- [Past talk video: From Profiling Ruby to Frankenstein Programming](http://confreaks.net/videos/547)
