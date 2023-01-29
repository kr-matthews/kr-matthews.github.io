import "./rubiks-cube-blindfolded.css";

// import images

import sA from "./Ace.svg";
import s2 from "./Two.svg";
import s3 from "./Three.svg";
import s4 from "./Four.svg";
import s5 from "./Five.svg";
import s6 from "./Six.svg";

import seq2 from "./seq-2-virtual.png";
import seq3 from "./seq-3-virtual.png";
import seq8 from "./seq-8-virtual-see-buffer.png";

import scrambledVirtual from "./scrambled-virtual.png";
import inPlaceEdge from "./in-place-edge-virtual.png";
import solvedPhysical from "./solved-cube-physical.jpg";
import solvedVirtual from "./solved-cube-virtual.png";
import somePieces from "./two-pieces-physical.jpg";
import allPieces from "./all-pieces-physical.jpg";
import core from "./core-physical.jpg";
import solvedEdge from "./solved-edge-physical.jpg";
import unsolvedEdge from "./misplaced-edge-physical.jpg";
import flippedEdge from "./flipped-edge-physical.jpg";
import preSwap from "./2-edges-pre-swap.png";
import postSwap1 from "./2-edges-swap-v1.png";
import postSwap2 from "./2-edges-swap-v2.png";
import correctSwap from "./correct-first-swap.png";
import incorrectSwap from "./incorrect-first-swap.png";
import solvedEdges from "./edges-solved-2-corners-swapped.png";

// helper

const cards = [null, sA, s2, s3, s4, s5, s6];

function CardSeq({ inds, caption }) {
  return (
    <div className="cards">
      {inds.map((ind) => {
        return <img src={cards[ind]} alt={"Card " + ind} key={ind} />;
      })}
      <div className="caption">{caption}</div>
    </div>
  );
}

// content

