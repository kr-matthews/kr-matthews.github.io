export default function TestingReactHooks() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        Plenty of articles and tutorials go on about how testing is good and
        important and you should be in the habit of doing it. But it's easy,
        especially in personal projects, to not bother with it. The best way to
        encourage yourself to do something you want to do but aren't doing is,
        in my experience, to remove all the friction. In this case, not knowing
        or understanding how to test properly can be the main source of
        friction.
      </p>
      <p>
        In my own projects, when I tried to test my code, there were many things
        I didn't understand. And when I tried looking them up, guides were
        incomplete or didn't address my particular issue/concern (though maybe I
        just didn't know the right search terms). In what follows, I've tried to
        lay out everything that I needed to understand in order to
        (more-or-less) properly incorporate tests for React hooks into my
        personal projects. This includes the basics as well as some of the less
        intuitive aspects. And I've done it through the lense of test-driven
        development.
      </p>
      <p>
        The primary purpose here is to confirm/solidify my own understanding,
        and to have a good reference if I ever forget anything -- since, as I
        mentioned, I struggled to find helpful resources for many specific
        problems. But if someone else gets use out of it then that's great too.
      </p>
      <h2>Test-Driven Development</h2>
      <p>
        Test-driven development is, as far as I understand it, the process of
        figuring out what you want to build and how it should behave, codifying
        that into tests, and only then writing the actual code via iteration
        until all the tests pass.
      </p>
      <p>
        There are several advantages to this over first coding and then writing
        tests (or over not writing tests at all!). First, it helps you get a
        clear picture of what you're trying to achieve -- which can be
        especially helpful when collaborating with other people. If you can't
        describe how it will technically behave then you probably need to work
        on resolving that before you start coding it. Second, you won't be
        biased by the way you implemented the code and the edge cases you had to
        explicitly deal with in the process; it's as if you're testing someone
        else's code -- future you.
      </p>
      <p>
        Since we're focusing on custom hooks in React, let's consider the
        example of a tic-tac-toe game -- just for the purposes of having
        something concrete to refer to. The game itself can be a custom hook: it
        has some state, and you can perform actions on it. You might be tempted
        to nail down exactly what context the game will be used in -- is it for
        2 users, or is the (single) user playing against a computer player; in
        the former case, are they playing on the same screen or playing
        remotely; and so on -- but that's not really the concern of the game
        hook. The game hook should ideally be reusable in any of these
        situations (and more) with ease.
      </p>
      <p>
        The three main things to consider for a hook are, in my experience: what
        parameters it needs; what data (constants) it will return to be
        observed; and what actions (functions) it will provide to manipulate it.
        With these things clearly defined -- and a basic understanding of how
        tests work -- it will be relatively simple to start writing some tests
        which call the hook (with the parameters), do some actions with the hook
        (via the returned functions), and check that the data (returned
        constants) have the values that you would expect after those actions.
        (There can be more to it than that, but we'll get to it later.)
      </p>
      <p>
        What does the game need to know? Well in our particular case, any game
        of tic-tac-toe has two players, say 0 and 1. We could assume that player
        0 goes first every time and the code which is using the game hook needs
        to work around that assumption, but it seems nicer to deal with that in
        the hook and provide more flexibility to the code using the hook. So the
        game needs to know which player is going first -- call that{" "}
        <code>firstToPlay</code>.
      </p>
      <p>
        I can't think of anything else at the moment. If there's something we
        missed, we can add it in later. You might think that the player names
        (and maybe the pieces (Xs and Os) or player colours) would be important
        -- but that's all cosmetic and should be taken care of by the UI of
        whatever code is using the game hook. We're only concerned with the
        functionality of the game in the hook itself.
      </p>
      <p>
        What about data to return? We certainly need to know the state of the
        board -- who has played in what positions, and which positions are
        empty. Call that <code>board</code>. There's a decision to be made here:
        should this be returned as a 1-dimensional array, or a 2-dimensional
        array? Or something else? There are two aspects to consider. First, what
        would be easiest to work with for the code which will be using this game
        hook? In our case, it's probably displaying the board, and maybe also
        analyzing the board. A 2-dimensional array is probably best. In general,
        if there's a clear answer here, then it's probably best to go with that.
        If not, consider what is easiest to work with inside the game hook
        itself. If the answer to these two questions is different, you can just
        use the format which is easiest to implement inside the hook, and then
        transform it into the easier format to work with outside the hook before
        returning it. Then only reason this is worth thinking about is because
        it will be relevant for writing tests -- you'll need to know the format
        of the data.
      </p>
      <p>
        Still on the returned data, we also need to know whose turn it is to
        play next -- call that <code>nextToPlay</code>. Technically, this can be
        calculated from the board together with who went first, so the hook
        doesn't <em>need</em> to explicitly return it. But the point of creating
        a custom hook is to make it easy and simple for other code to use it. So
        it makes sense to return this. Likewise, we can return the result or
        status of the current game -- ongoing vs draw vs player 1 won vs player
        2 won. Call this <code>status</code>. You could instead split this into
        status -- ongoing vs over -- and result -- draw vs player 1 won vs
        player 2 won -- if you wanted.
      </p>
      <p>
        That seems like all the data we would need. As far as actions go, we
        need a way for the next player to select a position to play in. This is
        of course a function, say <code>play</code>, with parameters to specify
        the row and column. Calling it will make the game hook place the piece
        of player <code>nextToPlay</code> in that position (and of course will
        update the other values, including <code>nextToPlay</code> and{" "}
        <code>status</code>, as necessary). Finally, we probably want a function
        to reset the game, say <code>reset</code>.
      </p>
      <p>
        This isn't the only way to do things, nor is it necessarily the best.
        But it seems pretty reasonable to me.
      </p>
      <h2>The Basics of Testing Hooks</h2>
      <p>
        Now we're in a position to think about writing the actual tests. Suppose
        the custom hook will be in the file <code>useGame.js</code>. Quickly set
        up an exportable <code>useGame</code> hook (function) which takes no
        parameters and returns an empty object. Then create{" "}
        <code>useGame.test.js</code> and import the <code>useGame</code> hook.
      </p>
      <p>
        The most basic thing to test might be that the hook starts off as
        expected when it's initially called, before any actions are taken. In
        this case, that would mean checking that it returns the constants and
        functions which we mentioned above: <code>board</code>,{" "}
        <code>nextToPlay</code>, <code>status</code>, <code>play</code>, and{" "}
        <code>reset</code>. As with almost any type of test, we can do this with{" "}
        <code>test</code> and <code>expect</code> in the test file as follows:
      </p>
      <pre>
        <code>
          {'test("initial state", () => {\n'}
          {'  expect(game).toHaveProperty("board");\n'}
          {'  expect(game).toHaveProperty("nextToPlay");\n'}
          {'  expect(game).toHaveProperty("status");\n'}
          {'  expect(game).toHaveProperty("play");\n'}
          {'  expect(game).toHaveProperty("reset");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        Note that the test starts with a description. I believe that you can
        also check that each of these properties has the correct type (for
        example, check that the last two are functions) with additional expect
        statements.
      </p>
      <p>
        If you try running this (in the terminal via <code>npm test</code>), it
        won't work unless you've defined <code>game</code>. If you try defining
        it via <code>const game = useGame()</code>, either before the test or at
        the start of the test, React will complain that you can't call a hook
        outside of a component. This suggests that creating a dummy component
        purely for the purposes of testing the hook might be the way to go. You
        can certainly do that, and it might be best in some situations. But it
        does involve extra work, and if you make mistakes in that dummy
        component then the tests will fail even if the hook is working properly,
        which can be annoying to figure out. Instead, we can use a testing
        library to "render" the hook without a component.
      </p>
      <pre>
        <code>
          {'import { renderHook } from "@testing-library/react-hooks";'}
        </code>
      </pre>
      <p>
        At the start of the test, we can use this to call the hook. However,
        this won't just return the return value of the hook like an ordinary
        call -- it will return an object of which the hook's return value is
        just one property (called <code>result</code>).
      </p>
      <pre>
        <code>
          {'test("initial state", () => {\n'}
          {"  const game = renderHook(() => useGame()).result;\n"}
          {'  expect(game).toHaveProperty("board");\n'}
          {'  expect(game).toHaveProperty("nextToPlay");\n'}
          {'  expect(game).toHaveProperty("status");\n'}
          {'  expect(game).toHaveProperty("play");\n'}
          {'  expect(game).toHaveProperty("reset");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        This should work now, in the sense that the test will run (although
        disclaimer: I haven't directly run any of the code from this post -- I'm
        not being paid enough to do that). It will of course fail, since our
        current implementation of the hook simply returns an empty object which
        doesn't (yet) have these properties.
      </p>
      <p>
        There are a couple of things worth mentioning at this point. First, if
        we have multiple tests (which we will), then it can be useful to group
        them together into sets of tests. This can be accomplished via{" "}
        <code>describe</code>, and it can help to more quickly identify at a
        glance what parts of the hook aren't working when tests start failing.
        (We won't use them much in this post though, for simplicity of
        examples.)
      </p>
      <pre>
        <code>
          {'describe("a set of tests", () => {\n'}
          {'  test("first test in the set", () => {\n'}
          {"    const game = [...];\n"}
          {"    expect(game)[...]);\n"}
          {"  });\n"}
          {'  test("second test in the set", () => {\n'}
          {"    const game = [...];\n"}
          {"    expect(game)[...]);\n"}
          {"  });\n"}
          {"});\n"}
          {"\n"}
          {'describe("another set of tests", () => {\n'}
          {'  test("first test in the (second) set", () => {\n'}
          {"    const game = [...];\n"}
          {"    expect(game)[...]);\n"}
          {"  });\n"}
          {'  test("second test in the (second) set", () => {\n'}
          {"    const game = [...];\n"}
          {"    expect(game)[...]);\n"}
          {"  });\n"}
          {"});"}
        </code>
      </pre>
      <p>
        You can even have nested <code>describe</code>s.
      </p>
      <p>
        Second, there is some redundancy here, as we're calling the hook at the
        start of every test. If the hook gets an update later -- maybe it will
        require an extra or a changed parameter -- then it will need to be
        updated at the start of every single test. A better approach is to use{" "}
        <code>beforeEach</code>.
      </p>
      <pre>
        <code>
          {"let game;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  game = renderHook(() => useGame()).result;\n"}
          {"});\n"}
          {"\n"}
          {'describe("a set of tests", () => {\n'}
          {'  test("first test in the set", () => {\n'}
          {"    expect(game)[...]);\n"}
          {"  });\n"}
          {"  [...]\n"}
          {"});\n"}
          {"[...]"}
        </code>
      </pre>
      <p>
        Now we should probably add the necessary parameters when we render the
        hook, and while we're at it let's improve the initial state tests to
        check that the data is correct. Again, this test will fail since we
        haven't implemented the hook properly yet, but it should run without
        error.
      </p>
      <pre>
        <code>
          {"let firstToPlay = 1;\n"}
          {"let game;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  game = renderHook(() => useGame(firstToPlay)).result;\n"}
          {"});\n"}
          {"\n"}
          {'test("initial state", () => {\n'}
          {'  expect(game).toHaveProperty("board");\n'}
          {'  expect(game).toHaveProperty("nextToPlay");\n'}
          {"  expect(game.nextToPlay).toBe(firstToPlay);\n"}
          {'  expect(game).toHaveProperty("status");\n'}
          {'  expect(game.status).toHaveProperty("ongoing");\n'}
          {'  expect(game).toHaveProperty("play");\n'}
          {'  expect(game).toHaveProperty("reset");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        (We should also check that the board state is correct, but I've omitted
        that to stay focused on the testing itself.)
      </p>
      <h2>Testing Hook Actions</h2>
      <p>
        Now let's move beyond just the initial state in our tests. Tic-tac-toe
        is relatively simple, basically all you can do is play pieces and reset
        the board. So let's try placing a piece.
      </p>
      <pre>
        <code>
          {"// imports, beforeEach, etc. go here\n"}
          {"\n"}
          {'test("making a move", () => {\n'}
          {"  game.play(1, 1); // playing in the center\n"}
          {"  expect(game.board[1][1]).toBe(firstToPlay);\n"}
          {"  expect(game.nextToPlay).toBe(1 - firstToPlay);\n"}
          {'  expect(game.status).toHaveProperty("ongoing");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        I've made the assumption that the board will be a 2-dimensional array,
        with null if nobody has played there, and the index of the player who
        has played there otherwise. This isn't the only way to do it, as
        discussed above. Given this, it would make sense to add more{" "}
        <code>expect</code> statements to check that the other positions are
        null -- both here and in the initial state test. As mentioned above,
        I'll omit all that for simplicity.
      </p>
      <p>
        Unfortunately, this won't pass, and not just because we haven't
        implemented the hook yet. Even if the hook were functioning properly,
        this test would fail, and there would be a warning. Basically, anything
        that updates the state of the hook needs to be wrapped in{" "}
        <code>act</code>, otherwise <code>renderHook</code> won't know to
        trigger a re-render. Add that to the import along with{" "}
        <code>renderHook</code> and wrap it around the action.
      </p>
      <pre>
        <code>
          {'import { renderHook, act } from "@testing-library/react-hooks";\n'}
          {"\n"}
          {"// beforeEach, etc. here\n"}
          {"\n"}
          {'test("making a move", () => {\n'}
          {"  act(() => game.play(1, 1)); // playing in the center\n"}
          {"  expect(game.board[1][1]).toBe(firstToPlay);\n"}
          {"  expect(game.nextToPlay).toBe(1 - firstToPlay);\n"}
          {'  expect(game.status).toHaveProperty("ongoing");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        But this actually <em>still</em> wouldn't pass even if the hook were
        functioning properly. This is because when you use <code>act</code> and
        change the state inside the hook, it re-renders itself and returns a{" "}
        <em>new</em> <code>result</code> property, while the above is still
        using the <em>original</em> rendering's <code>result</code> property.
        The fix here is to define <code>game</code> to be the whole object
        returned by <code>renderHook</code> (instead of extracting the result
        property immediately) and use <code>game.result</code> everywhere that
        we've been using <code>game</code>. It's a bit annoying but it fixes
        everything.
      </p>
      <pre>
        <code>
          {"// imports, etc. here\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {
            '  game = renderHook(() => useGame(firstToPlay)); // no ".result" here\n'
          }
          {"});\n"}
          {"[...]\n"}
          {'test("making a move", () => {\n'}
          {'  // using ".result" everywhere\n'}
          {"  act(() => game.result.play(1, 1)); // playing in the center\n"}
          {"  expect(game.result.board[1][1]).toBe(firstToPlay);\n"}
          {"  expect(game.result.nextToPlay).toBe(1 - firstToPlay);\n"}
          {'  expect(game.result.status).toHaveProperty("ongoing");\n'}
          {"});"}
        </code>
      </pre>
      <p>
        After all that, this should finally pass (given a properly implemented{" "}
        <code>useGame</code> hook).
      </p>
      <p>
        I won't go through the details here, but to finish off the test creation
        part of test-driven development we would need to write several more
        tests, probably grouped via <code>describe</code>s, to account for all
        possible scenarios that we can think of. This may be a lot of tests,
        even for a relatively small/simple hook.
      </p>
      <p>
        With the hook parameters and return values specified, and a complete set
        of tests written out, the final step of test-driven development is to
        start writing the actual code. Pick the simplest (first) test which is
        failing and work until it passes. Repeat until all tests pass. Add more
        tests throughout if you realize you missed an edge case or anything like
        that.
      </p>
      <h2>Testing Hook Effects</h2>
      <p>
        I said earlier that hooks essentially return data to observe and actions
        to be done, but also hinted that there can be more to it than that. In
        particular, you might have an effect happening via{" "}
        <code>useEffect</code>. The tic-tac-toe game we described doesn't have
        any effects. But we might have another custom hook which is tracking how
        many wins each player has (and how many draws there have been). It can
        take as parameter the status of the game, and returns three numbers
        representing the win/draw counts. (And also a reset function might be
        good.)
      </p>
      <p>
        This second hook doesn't return any actions to take (besides possibly{" "}
        <code>reset</code>). It just observes the status supplied by the first
        (game) hook and uses side effects to update the win/draw counts:
        whenever the status changes -- that is to say, the dependency array
        consists of <code>status</code> -- the effect checks what the value is
        and increments the appropriate counter -- managed as internal state via{" "}
        <code>useState</code> or <code>useReducer</code> -- by one.
      </p>
      <p>
        A single, basic test for this would be to change the status from
        'ongoing' to 'player 1 won', or to 'draw'. Another would be to change it
        back to 'ongoing' and ensure nothing happens. We might try to write the
        first test as follows.
      </p>
      <pre>
        <code>
          {"// imports here\n"}
          {"\n"}
          {'let status = null; // represents "ongoing"\n'}
          {"let scores;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  scores = renderHook(() => useScores(status));\n"}
          {"});\n"}
          {"\n"}
          {'test("player 1 wins first game", () => {\n'}
          {'  status = 1; // represents "player 1 won"\n'}
          {"  expect(scores.result.wins[0]).toBe(0); // player 0 has 0 wins\n"}
          {"  expect(scores.result.wins[1]).toBe(1); // player 1 has 1 win\n"}
          {"  expect(scores.result.draws).toBe(0); // there are no draws\n"}
          {"});"}
        </code>
      </pre>
      <p>
        But this test would fail, even with properly implemented game and score
        hooks. This is because the hook won't have updated itself. It will only
        do so (as far as I know) when you explicitly take an action (via{" "}
        <code>act</code>) or explicitly ask it to re-render with updated
        parameters (via <code>rerender</code>).
      </p>
      <p>
        Indeed, along with the result, the rendered hook also returns a
        re-render function. This function re-renders the hook with the new
        parameters you pass it. To make use of this, we'll have to modify the
        initial call to <code>renderHook</code> to make it more explicit.
      </p>
      <pre>
        <code>
          {"// imports here\n"}
          {"\n"}
          {"let scores;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  const scores = renderHook(\n"}
          {"    ({ status }) =>\n"}
          {"      useScores(status),\n"}
          {"    { initialProps: { status: null} }\n"}
          {"  );\n"}
          {"});\n"}
          {"\n"}
          {'test("player 1 wins first game", () => {\n'}
          {"  scores.rerender({ status: 1 });\n"}
          {"\n"}
          {"  expect(scores.result.wins[0]).toBe(0); // player 0 has 0 wins\n"}
          {"  expect(scores.result.wins[1]).toBe(1); // player 1 has 1 win\n"}
          {"  expect(scores.result.draws).toBe(0); // there are no draws\n"}
          {"});"}
        </code>
      </pre>
      <p>
        With these changes, the test should pass given proper hook
        implementations.
      </p>
      <p>
        (One miscellaneous additional inconvenience which doesn't come up here
        but I have experienced is that if you use <code>act</code> but don't
        actually change any internal state, the hook won't update. For example,
        suppose the hook takes as parameters a <code>number</code> and its{" "}
        <code>setNumber</code> -- so the number state is being managed outside
        the hook. Then an action which ultimately calls <code>setNumber</code>,
        but doesn't change any other state, won't trigger a re-render. You'd
        need to manual use <code>rerender</code>, as above, with the new
        parameter value of <code>number</code> passed in. There's probably a
        proper way to deal with this situation, but I'm not familiar with it.)
      </p>
      <h2>Mocking Parameters</h2>
      <p>
        Sometimes your tests might start failing despite having a hook which is
        working perfectly well. This could happen if your tests are using a
        dependency (other code) which has a bug or some other reason for not
        working. The classic example is having tests fail because the hook
        couldn't get a network connection -- the hook itself is working fine, so
        failing tests aren't helpful here. It's best to try and remove this
        possibility by mocking any dependencies. In the network example here, we
        would want to just provide the expected data rather than actually
        fetching it from the network in our tests, if possible.
      </p>
      <p>
        The tic-tac-toe game and scoring example that we've been working with
        aren't a great example (maybe I should have planned ahead better). Let's
        suppose instead that it was a card game (maybe{" "}
        <a
          href="https://en.wikipedia.org/wiki/Hearts_(card_game)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hearts
        </a>
        ), and one of the parameters for the game was a deck of cards which is
        implemented as another custom hook. So we're calling a custom hook{" "}
        <code>useDeck</code> which returns some data and actions -- in this
        case, the cards left in the deck, a draw function to draw a card, a
        shuffle function, and maybe more (return cards to deck, cut the deck,
        reset, etc.) -- and passing this as one of the parameters to our{" "}
        <code>useGame</code> custom hook. The deck is a dependency for the game.
      </p>
      <p>
        If we write some tests for this game, similar to what we did above,
        there would be two ways that the game hook tests could fail: either
        there's a mistake in our implementation of the game hook; or there's a
        mistake in our implementation of the deck hook. We only want the test
        for the game hook to fail if we're in the former case. To achieve this,
        we can mock the deck hook. In fact, as discussed earlier, you can't call
        a hook directly in a test, so it's not possible to just call the deck
        hook and pass it in as a parameter. You can try using{" "}
        <code>renderHook</code> to get an instance of the deck hook, but things
        get a bit messy as the <code>result</code> property is changed every
        re-render -- but in any case, we just said we don't want to pass the
        real hook in as a parameter, we want to mock it.
      </p>
      <p>
        When mocking something, you can't use any state -- for the same reason
        you can't call a custom hook in a test file, you can't call any standard
        hooks like <code>useState</code>. For a deck of cards, we can just
        define an explicit array of cards and define the draw function to pop
        from that, and the shuffle function could do nothing. This has the
        additional benefit that we can decide which order the cards are drawn in
        and can avoid randomness (which could lead to inconsistent pass/fail
        results) in our tests.
      </p>
      <pre>
        <code>
          {"let cards;\n"}
          {"let draw = () => cards.pop();\n"}
          {
            "// hearts hook won't use the other deck properties, so don't include\n"
          }
          {"let mockDeck = { draw };\n"}
          {"let hearts;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  cards = [...]; // explicitly specify the card stack\n"}
          {"  hearts = renderHook(() => useHearts(mockDeck, ...));\n"}
          {"});\n"}
          {"\n"}
          {"// tests here"}
        </code>
      </pre>
      <p>
        As a side note, this seems a bit like cheating, because any direct
        changes to variables should be lost on re-render, but arrays are
        pointers to their contents and the contents of arrays don't get reset on
        re-render. This has always confused me a bit -- and initially led to
        many long-lasting misunderstandings while I was trying to learn React.
      </p>
      <p>
        Alternatively, we could use jest mock functions to mock the deck.
        Indeed, given the remark in the previous paragraph, this is probably the
        'proper' way to deal with the situation. With this, instead of setting
        up an array of cards and defining a draw function, we just define a mock
        draw function which we can manipulate as needed to return whatever we
        want.
      </p>
      <pre>
        <code>
          {"let draw = jest.fn();\n"}
          {
            "// hearts hook won't use the other deck properties, so don't include\n"
          }
          {"let mockDeck = { draw };\n"}
          {"let hearts;\n"}
          {"\n"}
          {"beforeEach(() => {\n"}
          {"  hearts = renderHook(() => useHearts(mockDeck, ...));\n"}
          {"});\n"}
          {"\n"}
          {"// tests here"}
        </code>
      </pre>
      <p>
        Now, in our tests, whenever cards are expected to be drawn, we can tell
        the mock draw function exactly what to do in advance. We can tell it to
        return a particular value next time it is called, or to keep returning
        the same value every time it is called (until we tell it to do
        otherwise), or give it a temporary (simplified) implementation, and much
        more -- see the{" "}
        <a
          href="https://jestjs.io/docs/mock-function-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>{" "}
        for a full list. In the game of hearts, if somebody was dealing one card
        at a time (which maybe isn't how it would work in practice, but just to
        keep things simple here) we could tell the draw function specifically
        which card to return.
      </p>
      <pre>
        <code>
          {"// setup code from above here\n"}
          {"\n"}
          {'test("dealing a card to player 2", () => {\n'}
          {"  const sixOfSpades = ...; // whatever data structure you use\n"}
          {"  // tell draw function to return 6S next time it's called\n"}
          {"  draw.mockReturnValueOnce(sixOfSpades)\n"}
          {
            "  // inside the hearts hook, the mock draw function will be called once\n"
          }
          {"  hearts.result.dealOneToPlayer(2);\n"}
          {"\n"}
          {"  // player 2's hand has the card\n"}
          {"  expect(hearts.result.hands[2]).toContain(sixOfSpades);\n"}
          {"  // player 0's hand doesn't\n"}
          {"  expect(hearts.result.hands[0]).not.toContain(sixOfSpades);\n"}
          {"});"}
        </code>
      </pre>
      <p>
        Note that if you called <code>dealOneToPlayer</code> a second time in
        the test above, the draw function would (I think) return null the second
        time -- you'd need to mock the return value once again before the second
        call. Or you could get more detailed and define an implementation -- but
        then you're adding complexity and increasing the chances that a test
        would fail due to a mistake in the mocked functions, rather than in the
        hook you're actually trying to test. There are also plenty of other
        things you can do with mock functions, such as checking how many times
        they've been called. That's not directly related to what we're doing
        here (as far as I know -- which isn't very far) so we won't get into it.
      </p>
      <h2>Mocking Imports</h2>
      <p>
        The other main way that unrelated code could cause your tests to fail
        unnecessarily is if the hook being tested imports helper functions from
        another file. For example, some calculation may be done after a player
        makes a move in some type of game, and then assigned a score based on
        that -- the calculation of that score, based on some parameters, might
        be in a helper file.
      </p>
      <pre>
        <code>
          {'import { helperFunction } from "./helperFile";\n'}
          {"\n"}
          {"function useGame(...) {\n"}
          {"  ...\n"}
          {"  score = helperFunction(...);\n"}
          {"  ...\n"}
          {"  return { ... }\n"}
          {"};"}
        </code>
      </pre>
      <p>
        This seems a bit tricky at first, because there's no place that the
        helper function is explicity passed in that you can mock. It's not even
        directly imported in the test file itself - only in the hook file! But
        in fact it's not very difficult at all once you've been told what to do.
        Think of the import line in the hook file as an assignment{" "}
        <code>const helperFunction = helperFile.helperFunction</code> which is
        implicitly happening. We can intercept that assignment, in the test
        file, by mocking the entire helper file that's providing the helper
        function.
      </p>
      <pre>
        <code>
          {'jest.mock("./helperFile", () => {\n'}
          {
            "  // if needed, can import the actual file with all the original functions\n"
          }
          {
            '  const actualFile = jest.requireActual("../playing-cards/cardHelpers.js");\n'
          }
          {"\n"}
          {
            "  // return what the helper file would return (the exported functions) -\n"
          }
          {"  // but replacing any you want to mock\n"}
          {"  return {\n"}
          {
            "    __esModule: true, // apparently this is required, not sure why\n"
          }
          {"    ...actualFile, // original returns\n"}
          {"    helperFunction: jest.fn() // replace this one with a mock\n"}
          {"  };\n"}
          {"});\n"}
          {"\n"}
          {"// imports, setup, beforeEach, tests, etc. here"}
        </code>
      </pre>
      <p>
        From here, it's the same as with <code>draw</code> above -- just mock
        return values or whatever you need to do, inside any tests.
      </p>
      <h2>Dependency Injection</h2>
      <p>
        In fact, the second situation above, where we mocked a dependency (
        <code>helperFunction</code>) being imported, could instead be
        transformed into the first situation above, where we mocked a parameter
        (<code>deck</code>). This can be done simply by making{" "}
        <code>helperFunction</code> into an explicit parameter of the hook.
      </p>
      <pre>
        <code>
          {'import { helperFunction } from "./helperFile";\n'}
          {"\n"}
          {
            "// providing a new param f at the end with default value the helper function\n"
          }
          {"function useGame(..., f = helperFunction) {\n"}
          {"  ...\n"}
          {"  score = f(...); // call f here\n"}
          {"  ...\n"}
          {"  return { ... }\n"}
          {"};"}
        </code>
      </pre>
      <p>
        Now the call to <code>f</code> in the hook is referring to the parameter
        passed in, instead of directly to the value exported from the file. So
        instead of mocking the imported file and slipping in the mock version of
        the helper function, we can simplify to just mocking the single helper
        function and passing that in as a parameter to the hook.
      </p>
      <pre>
        <code>
          {'// jest.mock("./helperFile", () => {\n'}
          {
            "//   // if needed, can import the actual file with all the original functions\n"
          }
          {
            '//   const actualFile = jest.requireActual("../playing-cards/cardHelpers.js");\n'
          }
          {"//\n"}
          {
            "//  // return what the helper file would return (the exported functions) -\n"
          }
          {"//  // but replacing any you want to mock\n"}
          {"//   return {\n"}
          {
            "//     __esModule: true, // apparently this is required, not sure why\n"
          }
          {"//     ...actualFile, // original returns\n"}
          {"//     helperFunction: jest.fn() // replace this one\n"}
          {"//   };\n"}
          {"// });\n"}
          {"\n"}
          {
            "let helperFunction = jest.fn(); // replace the above with just this!\n"
          }
          {"\n"}
          {"// imports, setup, beforeEach, tests, etc. here"}
        </code>
      </pre>
      <p>
        This is called dependency injection: dependencies are passed in
        explicitly as parameters so that they can easily be swapped out (which
        comes in handy for testing in particular).
      </p>
      <p>
        Often, if you have some complex calculation or anything like that going
        on somewhere inside your hook, you can wrap it up, do that calculation
        outside of the hook, and pass it in as a parameter. This makes testing
        easier, and likely also improves the separation of concern in your code
        base.
      </p>
      <h2>Conclusion</h2>
      <p>
        It's easy to get discouraged from writing tests when new situations
        arise and you aren't sure how to deal with them. Figuring out a proper
        way to handle these unfamiliar situations (via searching online or
        deducing it on your own) can be difficult, but typically once you have a
        solution it's relative simple and routine. It's therefore worth putting
        in that bit of effort once, and bookmarking or documenting what you
        learn from it.
      </p>
    </>
  );
}
