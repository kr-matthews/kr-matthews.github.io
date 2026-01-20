import Link from "../../../components/common/Link";

import oneMove from "./assets/one-move.png";
import scrambled from "./assets/scrambled.png";
import scrambledOtherSide from "./assets/scrambled-other-side.png";
import after1 from "./assets/after-exec-1-corner.png";
import after2 from "./assets/after-exec-2-corners.png";
import afterAll from "./assets/after-exec-all-corners.png";
import ignoringParity from "./assets/ignoring-parity.png";
import afterAllBut2 from "./assets/after-solving-corners-except-2.png";
import solved from "./assets/solved.png";

export default function ParityInBlindfoldedSolving() {
  return (
    <>
      <h2>Previously</h2>
      <p>
        This is the second in a series of articles about solving Rubik's cubes
        blindfolded. In{" "}
        <Link to="../rubiks-cube-blindfolded">the first article</Link>, we
        examined some of the basics. Remember that there are two parts to
        solving a cube blindfolded: memorization, where you can look at the cube
        but not make any moves, and execution, where you can apply moves to the
        cube but can't see it. Importantly, these two phases are mostly
        independent - it doesn't matter how you plan on doing the execution, the
        core memorization technique is the same regardless. The memorization
        phase can itself be divided into two parts: figuring out what you need
        to remember, and how to actually remember it. For the most part, we only
        discussed the figuring out part of the memorizing phase, and didn't go
        into much detail about the how to remember it (we agreed to just write
        it down), nor the execution phase.
      </p>
      <p>
        We started by examining a simpler puzzle of just rearranging a row
        playing cards back into the correct order via swapping pairs of cards.
        Then we saw how the same method could be applied to solving cubes
        blindfolded, by thinking of the edges as a set of playing cards and the
        corners as a (separate) set of playing cards. The key was to look at our
        buffer position, and see what piece is there. Then look in the position
        of that piece, and see what piece is there. And so on, giving us a
        sequence of positions - each corresponding to a swap with the buffer
        position - which is what we ultimately need to remember (or, for our
        purposes, just write down). Each position/swap corresponds to a sequence
        of pre-memorized moves (physical turns of the cube) which will swap the
        buffer with the next position (but we didn't learn those move
        sequences).
      </p>
      <p>
        In jumping from the playing cards to the cube, there were a few small
        catches. First, the edge pieces have an orientation - there are two ways
        they can be in the same position. This turned out not to be a problem,
        we just needed to be careful to specify which sticker we're looking at -
        which is to say that saying green-white is different from saying
        white-green, for example. Second, it's not possible to swap just two
        edges without changing anything else. This was slightly more problematic
        - but we got around it by saying we can always swapping the same two
        corners back and forth each time we swap two edges. (And vice-versa:
        when solving corners, we can keep swapping the same two edges back and
        forth each time.) But the problem here is that there may be an odd
        number of edge swaps (and/or corner swaps) that we need to do. If this
        is the case, then when we finish solving the edges, two of the corners
        will be swapped from what we initially memorized, so the sequence of
        swaps which we wrote down for corners is no longer valid.
      </p>
      <p>
        This is where we left off. In this article, we'll see several ways to
        deal with this problem. Note that we'll get slightly more
        technical/detailed than the previous article. If you just want to be
        able to do a successful blindfolded solve, then you only need to read up
        until the first solution we lay out - it is the easiest (though also the
        least efficient).
      </p>
      <h2>Parity</h2>
      <p>
        The problem above - having an odd number of edge and/or corner swaps -
        is commonly known in blindfolded solving as 'having parity'. We've just
        seen why having parity is an issue. Now let's understand it better.
      </p>
      <p>
        The first thing to know is that the number of edge swaps and the number
        of corner swaps will always either both be even or both be odd. So if a
        scrambled cube has parity, that means that there are an odd number of
        edge swaps and an odd number of corner swaps. Otherwise, if it doesn't
        have parity, then there are an even number of edge swaps and an even
        number of corner swaps. It's not possible to have, for example, 11 edge
        swaps and 8 corner swaps.
      </p>
      <p>
        Actually, the first thing to know is that it doesn't matter what
        sequence of swaps you memorize. If you have two different sequences of
        edge swaps, both of which end up solving all the edges, then they will
        either both have even length or both have odd length. Which means that
        this concept of having parity is well-defined.
      </p>
      <p>
        To understand this better (this paragraph is more of a technical
        side-note, and is not necessary for what is to follow), note that any
        scrambled cube is achieved from a solved cube by applying a bunch of
        moves, each a quarter-turn of one of the 6 faces, one move at a time.
        Each individual move will move 4 edges around in a circle. Take the move
        pictured below for example. If we look at the buffer, which is the
        white-green position with the white-red edge, it needs to go to the
        white-red position. The edge in the white-red position needs to go to
        the white-blue position. And that one to the white-orange position,
        which finally is the buffer piece. That's a sequence of three swaps we
        would need to make in order to solve this 'scrambled' state - an odd
        number. And if you take a scramble which is two moves long, then that's
        an odd number of swaps (three) plus another odd number of swaps (three),
        which means it can be done in an even number of swaps (six). Which is to
        say that every time you do a quarter-turn move, the number of edge swaps
        required to solve it will change from even to odd or vice-versa. So if
        you have a cube which was scrambled with an even number of
        quarter-turns, then it won't have parity, and if it was scrambled with
        an odd number of quarter-turns, then it will have parity. The same
        analysis applies to the corners, and this actually shows why the number
        of edge swaps and corner swaps will always both be even or both be odd -
        they each depend only on how many quarter-turns were done.
      </p>
      <ImageRow>
        <Image src={oneMove} alt="One move applied to a solved cube" />
      </ImageRow>
      <p>
        In any case, the important thing to take away is that corners and edges
        are either both odd or both even - it doesn't actually matter <i>why</i>{" "}
        for our purposes.
      </p>
      <p>
        To reiterate the problem, whenever we have an odd number of edges swaps
        to do (and therefore also an odd number of corner swaps), then after
        doing all those edge swaps, the corners will <i>not</i> be in their
        original positions afterwards - two of them will have been swapped.
      </p>
      <h2>What exactly goes wrong</h2>
      <p>
        Up until now we've focused exclusively on the edges, always just noting
        that the exact same concepts apply to corners. Of course, to actually
        solve the cube blindfolded, you need to solve both sets of pieces. In
        the previous article, we used the white-green position as our (edge)
        buffer, but now we're going to use white-red instead. And for corners,
        we'll use the white-blue-orange position. Conceptually at this point,
        it's not too important <i>which</i> positions to use as the buffers, but
        these line up with the standard beginner execution methods so we'll use
        them for consistency. (More advanced execution methods often use
        different buffers, such as the white-green edge position, which is why I
        used that in the previous article.)
      </p>
      <p>
        Assume that we first memorize the corners, then memorize the edges, then
        don a blindfold, then solve the corners, and finally solve the edges
        (and then remove the blindfold). Assume also that each time we swap our
        edge buffer (white-red) with another piece, we also simultaneously swap
        the two top-right corners beside it (white-red-green and
        white-red-blue); and that each time we swap our corner buffer
        (white-blue-orange) with another corner, we simultaneously swap the
        edges on the top beside it (white-blue and white-orange). Let's take a
        concrete example and see exactly what goes wrong when we have parity if
        we just ignore it. Consider{" "}
        <Link
          isExternal
          href="https://alg.cubing.net/?type=reconstruction&setup=R2_F2_U_R2_D2_U_L2_U2_L2_B2_R2_U2_F-_L-_U-_L_B2_D-_U2&view=fullscreen"
        >
          this scramble
        </Link>
        , which has parity (it's the same picture from slightly different
        angles).
      </p>
      <ImageRow>
        <Image src={scrambledOtherSide} alt="text" />
        <Image src={scrambled} alt="text" />
      </ImageRow>
      <p>
        Reading out the sequence of corners (starting from white-blue-orange)
        gives:
      </p>
      <SwapList swaps="blue-yellow-orange, red-yellow-blue, white-red-blue, green-white-red, red-yellow-green, green-yellow-orange, white-orange-green" />
      <p>Reading out the sequence of edges (starting from white-red) gives:</p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, white-green, white-orange*, orange-blue, red-green, yellow-blue, white-orange" />
      <p>
        <i>
          *After white-green, we see the white-red piece, which is the buffer,
          so we ignore it (we can't swap the buffer with itself) and pick any
          other position which hasn't been solved - in this case we arbitrarily
          picked the white-orange position, which has the orange-blue edge
          piece. But we also could have picked the green-red position, for
          example, or any other unsolved edge that we hadn't listed yet.
        </i>
      </p>
      <p>
        Then we start the execution phase. Remember, the important thing to know
        here is just that there is a sequence of moves which swaps the pieces we
        want, but it's not important exactly what it is. After the first swap
        (the blue-yellow-orange corner), the two specific edges have been
        swapped (second picture - the solved corner is the one you can't see, in
        the bottom back left corner). After the second swap (the red-yellow-blue
        corner), those two edges have been swapped back (third picture - the
        second solved corner is the back bottom right, just barely visible), and
        all the edges are exactly how they started - but we've solved two
        corners. (First picture is the original scrambled state.)
      </p>
      <ImageRow>
        <Image src={scrambled} alt="text" />
        <Image src={after1} alt="text" />
        <Image src={after2} alt="text" />
      </ImageRow>
      <p>
        If we finish doing all of the corners which we wrote down above, which
        is an odd number of swaps to do, then we'll end up with this (on the
        right, compared to the original scramble on the left). Notice that the
        corners are all solved (as expected), and because we did an odd number
        of corner swaps, the two specified edges on top (on the left and at the
        back) are swapped from where they were originally (but all the other
        edges haven't moved).
      </p>
      <ImageRow>
        <Image src={scrambled} alt="text" />
        <Image src={afterAll} alt="text" />
      </ImageRow>
      <p>
        If we were to do all our edge swaps now, we'd end up with the picture
        below. Notice that since we did an odd number of edge swaps, the two
        corners on the top-right have ended up swapped. And most of the edges
        are solved - except the white-green and the blue-orange. This is because
        they were swapped before we started solving the edges (see the pictures
        above).
      </p>
      <ImageRow>
        <Image src={ignoringParity} alt="text" />
      </ImageRow>
      <h2>The easiest method</h2>
      <p>
        If you examine the example we just walked through, you'll notice that
        during corner execution, everything was more-or-less ok. Two edges were
        being swapped back and forth, so were 'wrong' half the time, but this
        didn't cause any problems during corner execution. The issue really
        began when we started edge execution and the edges were not all in the
        same places as when we had memorized them.
      </p>
      <p>
        The most naive solution might be to just try and swap the edges back
        into their original places after doing corner execution but before doing
        edge execution. And as it turns out, that works, if you do it right.
        Specifically, as part of edge execution, we'll first do a few specific
        edge swaps to get those two edges fixed, then continue with our original
        sequence of edge swaps which we wrote down above.
      </p>
      <p>
        Picking up from the middle of the previous section, just after solving
        corners the cube looked like this (again, compared to the original on
        the left):
      </p>
      <ImageRow>
        <Image src={scrambled} alt="text" />
        <Image src={afterAll} alt="text" />
      </ImageRow>
      <p>And we had this sequence of edges to execute:</p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, white-green, white-orange, orange-blue, red-green, yellow-blue, white-orange" />
      <p>
        To reiterate, the problem is that the pieces in the white-orange and
        white-blue positions are swapped from where they were in the original
        scrambled state. We can fix this by first swapping them, which we can
        achieve by adding white-orange, white-blue, and white-orange (again) to
        the front of the edge sequence above:
      </p>
      <SwapList swaps="white-orange, white-blue, white-orange, yellow-orange, red-blue, orange-green, green-yellow, blue-white, white-green, white-orange, orange-blue, red-green, yellow-blue, white-orange" />
      <p>
        It's that easy, just add these three swaps to the front. It doesn't
        matter what the edge sequence is, or what the corner sequence was, all
        you have to do is add white-orange, white-blue, white-orange to the
        front.
      </p>
      <p>
        (If the edge sequence already started with white-orange, this still
        perfectly fine. However, you might notice that in this special case
        there would be two consecutive swaps with white-orange. These would
        cancel each other out (if you do the same swap twice in a row,
        everything goes back to where it started). So in this case, you would
        get to skip two swaps. But if you don't want to think about that, it's
        fine, blindly doing those three swaps regardless will work fine just,
        even if it's inefficient (pun intended).)
      </p>
      <p>
        After doing those first three swaps, all the edges will be back where we
        expect them to be (where they were in the original scrambled cube). The
        corners won't quite be solved any more, because two of them are swapped
        (we just swapped them 3 times while doing those 3 extra edge swaps).
      </p>
      <ImageRow>
        <Image src={afterAllBut2} alt="text" />
      </ImageRow>
      <p>
        But each time we do a swap in our edge sequence, those two corners will
        swap back and forth. And because we have parity, the edge sequence has
        an odd length, so when we get to the end the two corners will be swapped
        back into place and all 8 corners will be solved. In fact the cube will
        be solved, because we just did all the edge swaps.
      </p>
      <ImageRow>
        <Image src={solved} alt="text" />
      </ImageRow>
      <p>
        Conceptually, this can sound complicated, and there's a lot to keep
        track of when thinking through the process. But remember, you don't need
        to actually think about (or even understand) <i>why</i> any of this
        works when you're solving the cube blindfolded. All you need to
        remember/do is: if you have parity (an odd number of corner targets)
        then after executing corners but before executing edges, do these three
        extra edge swaps: white-orange, white-blue, white-orange. It's that
        simple.
      </p>
      <p>
        Now, this has been assuming that you first execute the corners, and then
        execute the edges. If you do the opposite order, then a similar fix
        works where you add three corner swaps between edges and corners, namely
        white-green-red, white-red-blue, white-green-red.
      </p>
      <h2>A simple improvement</h2>
      <p>
        The above method is relatively simple to put into practice - if you
        don't have parity, then there's nothing to worry about, and if you do
        have parity, then just do three extra swaps (the same three swaps,
        regardless of the scrambled state) between corners and edges. The only
        (very slight) downside is that it requires physically doing three extra
        swaps, which takes more time/moves. On average you'll be doing about 20
        or so swaps when solving a cube blindfolded, so adding three more
        doesn't really make a huge difference. But if you're trying to get
        faster, or are just interested in the theory, then it would be nice to
        avoid adding this many extra swaps. And it turns out, it is possible to
        do better with a similar strategy.
      </p>
      <p>
        Remember, the original issue was that, after executing corners, two of
        the edges were swapped from where they had been in the original
        scrambled state. Well, what if during memorization, we just pretended
        that they were swapped while reading off the sequence of edge swaps?
        Like many of the concepts we've discussed already, this might sound
        complicated, and take a while to wrap your head around. But trust me, if
        you forget about the why, and just remember what you need to do, then
        with a bit of practice it becomes second nature, and is something that
        you can do automatically with little thought.
      </p>
      <p>
        So how does this work in practice? Looking back at the original
        scrambled state (the left picture), when memorizing the edges we need to{" "}
        <i>pretend</i> that the edges in the white-orange and white-blue
        positions are swapped (the right picture - ignore that the corners are
        solved).
      </p>
      <ImageRow>
        <Image src={scrambled} alt="text" />
        <Image src={afterAll} alt="text" />
      </ImageRow>
      <p>In the previous section, when reading off the edge sequence we got</p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, white-green, white-orange, orange-blue, red-green, yellow-blue, white-orange" />
      <p>
        This time, the start will still be the same, up until we look in the
        green-yellow position and see the blue-white edge.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white" />
      <p>
        Since we're pretending that edges in the white-orange and white-blue
        positions are swapped, we actually want to look at the orange-white
        position next instead of the blue-white position. We see the blue-orange
        edge, and continue from there as normal, by looking in the blue-orange
        position, and so on, until we eventually look in the blue-yellow
        position and see the orange-white edge.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, blue-orange, green-red, blue-yellow, orange-white" />
      <p>
        Now we actually want to look at the blue-white position instead of the
        orange-white position. We see the white-green edge, so look in the
        white-green position next, where we see the white-red edge. Since this
        is the buffer, we're done (and don't need to add it to the swap list).
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, blue-orange, green-red, blue-yellow, orange-white, white-green" />
      <p>
        There are a few things to notice here. The first is that this sequence
        has an even number of swaps (10, to be precise). Earlier we said that if
        a scrambled state has parity, then both corners and edges will have an
        odd number of swaps. The reason we're getting an even number is because
        we're pretending that two of the edges are swapped. If we had a
        different scrambled state which had the edges in those pretend
        positions, then it wouldn't have parity. Again, if that's confusing,
        that's fine, the bottom line is that you don't actually need to
        understand or think about why this works. All you need to do is read off
        the sequence in the memorization phase, and execute it in the execution
        phase.
      </p>
      <p>
        Second, the new sequence of edge swaps is similar in some ways to the
        original one from the previous section (repeated below this paragraph
        for easy comparison). They share the same beginning (yellow-orange,
        red-blue, orange-green, green-yellow, blue-white). But in the original
        one we reached the buffer piece early and had to (arbitrarily) pick the
        white-orange position to start swapping again, whereas in the new one we
        didn't reach the buffer piece until the very end when every other piece
        had already been accounted for. Also, the differing ends have the same
        edges, but sometimes written in reverse (e.g. white-orange vs
        orange-white), and the relative order is mostly the same (e.g.
        blue-yellow/yellow-blue comes after green-red/red-green in both cases).
        None of these observations is important, but they are interesting to
        note.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, white-green, white-orange, orange-blue, red-green, yellow-blue, white-orange" />
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, blue-orange, green-red, blue-yellow, orange-white, white-green" />
      <p>
        Now, one motivating factor for this was to avoid adding three extra
        swap, and in this case that worked - the original sequence had 11 swaps,
        plus the three extra swaps we would need to do in execution, whereas
        this new sequence has 10 swaps, and we don't need to do any extra swaps,
        so that's four fewer swaps. Usually this is the case and it works out
        better (two or four fewer swaps), but occasionally it will be the same
        number of swaps. (It is possible to do the math and work out how common
        each case is, if you know some basic combinatorics.)
      </p>
      <p>
        So, this is (on average) a more efficient approach than the first
        method.
      </p>
      <h2>Taking speed into account</h2>
      <p>
        The only caveat in the previous section, which you may have noticed, is
        that when reading off the edge sequence, we need to already know whether
        the cube has parity. This is because we only want to pretend those two
        edges are swapped if the cube does indeed have parity. If it doesn't
        have parity, then the after executing corners the edges will still be in
        the same original positions, and there's no extra swap to account for.
      </p>
      <p>
        This is easy to resolve, all you need to do is read off the corner
        sequence first. If it has an even number of swaps, then there's no
        parity and you can read off the edge sequence as normal. If it has an
        odd number of swaps, then you have parity and you need to pretend the
        two edges are swapped while reading off the edge sequence.
      </p>
      <p>
        However, this means that you need to memorize corners before you
        memorize edges, and you need to execute corners before you execute
        edges. (Or there's an analogous approach where you do the opposite and
        pretend two corners are swapped, in which case you need to memorize
        edges before you memorize corners, and you need to execute edges before
        you execute corners.) But you can't, for example, memorize edges, then
        memorize corners, then execute corners, and then execute edges. This is
        because you won't know whether you have parity until after you memorize
        edges, which means you could only do the pretend swap while memorizing
        the corners, but then if you execute corners first, the two corners
        wouldn't actually be swapped yet (they're only swapped after you execute
        edges).
      </p>
      <p>
        This may not seem like a big deal, and it isn't if you just want to be
        able to get a success. But if you want to get faster, it's helpful to
        put the first things that you memorize into long(er)-term visual or
        sentence-based memory and the second thing into short-term audio memory.
        This allows you to execute the short-term memory right away, then return
        to the first thing you memorized in longer-term memory. And the more
        things that you can put into the shorter-term memory the better. So,
        since there are (almost always) more edge swaps than corner swaps, the
        most efficient method (from a memorization viewpoint at least) is to
        memorize corners first and edges second, then execute edges first and
        corners second. How can we handle parity if we want this
        memorization/execution order?
      </p>
      <p>
        If we look back at the above two methods for handling parity, the second
        won't work, as we just discussed (the order is wrong). The first will
        work, but adding those three extra swaps in execution will cancel out
        any speed benefits we get from putting edges in short-term memory. Is
        there a better way? This is a good time to stop and think.
      </p>
      <p>
        Like many of the ideas in this and the previous article, the solution
        can be very hard to come up with if you haven't seen it before, but
        turns out to be a simple modification of a prior idea. In the previous
        method, we handled the extra swapped corners after executing our corner
        sequence. What if we did it <i>before</i> executing the corner sequence?
        That would mean that instead of solving the corners and then swapping
        two of them, leaving us in a state where all but two of the corners are
        solved and all of the edges are untouched, we could preemptively solve
        the corners directly into this state. That is, when we see the
        white-red-blue corner, we immediately put it in the white-green-red
        position (if the scramble has parity), and vice-versa. Rather than
        putting them into their solved positions and then swapping them later.
      </p>
      <p>
        Ok but we since we need to first memorize corners, then memorize edges,
        then solve edges, and finally solve corners (corners -{">"} edges -{">"}{" "}
        edges -{">"} corners, as opposed to edges -{">"} corners -{">"} corners
        -{">"} edges), we'll actually need to to this with edges instead of
        corners. (Sorry, I know it's confusing to jump around like this, but
        again if you forget the <i>why</i> and just look at the thing you need
        to do at the end of the day, it won't be that hard.) That is, when
        memorizing the edges, instead of memorizing a sequence which will solve
        them, we'll memorize a sequence which will result in the white-orange
        and white-blue edges being swapped. Ultimately, this means that in the
        scrambled state, we're going to pretend that the white-orange and
        white-blue pieces (which, in our example, are in the yellow-blue and
        yellow-green positions respectively) are swapped. Compare this to the
        previous method, where we pretended that the edges in the white-orange
        and white-blue positions (which, in our example, are the orange-blue and
        green-white edges respectively) are swapped. Instead of pretending that
        the edges which <i>are</i> in those two positions are swapped, we're
        pretending that the edges which <i>belong</i> in those two positions are
        swapped. Conceptually a little harder maybe, but once you practice and
        get used to it, it's actually equally easy.
      </p>
      <p>In the previous section, we got the following sequence.</p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, blue-orange, green-red, blue-yellow, orange-white, white-green" />
      <p>
        Again, we start the same, up until we look in the green-yellow position.
        Again, we see the blue-white edge, but this time, we're pretending that
        it's swapped with the orange-white edge, so we're going to add
        orange-white to the sequence next.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, orange-white" />
      <p>
        And then we'll look in the orange-white position and see blue-orange. We
        then continue as normal until we look in the blue-yellow position.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, orange-white, blue-orange, green-red, blue-yellow" />
      <p>
        It has the orange-white edge, but we're pretending it's swapped with the
        blue-white edge, so we add blue-white to the sequence. Finally, looking
        at the blue-white position we see the white-green edge, so we add that.
        Since the white-green position has the (white-red) buffer, we're done.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, orange-white, blue-orange, green-red, blue-yellow, blue-white, white-green" />
      <p>
        Notice that this sequence and the sequence from the previous section are
        nearly identical.
      </p>
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, blue-white, blue-orange, green-red, blue-yellow, orange-white, white-green" />
      <SwapList swaps="yellow-orange, red-blue, orange-green, green-yellow, orange-white, blue-orange, green-red, blue-yellow, blue-white, white-green" />
      <p>
        The only difference is that blue-white and orange-white have been
        swapped, everything else is the exact same. These two methods trace out
        the same path over the cube, but what you write down has a subtle
        difference. (Unlike the comparison between the first and second methods,
        where the first halves of the sequences were identical and then the
        second halves were different but had similarities.) Unfortunately this
        makes it easy to mix up these two methods and accidentally do one when
        you're trying to do the other. But again, as I've said many times, if
        you pick one method and stick to it without worrying about why it works,
        and without thinking about any of the other methods, it's actually
        pretty easy with a bit of practice.
      </p>
      <p>
        One advantage of this method (and the previous one) is that you don't
        need to think about parity at all during the execution phase. You took
        care of everything in the memorization phase, then just go through the
        list of swaps you've got during execution without any adjustments or
        additions.
      </p>
      <p>
        This technique, of pretending that two specific pieces are swapped, is
        called "The Swap" in the cubing community.
      </p>
      <h2>Next time</h2>
      <p>
        This technique (The Swap) works quite well and is used by a lot of fast
        people (in conjunction with various other optimizations, such as
        floating buffers for example, which I won't talk about here). However,
        there is another event called multiple-blindfolded where you memorize
        several cubes then don a blindfold and execute them all in a row. In
        this event, it's very beneficial to memorize and execute in the same
        order, which is to say that corners -{">"} edges -{">"} edges -{">"}{" "}
        corners won't work well, we actually want to go back to edges -{">"}{" "}
        corners -{">"} edges -{">"} corners. Which means The Swap won't work. We
        could go back to the first method, but it turns out there's a better
        method that doesn't require adding three extra swaps. It's called Weak
        Swap, and Graham Siggins and I came up with it together. But that's for
        the next article.
      </p>
      <p>
        Next article in this series:{" "}
        {/* <Link to="../weak-swap">Weak Swap</Link> */}
        TBD.
      </p>
      <h2>Conclusion</h2>
      <p>
        The first article covered the basic core concepts of what to memorize if
        you want to solve a cube blindfolded. This article covered a few ways to
        handle the problem of parity, which happens (exactly) half of the time.
        I tried to explain and motivate everything, which got complicated at
        times, but ultimately if you want to put it into practice, it just boils
        down to a few simple things.
      </p>
      <p>
        If you want the simplest, easiest method, then all you need to do is
        memorize corners and edges in either order, then execute corners, then
        (if there's parity) do three specific extra swaps, then execute edges.
        This makes the memorization phase easy, you don't need to think about
        parity there, but you do need to briefly think about it in execution.
      </p>
      <p>
        If you want a method that is reasonably efficient and will be helpful
        for getting faster, then you need to memorize corners, then memorize
        edges (and if there's parity, pretend that two specific edges are
        swapped while reading off the sequence to memorize), then execute edges,
        then execute corners. This makes the execution phase easy, you don't
        need to think about parity there, but you do need to think about it in
        edge memorization. Which is the opposite of the simplest method.
      </p>
      <p>
        One of the core points of this article is to convince you that it's
        possible to do this, and not nearly as hard as you think. Hopefully
        those previous two paragraphs summarizing everything can at least
        convince you that it's not terribly difficult to put into practice, even
        if the explanations of <i>why</i> they work and <i>how</i> you might
        come up with them are confusing at times.
      </p>
      <h2>Acknowledgements</h2>
      <p>
        <Link
          isExternal
          href="https://www.worldcubeassociation.org/persons/2006GARR01"
        >
          Lucas Garron
        </Link>{" "}
        created the{" "}
        <Link
          isExternal
          href="https://alg.cubing.net/?type=reconstruction&view=fullscreen"
        >
          virtual cube
        </Link>{" "}
        linked to in this article.
      </p>
    </>
  );
}

// https://alg.cubing.net/?type=reconstruction&setup=R2_F2_U_R2_D2_U_L2_U2_L2_B2_R2_U2_F-_L-_U-_L_B2_D-_U2&alg=D2_R_%0AR2-_D-_R2_U_R2-_U-_R2_D_R2-_U-_R2_U_R2-_U_R2_%0AR-_D2%0A%0AD-_R_%0AR2-_D-_R2_U_R2-_U-_R2_D_R2-_U-_R2_U_R2-_U_R2_%0AR-_D%0A%0AB-_U-_B-_D-_B_U_B-_D_B2%0A%0AU2_R_U_R-_D_R_U-_R-_D-_U2%0A%0AF-_D_R%0AR2-_D-_R2_U_R2-_U-_R2_D_R2-_U-_R2_U_R2-_U_R2_%0AR-_D-_F%0A%0AR2-_D-_R2_U_R2-_U-_R2_D_R2-_U-_R2_U_R2-_U_R2%0A%0AR-_F_R-_B2_R_F-_R-_B2_R2%0A%0A%2F%2F%0A%0AU-_B_U_S2_U-_B-_U_S2%0AM-_U-_R-_E_R_U_R-_E-_R_M%0ARw-_U-_R_U_M-_U-_R-_U_R%0AR_E-_R-_U2_R_E_R-_U2%0AU_M_U_R_U-_M2_U_R-_U-_M_U-%0AR_U_R-_U-_R-_F_R2_U-_R-_U-_R_U_R-_F-

const ImageRow = ({ children }) => <div className="image-row">{children}</div>;

const Image = ({ src, alt }) => (
  <img className="small-img" src={src} alt={alt} />
);

const SwapList = ({ swaps }) => (
  <pre>
    <code>{swaps}</code>
  </pre>
);
