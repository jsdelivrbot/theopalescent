import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Panel, Col, Row } from 'react-bootstrap';
import { Socials, Prompt, PoemRow, PoemCol } from './common';

class Articles extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div id={containerStyle} className="container">
        <h3>Articles</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>Articles will all be published on this page. If you're looking for a piece from a particular month just click on that month. Otherwise, have a good scroll through!</p>
              <ul>
                <li><Link to="articles/03-2017">March 17</Link></li>
              </ul>
            </Panel>
          </Col>
          <Col sm={6}>
            <Socials />
            <br />
            <Prompt />
            <br />
          </Col>
        </Row>
        &nbsp;
        <hr />
        &nbsp;
        <PoemRow>
          <PoemCol
            weight={12}
            title="Why You Should Go To Gigs Instead Of Working On Your Dissertation."
            author="Megan Walters"
          >
            <p>The neo-psychedelic band Temples were due to play Manchester Academy 2 on the 28th of March.  Naturally, I booked tickets as soon as they went on sale, thinking it would not be a problem that my dissertation and poetry portfolio deadlines were 10 days later.</p>
            <p>By the time the gig rolled around, I was 744 words into my 8000 word dissertation and had a first draft of 184 lines of poetry ready.  That was it.  I have been wrestling with my anxiety all academic year, but thought by now I would be on the assignment homestretch, instead of still trying to struggle over the first few hurdles.</p>
            <p>The day before the gig, I stayed at the library until 4.30am and was unable to sleep until about 8.30.  I woke a few hours later, unable to move from my bed as my anxiety at the thought of how little work I have done made my stomach so upset, the slightest movement felt vomit inducing.</p>
            <p>Consoled by my flatmate, who was angelic enough to sit on the end of my bed, in the dark, and distract me by telling me about her family, I decided I was not going to miss my favourite band because of anxiety.  In the past, I have given gig tickets away on the day of the shows, but <i>today will be different.</i></p>
            <p>The train from Liverpool to Manchester was taxing; rammed with people returning home after a long days’ work (manspreaders galore!), I questioned whether running away from my responsibilities, to an unfamiliar city, was really the best idea.  To compromise, I read ‘Anxious Narrations: Katherine Mansfield’s <i>In a German Pension’</i> to feel like I wasn’t cheating on my dissertation too brazenly.</p>
            <p>By the time I made it to Oxford Road, I was half way through the essay and just as shaken as before I got on the train.  I sat with a soya hot chocolate on Platform 3 for 20 minutes as I composed myself.  In the taxi to the venue, I decided when arrived I would walk straight to the back of the room to sit and finish the essay.</p>
            <p>What’s that saying? <i>The best-laid plans of mice and men often go awry.</i> I’d like to create an equivalent for third year students: The best-laid plans of dissertation students, often go awry when you go to gigs.  I walked in and the room was practically empty.  I realised I could possibly stand two rows back from the barrier, if I played my cards right!</p>
            <p>I have a wise friend I often go to for advice when I feel like giving up on gravity and floating away from my responsibilities.  A few weeks ago, when I was having a particularly hard time trying to start my dissertation, I hid under a desk in the library and called her.  She suggested I go to the cinema, sit in the dark by myself and use the space and time away from everything to let my dissertation anxiety sit in the back of my mind, rather than at the steering wheel.</p>
            <p>Of course, I didn’t listen. I asked myself, how I could possibly do that! <i>Take time away from my dissertation and do something fun?  Not a chance!  I must finish a chapter first.</i>  I thought I would be rewarding myself for doing no work, but in truth, it’s possibly the best advice I’ve been given the entire time I’ve been “working” on my dissertation.</p>
            <p>Instead of the cinema, Manchester Academy 2 became my sanctuary.  Temples came out to their intro for ‘All Join In’ and it was perfection.</p>
            <p><b>*Sappy Alert*</b> I did join in and I got out of my head completely.  I bobbed my head, took 30 second videos to add to my Instagram, cried a little, clapped along, even danced whilst being surrounded by people whose feet remained firmly on the floor.  I lost myself in James Bagshaw’s sequin blazer and Thomas Walmsley’s flyaway free hair (as well as their music, of course) and I was so thankful for their brilliantly timed appearance in my week.</p>
            <p>I’m currently sat in the library writing this article the day after the gig.  I’m still on 744 words and 184 unfinished lines, but I feel like I have control now.  My advice to any students who combat dissertations during their degrees; engage in art that affects you, evokes emotion in you, that takes you out of yourself.  You deserve the time and you need it.  Your dissertation will be waiting for you when you get back, but you’ll be able to greet it with a smile and a handshake, rather than avoiding eye contact and walking in the opposite direction.</p>
          </PoemCol>
        </PoemRow>
        &nbsp;
        <PoemRow>
          <PoemCol
            weight={12}
            title="Uncanny Valley – CGI and Aging Movies"
            author="Zane"
          >
            <p>Some movies age well. Playing Spielberg’s <i>Jurassic Park</i> to a modern audience is fairly similar to playing it to the original audience, save for it likely being from a laptop screen or larger TV and a desensitisation to seeing enormous extinct creature coming back to life after many years. In exploring a world where dinosaurs were the norm in <i>Jurassic World</i>, we could arguably extrapolate that sentiment to our contemporary audience’s desensitisation to CGI.</p>
            <p>A perfect example of this is the <i>Star Wars</i> franchise. The original trilogy, much beloved by the audience then and now, is heralded as a classic and often thought to be necessary to experience at some point in everyone’s life. Watching them with or without Lucas’s later tinkering, the effects are outdated, but still quite enchanting. Credit must be given to the creation of <i>A New Hope</i> on a budget that would be blown in an instant on nowadays blockbusters.</p>
            <p>Then along came the prequels. In 1999, movie-goers everywhere were bombarded with the CGI menace of Jar-Jar Binks and other cringe-worthy racist caricatures. The effects of <i>The Phantom Menace</i>, and the rest of the prequels, have aged poorly.</p>
            <p>So why does <i>Jurassic Park</i>, a movie that came out six years prior to <i>The Phantom Menace</i>, still hold up so well? Many have claimed it is the clever dispersal of CGI with puppets and animatronics, something that was used in the original <i>Star Wars</i> trilogy but largely ditched in favour of a CGI barrage in the prequels. Our eyes are used to spotting what is real and what is CGI, and shifting from CGI for far shots and animatronics up close stopped the adjustment to one or the other in <i>Jurassic Park</i>. However, this is not the only way to create a successful onscreen world.</p>
            <p>An important development in cinema was the release of the Wachowski Sisters’ obelisk, <i>The Matrix</i>. Its effects have aged, but universally it is still an enjoyable movie that is widely regarded today. The sequels were released with a more mixed reception, but the original movie was revolutionary at the time; the world created in the trilogy was believable enough to have people question the reality of their own world. Perhaps it was the cohesive plot and symbolism present that was absent from other action movies prior to it, or perhaps it was the greater time spent with no CGI effects that was absent from the <i>Star Wars</i> prequels.</p>
            <p>Both the <i>Star Wars</i> prequels and <i>The Matrix</i> trilogy were products of their time; a large amount of late 90s to early and mid-2000s movies were crammed full of CGI. Beforehand, these works were rare, and audiences were, for the moment, able to engage with the world created for them. As more and more movies tossed in their own works almost entirely constructed on a green-screen, we as an audience grew used to spotting the flaws in the effects, which were largely still in development. Perhaps they were impressive at the time, but they certainly do not hold up after the era of high concentration of CGI movies.</p>
            <p><i>The Force Awakens</i> and <i>Rogue One</i> have both been met with much warmer reception than their predecessors. While it could be for a number of reasons, including the change of director, a welcome break from CGI overload is given to us throughout both movies, in favour of real costumes for aliens, and actual, non-CGI Troopers, to name only two adjustments. However, <i>Rogue One</i> introduced some new CGI effects, such as the controversial recreation of Peter Cushing as Wilhuff Tarkin, and Carrie Fisher as Leia Organa. For a number of people, the effects didn’t quite escape the uncanny valley, though it’s largely agreed the rest of the effects were impressive. While development of technology may be another factor, one might imagine the majority of the effects in both movies will hold up longer than those in the prequels, since there are just less of them used unnecessarily.</p>
            <p>So where do we go next? This current era of movies will age eventually; some effects of the earlier Disney Marvel movies are looking a bit dog-eared now. I believe their shelf life will far exceed the majority of the late 1990s-2000s CGI movies, though some movies of that time are still enjoyable. While directors may have learnt from the past excitement around CGI, no doubt another development will eventually sweep Hollywood, and CGI will continue to outshine aging movies with more primitive effects in the future. I would certainly watch for more emergences of your favourite deceased actors in future movies, and whether they will become believable, or diminish under questionable ethics.</p>
          </PoemCol>
        </PoemRow>
        {/* <h4 className="half-theme">There are no entries</h4>
        <Panel className="half-theme">
          <p className="vertical-align-theme">Why don't you help us change that?</p>
        </Panel> */}
        &nbsp;
      </div>
    );
  }
}

const mapStateToProps = ({ containerStyleReducer }) => {
   const { containerStyle } = containerStyleReducer;
   return { containerStyle };
};

export default connect(mapStateToProps)(Articles);