function Content() {
  return (
    <>
      <h2>What we will (and won't) be discussing</h2>
      <p>
        This is the first in a series of articles about solving Rubik's Cubes
        blindfolded. It may look long, but that's just because there are so many
        images. There are no prerequisites — you don't need to know how to solve
        a Rubik's Cube, or anything about them really. If you've seen one
        before, that will be enough background (and in case you somehow haven't,
        there's an image at the top of this article, so you have no excuses). In
        particular, you don't need to know how to solve one 'normally' (that is,
        without a blindfold). In fact, the techniques and methods for regular
        solving (also known as 'speed solving' if one uses a timer) are
        completely different from those for blindfolded solving, so you won't be
        at any disadvantage.
      </p>
      <p>
        How does blindfolded solving work? You're given a scrambled cube. You
        get to look at it as long as you'd like, without making any turns/moves
        — the memorization phase. Then you don a blindfolded and make moves to
        (attempt to) solve it without being able to see what you're doing — the
        execution phase. Of course, you may be successful or unsuccessful in any
        given attempt. You can time yourself — and many do — but we'll ignore
        that aspect.
      </p>
      <p>
        The execution phase often seems completely out of reach to people. In
        these articles, we will focus on the memorization phase, and only
        briefly mention the execution phase when necessary, without getting into
        many details. It may seem odd to only examine half of the process, but
        it turns out that how one memorizes a scrambled cube and how one
        executes the solution are mostly independent of each other. No matter
        whether a 'basic'/'beginner' execution method is used or an 'advanced'
        execution method is used, the memorization method is more-or-less the
        same.
      </p>
      <p>
        The memorization phase, which we've just agreed to focus on, can itself
        be broken down into two components. First we need to figure out what to
        memorize, and then we need to actually memorize it. Anything involving
        memorization is often perceived as daunting by most people, just like
        the execution phase. In these articles, we will only focus on figuring
        out what we need to memorize, and instead of memorizing that
        information, we will just write it down.
      </p>
      <p>
        To summarize (the introduction): We will be ignoring what are often
        perceived as the two most difficult parts of solving a Rubik's Cube
        blindfolded, and instead examine the much more accessible aspect of
        figuring out what we would need to memorize. Moreover, we won't even
        start with a cube — we'll start with some playing cards, which are much
        more familiar and hopefully much less scary.
      </p>
      <h2>A simpler case study: Six playing cards</h2>
      <p>
        Suppose we have the ace through six of spades laid out in a row in front
        of us. I strongly recommend going and getting some cards (or any 6
        numbered objects, really) and following along with everything we go
        through below.
      </p>
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Ace through six of spades, laid out in a row."
      />
      <p>
        In this simple 'game' that I'm making up, the cards are placed in a row
        in any order, and the goal is to get them ordered by rank, ace through
        six. We'll say a card is correctly placed if it's in the spot it needs
        to be in, and is incorrectly placed otherwise. To start, let's forget
        about being blindfolded at all. We can see the cards, and we can pick
        them up and move them around however we please. How would you get them
        in order?
      </p>
      <p>
        No really, stop and think about it. Can you think of a good way to do
        it? Or maybe several possible ways to do it? There are no wrong answers
        at this point.
      </p>
      <CardSeq
        inds={[3, 2, 6, 5, 1, 4]}
        caption="A random arrangement of the cards."
      />
      <p>
        One way to do it is to pick up all the cards and put them in our hand
        (as if we were playing a card game). Then either place them back in
        their correct positions one at a time in the order that we picked them
        up, or sort them in our hand and then lay them out in order. Maybe you
        came up with a similarly but slightly different method just now, or one
        which is completely different.
      </p>
      <p>
        To reiterate, there are no wrong answers. However, some answers will be
        more helpful than others in working towards our ultimate goal regarding
        a Rubik's Cube. A solution involving picking up all the cards works well
        here, but if we had 52 cards, or hundreds of cards, it wouldn't work
        very well. So with that in mind, we're now going to add a restriction to
        this card sorting game: We can't pick up all the cards at once anymore —
        we can only pick up two cards at a time, and swap their positions. Now
        what would you do? (Or maybe your initial answer above still works!)
      </p>
      <p>Don't just keep reading. Think.</p>
      <p>
        An intuitive way to proceed is to scan for pairs of cards which need
        swapping and swap those. If there are no such pairs, then just do any
        swap that will get one of the two cards into place. This is a good idea
        (and actually quite efficient), but can we make it more systematic? If
        we had hundreds of cards, it would be hard to scan for pairs which need
        swapping.
      </p>
      <p>
        Given enough time, many people seem to converge on the following idea:
        Find the ace and swap it into the correct position (that is, swap the
        spot that the ace is currently in with the spot that the ace belongs
        in). If the ace is already correctly placed, then there's nothing to do.
        Next, find the two and swap it into position. And so on, with the three,
        the four, and finally the five. (Once we've got the first five cards in
        place, the sixth is automatically in place. In fact once we get any five
        cards correctly placed, we get the last one for free.)
      </p>
      <CardSeq
        inds={[3, 2, 6, 5, 1, 4]}
        caption="The random arrangement from above."
      />
      <CardSeq
        inds={[1, 2, 6, 5, 3, 4]}
        caption="Finding the ace and swapping it into the correct position."
      />
      <CardSeq
        inds={[1, 2, 3, 5, 6, 4]}
        caption="The two is already correctly placed, so we find the three and swap it into the correct position."
      />
      <CardSeq
        inds={[1, 2, 3, 4, 6, 5]}
        caption="Finding the four and swapping it into the correct position."
      />
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Finding the five and swapping it into the correct position. The six comes for free."
      />
      <p>If you came up with a different idea, that's great!</p>
      <p>
        This isn't actually necessary for our purposes, but let's pause and ask:
        How many swaps will this take? One for getting the ace into position —
        or none if it's already correctly placed. Same for the two through five.
        So that's at most five swaps — less if any of those cards were already
        correctly placed. It turns out that this method will always use the
        minimum (optimal) number of swaps — it's impossible to do better.
      </p>
      <p>
        This method, of swapping each card into place one at a time, is, as we
        just saw, extremely good. But for our ultimate goal of applying these
        techniques to a Rubik's Cube, there is a closely related method which
        will work better. In this method, instead of first finding the ace and
        swapping into the correct position, we will look in the ace's spot (the
        left-most spot) and swap that card to where it belongs. In other words,
        instead of first solving the ace, we first solve the card in the ace's
        spot. Instead of moving onto the two's spot and solving the card there,
        we can just keep going with the ace's spot until everything is solved.
      </p>
      <CardSeq
        inds={[3, 2, 6, 5, 1, 4]}
        caption="The same random arrangement as above."
      />
      <CardSeq
        inds={[6, 2, 3, 5, 1, 4]}
        caption="Seeing the three in the ace's spot and swapping it into the correct position."
      />
      <CardSeq
        inds={[4, 2, 3, 5, 1, 6]}
        caption="Seeing the six in the ace's spot and swapping it into the correct position."
      />
      <CardSeq
        inds={[5, 2, 3, 4, 1, 6]}
        caption="Seeing the four in the ace's spot and swapping it into the correct position."
      />
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Seeing the five in the ace's spot and swapping it into the correct position. The ace comes for free."
      />
      <p>
        If you try out a few examples on your own, you might run into some
        ambiguity. What if we swap the first card out of the ace's spot, and
        then the second card out of the ace's spot, but then the third card in
        the ace's position is the ace itself? Well if the rest of the cards
        happen to be correctly positioned already then that's great, we're done.
        But what if they aren't?
      </p>
      <CardSeq inds={[5, 1, 3, 6, 2, 4]} caption="A new random arrangement." />
      <CardSeq
        inds={[2, 1, 3, 6, 5, 4]}
        caption="Swapping the five into position."
      />
      <CardSeq
        inds={[1, 2, 3, 6, 5, 4]}
        caption="Swapping the two into position, which results in the ace being correctly placed before we're done."
      />
      <p>
        A natural inclination here is to just move on to the next spot which
        contains an incorrectly placed card (say the four's spot in the image
        above) and do the same things: repeatedly swap the card in the four's
        spot into the spot it belongs, until we eventually get the four. And
        this works just fine and is actually quite efficient just like the
        previous method we were looking at.
      </p>
      <CardSeq inds={[1, 2, 3, 6, 5, 4]} caption="Repeated from above." />
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Using the four's spot instead of the ace's spot: swap the six into position and get the four for free."
      />
      <p>
        However, we're going to go with a different way of dealing with this.
        When the ace gets into the ace's spot and there are still other cards
        incorrectly placed, we will pick any card which is incorrectly placed
        and swap the ace with that card. This seems a bit unproductive, since
        this swap hasn't put any cards in the correct place. (In fact, the ace
        is leaving it's spot, so we have less correctly placed cards now!).
        However, the ace's spot now contains an incorrectly placed card, and we
        can continue with the original strategy of dealing with whatever card is
        in the ace's spot. Once we eventually get the ace back into place,
        either all the cards are correctly placed, or we pick another
        incorrectly placed card and swap the ace with that.
      </p>
      <CardSeq
        inds={[5, 1, 3, 6, 2, 4]}
        caption="The same random arrangement as above."
      />
      <CardSeq
        inds={[2, 1, 3, 6, 5, 4]}
        caption="Swapping the five into position."
      />
      <CardSeq
        inds={[1, 2, 3, 6, 5, 4]}
        caption="Swapping the two into position, which results in the ace being correctly placed before we're done."
      />
      <CardSeq
        inds={[6, 2, 3, 1, 5, 4]}
        caption="Swapping the ace with any incorrectly placed card: the six, in the four's spot."
      />
      <CardSeq
        inds={[4, 2, 3, 1, 5, 6]}
        caption="Swapping the six into position as normal."
      />
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Swapping the four into position as normal, which returns the ace to the ace's spot."
      />
      <p>
        Alternatively, we could finish off by picking the four instead of the
        six. Both are equally valid options.
      </p>
      <CardSeq inds={[5, 1, 3, 6, 2, 4]} caption="The same." />
      <CardSeq inds={[2, 1, 3, 6, 5, 4]} caption="The same." />
      <CardSeq inds={[1, 2, 3, 6, 5, 4]} caption="The same." />
      <CardSeq
        inds={[4, 2, 3, 6, 5, 1]}
        caption="Swapping the ace with any incorrectly placed card: the four, in the six's spot."
      />
      <CardSeq
        inds={[6, 2, 3, 4, 5, 1]}
        caption="Swapping the four into position as normal."
      />
      <CardSeq
        inds={[1, 2, 3, 4, 5, 6]}
        caption="Swapping the six into position as normal, which returns the ace to the ace's spot."
      />
      <p>
        You may notice that this last two (nearly identical) solutions are
        actually more swaps than the previous solution. In general, we should
        expect this method to be slightly less efficient than the previous
        method. However, this is a trade-off that we're willing to make because
        of two main benefits, which we'll see shortly.
      </p>
      <p>
        The only thing left to discuss in this case study is the memorization.
        Recall that we aren't going to talk about memorization techniques here,
        or how to memorize anything — we'll just write things down. But the
        question then is what do we write down? And can we figure it all out
        without physically performing any swaps?
      </p>
      <CardSeq
        inds={[5, 1, 3, 6, 2, 4]}
        caption="The same random arrangement as above."
      />
      <p>
        Likely your first thought is to write down the sequence of swaps that
        will be made. Consider the above example (which we already solved
        earlier). First, we swap the ace's spot and the five's spot. After that,
        the five will be correctly placed, and the two will be in the ace's spot
        — and we know this without actually physically swapping any cards (but
        if you're having trouble seeing it, do the actual swaps). The next swap
        will be the ace's spot with the two's spot. Then the two will be
        correctly placed, as will the ace. Since the ace is correctly placed but
        we're not done, we need to select any card which is incorrectly placed
        and swap it with that. So let's say we swap the ace's spot with the
        four's spot. Now we know the six will be in the ace's position, so we
        next want to swap it with the six's spot. Then the six is placed
        correctly and the four is now in the ace's spot. So we want to swap the
        ace's spot with the four's spot. What's in the four's spot though? It's
        the ace, since we put it there with the swap right after the ace was
        correctly placed. So now everything is correctly placed (the three was
        correct the whole time). (Was that hard to follow? Keep reading, it gets
        much easier!)
      </p>
      <p>To summarize, we swapped the following spots:</p>
      <div>(A, 5), (A, 2), (A, 4), (A, 6), (A, 4)</div>
      <p>
        Notice that every swap involves the ace's spot (by design). So in fact,
        we really only need to write down the other spots:
      </p>
      <div>5, 2, 4, 6, 4</div>
      <p>
        The reasoning we walk through above is all about swaps and thinking
        about where cards will be. But — and this is where things get easier —
        we don't actually need to keep any of that in mind to get the answer
        above. We can just start by looking in the ace's spot. What do we see?
        The five. So next we go look at the five's spot. What do we see there?
        The two. So we go look at the two's spot, and see the ace. Since the ace
        is special, we go look for any other card we haven't seen yet, say in
        the four's spot. Looking in there, we see the six. Looking at the six's
        spot, we see the four, which is where we started. We have just read off
        the same sequence:
      </p>
      <div>5, 2, 4, 6, 4</div>
      <p>
        So that's how we get the sequence of numbers that we need to memorize —
        or in our case, write down. This is the main benefit (alluded to
        earlier) of the method we've arrived at: every swap involves the ace's
        spot, so we only need to keep track of the other half of the
        information. With a small amount of practice, it's not very difficult to
        read off this sequence of numbers from the initial cards without
        physically moving any (trust me, practice for 15-20 minutes and it will
        get significantly easier).
      </p>
      <p>
        And the second benefit alluded to is that it simplifies the execution
        phase, as there are less move sequences that we might be required to
        perform. But we're only talking about the execution phase when
        necessary, so we won't get into that here.
      </p>
      <h2>Transitioning from cards to a cube</h2>
      <p>
        Even if you don't see the appeal, and aren't entirely convinced that
        it's easy, hopefully you at least believe that the above 6-card game is
        not magic and that it's feasible for others to do (blindfolded). But
        that was just a deck of playing cards — not even a deck, only six cards
        — and a Rubik's Cube seems infinitely more complicated than that. So how
        can the concepts above possibly transfer over? (You don't need a cube
        for this next part, but it wouldn't hurt to have one on hand. Or use a{" "}
        <a
          href="https://alg.cubing.net/?view=fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          virtual cube
        </a>
        .)
      </p>
      <div className="image-row">
        <img className="small-img" src={solvedPhysical} alt="Solved cube" />
        <img className="small-img" src={solvedVirtual} alt="Solved cube" />
      </div>
      <p>
        Well, we need to make a few observations about Rubik's Cubes. Looking at
        a solved cube, it has six sides and each side has nine stickers of the
        same colour. Although it's not at all obvious, it turns out that
        thinking of the cube this way is not helpful. If we take a cube apart,
        we see it's actually made up of eight corner pieces, 12 edge pieces, and
        one central core with six center pieces attached to it.
      </p>
      <div className="image-row">
        <img className="small-img" src={somePieces} alt="Some pieces removed" />
        <img className="small-img" src={allPieces} alt="All pieces removed" />
        <img className="small-img" src={core} alt="The core" />
      </div>
      <p>
        The first important observation is that the core and the six center
        pieces never move relative to each other, they just spin around in
        place. This means that if we pick up any edge piece, say the
        yellow-green edge piece, then we know exactly where it needs to be
        relative to the core: between the yellow center and the green center.
        This also means that there is no green-blue edge: the green and blue
        centers are opposite each other, and so there's no way to have an edge
        piece touching both of them.
      </p>
      <div className="image-row">
        <img
          className="small-img"
          src={solvedEdge}
          alt="Edge which is solved"
        />
        <img
          className="small-img"
          src={unsolvedEdge}
          alt="Edge which is not solved"
        />
      </div>
      <p>
        (Note: The cubes shown in this article have the standard/most common
        colour-scheme, but of course some cubes may have different colour
        schemes. Maybe the blue center is next to the green center on your cube,
        or maybe there is another colour instead of green.)
      </p>
      <p>
        It's a similar story with the corners. If we pick up the
        white-orange-green corner, then by finding the white, orange, and green
        center pieces on the core, we can figure out exactly where the corner
        belongs. Corners and edges behave slightly differently (and have
        different amounts of stickers on them). But for our purposes, at this
        point, those differences are irrelevant — there isn't a significant
        conceptual difference between discussing corners and discussing edges.
        So for now, we will only speak of edges. Just remember that everything
        being discussed could equally well be applied to corners instead.
      </p>
      <p>
        The key observation here is that the playing cards are analogous to the
        edge pieces. We had six playing cards: they were laid out in a row, and
        each could be correctly placed or in any other spot. It's a similar
        story with our twelve edge pieces: there are twelve spots around the
        core where each edge can be, and each edge can be in the correct spot or
        in any other spot. The only catch is that an edge can be flipped — but
        we'll get to that later, so just ignore that for now.
      </p>
      <p>
        So how did we solve the playing cards problem? The ace's spot was
        special; we swapped the card in that spot with wherever it needed to be.
        This concept has a name: buffer. The ace's spot was our buffer. (The ace
        is therefore referred to as the buffer card, though the buffer is much
        more important than the buffer card.) So to apply the technique to the
        cube, we will need a buffer. Let's use the white-green edge's spot as
        our buffer, though any other spot would do just as well. (The
        white-green edge is therefore our buffer piece.)
      </p>
      <div className="image-row">
        <img
          className="small-img"
          src={scrambledVirtual}
          alt="Scrambled virtual cube"
        />
        <img
          className="small-img"
          src={inPlaceEdge}
          alt="Edge correctly placed"
        />
      </div>
      <p>
        So suppose now that we have a scrambled cube. (I strongly recommending
        visiting{" "}
        <a
          href="https://alg.cubing.net/?setup=D_L2_U_F2_R2_D2_L2_D_L2_U_B-_R-_D_L-_U-_R-_D2_U_B_L-_R2_B-_U2_L-_B-_D-&view=fullscreen"
          target="_blank"
          rel="noopener noreferrer"
        >
          this virtual cube
        </a>{" "}
        to see the scramble, as it allows you to drag it around and see all the
        sides.) Since the center pieces cannot move relative to each other,
        let's find the white and green centers. The spot between them is our
        buffer. In the cube pictured above, the red-green edge is in the buffer.
      </p>
      <p>
        How many edges are correctly placed? Drag the cube around in the link
        provided above. You should find that there is exactly one, namely the
        green-orange edge. This can be seen in the second image above.
      </p>
      <p>
        So how do we go about figuring out what to memorize? Well, let's just
        try to imitate what we did with the playing cards. With those, we looked
        at the card in the buffer, and that was the first thing we wrote down
        before going and looking in that card's spot. In this scramble, the
        red-green edge is in the buffer, so we want to start by writing down
        "red-green" and then going and looking at the red-green edges spot (the
        spot between the red center and the green center). Which edge is in the
        that spot?
      </p>
      <img className="large-img" src={seq2} alt="Red-green spot" />
      <p>
        The white-blue edge is there. So we write down the white-blue edge, and
        move on to looking at the white-blue spot. So far we have:
      </p>
      red-green, white-blue
      <p>
        We can do all this without thinking about swapping pieces around, but
        remember that that is the underlying concept which this method is based
        on. If we were to swap the buffer with the red-green spot and then swap
        the buffer with the white-blue spot, then the red-green and white-blue
        edges would be correctly placed on the cube, and the white-orange edge
        would be in the buffer.
      </p>
      <p>
        Continuing, we look at the white-blue spot (between the white center and
        blue center).
      </p>
      <img className="large-img" src={seq3} alt="Red-green spot" />
      <p>
        We find the white-orange piece, which we write down, then continue on to
        look at the spot between the white center and orange center. And so on.
        If we continue this process (which I strongly recommend you do on the
        virtual cube) then we eventually get to the red-yellow spot, at which
        point we see the white-green piece. The white-green piece leads us to
        the white-green spot, which is the buffer — we're back where we started.
      </p>
      <img className="large-img" src={seq8} alt="Red-green spot" />
      <p>
        Note that we don't want to write down the white-green piece at this
        point. That's likely confusing the first time you see it — if so, go
        back and revisit the card game in the previous section and notice how we
        never wrote down the ace in any of our sequences (remember, the ace is
        analogous to the white-green edge). Everything we write down in the list
        is really an instruction to swap that with the white-green spot, and it
        doesn't make sense to swap the white-green spot with itself!
      </p>
      <p>
        So far we should have written down the following sequence of edge
        pieces:
      </p>
      red-green, white-blue, white-orange, yellow-blue, yellow-orange, blue-red,
      red-yellow
      <p>
        Thinking in swaps, this means that we just swapped the buffer (which at
        that point contained the red-yellow edge) with the red-yellow spot
        (which contained the white-green piece). So the white-green piece is
        correctly placed, in the buffer. This is exactly analogous to the ace
        being correctly placed in the first spot.
      </p>
      <p>
        In the card game, at such a point, we selected any card which was
        incorrectly placed, and swapped the ace with that. So we need to find an
        edge piece which is still incorrectly placed. Let's take the white-red
        spot (which contains the orange-blue piece). We could just as easily
        pick the green-yellow spot or the orange-blue spot, but not the
        white-orange spot (because we had already dealt with it earlier in the
        list) nor the green-orange spot (because that edge was already correctly
        placed at the start).
      </p>
      <p>
        Continuing through, we go from white-red to orange-blue to green-yellow,
        finally back to white-red where we finish. Remember from the card game,
        whenever we swap the ace with an incorrectly placed card, we ultimately
        need to come back and finish off by swapping the ace back out of that
        spot.
      </p>
      <p>So the full sequence we write down is:</p>
      red-green, white-blue, white-orange, yellow-blue, yellow-orange, blue-red,
      red-yellow, white-red, orange-blue, green-yellow, white-red
      <p>
        As mentioned, we could have made different choices when we picked the
        white-red piece. So a different, but equally acceptable sequence (which
        differs only in the final four items) could be:
      </p>
      red-green, white-blue, white-orange, yellow-blue, yellow-orange, blue-red,
      red-yellow, green-yellow, white-red, orange-blue, green-yellow
      <p>
        This may seem tricky and confusing, but ideally at this point it
        shouldn't seem like magic. It's not inherently difficult, but does
        require a lot of practice to get used to it and to get to the point
        where one can do it comfortably and consistently without making
        mistakes.
      </p>
      <h2>Revsiting what it means to swap two pieces</h2>
      <p>
        There is a small catch here, one thing which we glossed over about the
        cube and which wasn't an issue with the playing cards. No, it's nothing
        particular to corners — remember that while we only discussed edges in
        the previous section, the same logic and reasoning independently applies
        to the corners. The issue is that an edge has two ways to be in the same
        position.
      </p>
      <div className="image-row">
        <img className="small-img" src={solvedEdge} alt="Solved edge" />
        <img className="small-img" src={flippedEdge} alt="Flipped edge" />
      </div>
      <p>
        In fact, there are two ways that we can swap the piece in the buffer
        with another piece. (If you're thinking that there are four ways, then
        you are in a sense correct, but the physical nature of the cube actually
        make the other two impossible — but that's a story for another time.)
        For example, there are two ways to swap the yellow-blue edge with the
        blue-orange edge shown below: the first image is the initial setup, and
        the next two images are the two possibilities.
      </p>
      <div className="image-row">
        <img className="small-img" src={preSwap} alt="Before swapping" />
        <img className="small-img" src={postSwap1} alt="Swap way 1" />
        <img className="small-img" src={postSwap2} alt="Swap way 2" />
      </div>
      <p>
        This isn't actually a problem — it just means that we need to be more
        careful about what we mean by swapping two pieces. You may notice that
        we have always referred to the buffer as the white-green spot, and never
        the green-white spot. This is very intentional, and is an important
        point. When we write the first item in the list as red-green (as in the
        previous section), we mean swap the white-green spot with the red-green
        spot so that the white sticker (of white-green) ends up where the red
        sticker (of red-green) was, and vice-versa (first image below). If we
        had instead written the first thing on the list as green-red, then that
        would be telling us to swap the white sticker (of white-green) with the
        green sticker (of green-red), which we can see is not the desired effect
        (second image below).
      </p>
      <div className="image-row">
        <img className="small-img" src={correctSwap} alt="Correct swap" />
        <img className="small-img" src={incorrectSwap} alt="Incorrect swap" />
      </div>
      <p>
        This may make the whole method seem more complicated and annoying, and
        it certainly does (at least at first), but hopefully you're still
        convinced that there is nothing magical or inexplicable about it — that
        somebody could, with enough practice, be able to do it.
      </p>
      <h2>Brief notes on the execution phase</h2>
      <p>
        As mentioned earlier, there are multiple different ways to go about the
        execution phase, but the memorization phase is relatively independent of
        which execution method we pick (which is why we are able to largely
        avoid talking about execution). But let's briefly think about it.
      </p>
      <p>
        If we have written down a list of swaps to make with the buffer, how
        would we execute that? Well, there are 11 edges besides the buffer, and
        as discussed there are two ways to swap with each edge, which means
        there are 22 possible swaps. (Similarly there are 7 non-buffer corners
        and three ways to swap each, for a total of 21 possible swaps). So if we
        somehow magically knew 22 different sequences of moves, one for each
        possible edge swap we might need to do, then we could just do the
        appropriate sequence of moves for each item on the list we wrote down.
      </p>
      <p>
        In a way, this sounds very complicated, because how could we possibly
        know and remember those move sequences. On the other hand, if you accept
        that it's possible to know those 22 move sequences, then it's actually
        quite simple: we just execute a pre-determined move sequence for each
        item in the list we write down, in order. Notice that this makes the
        execution phase relatively free of thinking. There's no need to keep a
        mental picture of what the cube looks like or keep track of where
        particular pieces are as they move around. Nor do we need to actively
        think about the rest of the list besides the item we are currently
        dealing with.
      </p>
      <p>
        Just like we are writing down our sequence of edges instead of
        memorizing them, we could write down instructions for how to perform
        these 22 move sequences ("Case green-red: spin the top a quarter turn
        clockwise, then the right side half the way around, ..."). With these
        two pieces of information (sequence of edge pieces for the specific
        scramble, and general list of 22 move sequences) written down in front
        of us, we could solve the cube — or at least, the edges — relatively
        easily.
      </p>
      <p>
        And this is almost exactly what the common beginner execution methods
        do: they know 22 pre-determined move sequences, and apply the
        appropriate one at each step. (More advanced execution methods deal with
        these swaps in pairs and actually do two at once, and there are
        intermediate methods in between. All very interesting, but not the focus
        of this article.)
      </p>
      <p>
        Now, there is again a small catch. It's actually impossible to swap two
        edges while leaving every other piece undisturbed. So it sounds like
        this was all for nothing. But fortunately, there is a work-around.
      </p>
      <p>
        What we will do is, every time we swap the buffer with another edge's
        spot, we will also swap two corner spots. The key point here is that
        while we will be swapping the buffer with a different edge spot every
        time, we will be swapping the exact same two corner spots every time. So
        after the first edge swap, two corners will be swapped from how there
        were originally. But after the second edge swap, they will be swapped
        back and it will be as if nothing ever happened, which is perfect. So in
        a sense, we don't even need to worry about this corner-swapping
        side-effect; everything will sort itself out even if we aren't aware of
        it.
      </p>
      <h2>Coming next: Parity</h2>
      <p>
        If you think about it for a while though, you may realize that there's a
        potential problem. What if we have to do an odd number of edge swaps —
        say 5 edges swaps? Then the two corners that we keep swapping back and
        forth will not end up back in their original positions. Unfortunately,
        this is possible. And in fact, it will happen (exactly) half of the
        time. This is known as 'having parity' in the cubing world, and is the
        focus of the next article in this series.
      </p>
      <p>
        The scramble we went through above actually has parity. If we do the
        sequence of edge swaps above then we'll end up with two corners (say the
        two corners on the top right) swapped. Comparing the corners on the two
        images here, we see that just those two have changed.
      </p>
      <div className="image-row">
        <img
          className="small-img"
          src={scrambledVirtual}
          alt="Scrambled cube"
        />
        <img
          className="small-img"
          src={solvedEdges}
          alt="Edge solved but two corners swapped"
        />
      </div>
      <p>
        In turns out that we can deal with this issue either in the execution
        phase or in the memorization phase — or a combination of both — and this
        is what makes things interesting. Of course, if you're willing to just
        give up on half of the scrambles and retry until you get one with an
        even number of swaps, then you can just stop here. But that wouldn't be
        very satisfying would it?
      </p>
      <p>
        Next article in this series:{" "}
        {/*
        <a href="TOD" target="_blank" rel="noopener noreferrer">
          title TBD, link TBD
        </a> */}
        TBD.
      </p>
      <h2>Acknowledgements</h2>
      <p>
        <a
          href="https://www.worldcubeassociation.org/persons/2006GARR01"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucas Garron
        </a>{" "}
        created the virtual cube linked to in this article.
      </p>
      <p>
        I almost certainly got the idea for using playing cards as a teaching
        tool from{" "}
        <a
          href="https://www.worldcubeassociation.org/persons/2012ARTH01?event=333bf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noah Arthurs
        </a>
        '{" "}
        <a
          href="https://youtu.be/JJWl-FDetWE"
          target="_blank"
          rel="noopener noreferrer"
        >
          video
        </a>{" "}
        in which he does the same thing. When writing this article, I hadn't
        watched this video since it originally came out, as far as remember.
        Note that this video is part two in a series of five videos.
      </p>
      <p>
        There are many other blindfolded solving tutorials (mostly videos, such
        as Noah's above) out there -- too many to individually list -- and many
        of them probably influenced my writing here. However, as far as I'm
        aware, virtually all of those are aimed at people who already know how
        to solve a cube, whereas my focus here was people who do not.
      </p>
    </>
  );
}

export default Content;
