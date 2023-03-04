import "../../../css/code.css";

// content

function Content() {
  return (
    <>
      <h2>Introduction</h2>

      <p>
        Managing state in React can be extremely smooth and straightforward, if
        you do it right. But it can also be quite difficult to do it right,
        especially if you're new to React. It's one thing to watch a video or
        read a tutorial which explains how to do something, but it's another
        thing to take those techniques and apply them to your own unique
        situation. Often, those techniques won't directly apply, and there are
        several possible ways to proceed but it's not clear which is best -- or
        there are no clear ways to proceed. Or, worst of all, it seems like the
        a technique applies, but unbeknownst to you, it's a poor way to do it
        and there is actually a much better solution.
      </p>
      <p>
        This piece is not intended to be a tutorial or guide; there are many
        resources out there on React and state management if that's what you're
        looking for. While we will (briefly) discuss state from scratch, there
        are lots of important things about state (and hooks) which we won't
        mention at all. This post will probably be most useful to you if you've
        already learnt the basics of React state management and have tried to
        create a toy project on your own, but don't yet have a complete grasp --
        otherwise, I would recommend finding a different resource. Although,
        ultimately, this post is probably most useful to me; the process of
        writing something down and explaining it is the best way to confirm and
        solidify ones understanding.
      </p>
      <p>
        In this post, rather than just showing multiple examples of state
        management done well and explaining some conclusions, we'll actually
        walk through all the "incorrect" things that I personally did on my way
        to getting to those conclusions. I'll explain what I was doing at each
        stage, what problem I was trying to solve, and why it was a bad solution
        for that problem. This will be done with reference to the game Connect
        4, though the concepts apply to most other situations (games or "real"
        applications) with sufficient thought. (Minesweeper and Othello are a
        good examples to have in mind.) Note, however, that some of the earlier
        problems actually came up in prior projects of mine (Tic-tac-toe and
        Minesweeper), but I've reframed them all in terms of Connect 4 for
        simplicity. Also, the order that we'll go through the problems here is
        very slightly different from the order that I actually encountered them
        in. This is to avoid distinct trains of thought from getting
        unnecessarily tangled together, and to make it easier to follow along.
      </p>
      <p>
        I should note that I learnt everything I know about React (which I've
        been using for several months at this point) by watching videos, reading
        articles, and creating my own independent web apps (hosted on GitHub
        Pages). I didn't take any courses, formal or informal. While this has
        many drawbacks, one of the largest benefits is that you really
        appreciate a technique when you finally discover or understand it after
        doing it wrong or using a worse technique for many days, weeks, or even
        months. It really puts the technique into perspective, much more so than
        a teacher telling it to you from the start when you haven't struggled
        with the alternatives.
      </p>
      <p>
        Finally, be aware that I'm no expert with React; I don't have all the
        answers. Some of the answers that I think I have might actually be the
        wrong answers. So don't just blindly accept everything I say here. And
        please let me know if anything in this post is incorrect or misleading,
        so that I can correct/update it.
      </p>

      <h2>State Basics</h2>

      <p>
        As I mentioned, I'll be assuming you know a bit about React and state.
        But here is a very brief summary. Note that this may not be entirely
        technically accurate, but it functions sufficiently as a high-level
        model to have in your mind.
      </p>
      <p>
        In React, we can pretend we're writing HTML and JavaScript (though
        technically we're writing in JSX, a syntax extension to JavaScript).
        This means that we can define values using <code>const</code> and{" "}
        <code>let</code>. The former type cannot be mutated (changed), but the
        latter can. If we do reassign a <code>let</code> value, and are
        displaying that value on the web page we're building, then the change
        won't show up -- the original value will still be shown.
      </p>
      <p>
        This is because React takes the content to be displayed, renders it onto
        the screen, and only updates the screen (know as re-rendering) under
        certain conditions. Otherwise, it would be constantly re-rendering as it
        steps through any calculation in our code, which is very inefficient.
        Moreover, when it does re-render, it essentially renders from scratch,
        meaning that the <code>let</code> value we changed via a function call
        is actually back to its original value. (Of course, behind the scenes
        React is smart and can avoid re-rendering parts which it knows haven't
        changed, but that's not relevant to us right now.)
      </p>
      <p>
        The classic example here is a value which tracks how many times a user
        has clicked a button. If the page displays that value, and the button
        updates that value (increases it by one) then the page will not reflect
        the update because it hasn't re-rendered. And if the page is later
        re-rendered, that updated value will be lost. So the number of clicks
        will always display as 0 (the initial value in your code).
      </p>
      <pre>
        <code>
          {"let count = 0;\n"}
          {"function clickHandler() {\n"}
          {"  count += 1;\n"}
          {"}\n"}
          {"<button onClick={clickHandler}>Increment</button>;\n"}
        </code>
      </pre>
      <p>
        The exception to this re-render from scratch policy is state. Anything
        defined with state (known as stateful, as opposed to stateless) will not
        revert back to its original value on re-render; it will maintain its
        most recent value. And updating a state is one thing which triggers
        React to re-render, so we're basically guaranteed that the screen is
        showing the correct value of anything which is stateful. (Technically,
        React may batch re-renders together behind the scenes, for efficiency.
        But again, that optimization shouldn't be too important for what we're
        thinking about here.)
      </p>
      <p>
        These days, with functional components introduced a few years ago, the
        main way to bring state into our code is via hooks like{" "}
        <code>useState</code>. Instead of bringing this in with the
        click-counter above, let's go straight into Connect 4.
      </p>

      <h2>Connect 4 Game Values</h2>

      <p>
        I'll assume you're familiar with the game Connect 4 (if not, there are
        surely numerous videos and articles out there which explain it).
        Briefly, it is played on a stand-up 6x7 (rows by columns) board where
        two players take turns dropping pieces (via gravity) into columns, until
        somebody wins by getting a line of 4 (in any direction, including
        diagonally) or the board fills up (a draw).
      </p>
      <p>
        What values do we need to keep track of in order to create a working
        version of this game? That is, values that we would pass to our View
        components to display the game to the user(s). Well, we obviously need
        to know the location of the pieces. So the board is a value. The board
        would presumably be a matrix (array of arrays) with each entry
        indicating whether the spot is empty, or which player has a piece there.
      </p>
      <pre>
        <code>
          {"// a possible board\n"}
          {"// note the first row is the bottom, so this looks upside-down\n"}
          {"[\n"}
          {"  [null, null, 0,    1,    1,    0,    null],\n"}
          {"  [null, null, 1,    0,    null, null, null],\n"}
          {"  [null, null, null, 0,    null, null, null],\n"}
          {"  [null, null, null, null, null, null, null],\n"}
          {"  [null, null, null, null, null, null, null],\n"}
          {"  [null, null, null, null, null, null, null],\n"}
          {"];\n"}
        </code>
      </pre>
      <p>
        We also need to know whose turn it is. And the status of the game -- is
        it ongoing, has somebody won (if so, who), or is it a draw? These three
        values -- the board, the status of the game, and whose turn it is --
        seem to be enough to make things work. If a player wants to make a move,
        we can check that the game is ongoing and that it's their turn, then add
        their piece to the board (assuming the column they picked isn't full).
        Otherwise, if somebody has won, we can display a message to that effect.
      </p>
      <pre>
        <code>
          {"// a possible game status\n"}
          {'"ongoing";\n'}
          {"// a possible whose turn is next\n"}
          {"1;\n"}
        </code>
      </pre>
      <p>
        This is indeed enough, but there are a couple of other values we might
        consider also tracking. First, it would be visually nice to highlight
        the 4 pieces that a player won with at the end of the game (unless of
        course the result was a draw). This just improves the user experience,
        but doesn't increase functionality. Second, we could store a list
        (stack) of all the moves made in the game, in order. This would be
        necessary if we wanted to add an undo feature; with just the board, game
        status, and whose turn it is, we don't know which was the most recent
        piece to be dropped in. So this doesn't impact the user experience
        directly, but it does open the door to additional functionality.
      </p>

      <h2>Introducing State</h2>

      <p>
        With roughly the model described above guiding me, my first thought was
        to make all of the game values stateful, because if we need to update
        something then it should be stateful. This turns out not to be entirely
        correct -- maybe you can already see a better approach. At the time, it
        didn't even occur to me that there might be alternatives. But we're
        walking through ideas more or less as I thought them, so we'll stick
        with this for now and see where it gets us.
      </p>
      <p>
        To do this, we import <code>useState</code> and make our three values --
        the board, the game status, and whose turn it is -- stateful. Note that
        these values are constants (denoted by <code>const</code>), which means
        we can't change their values. But we can make sure they start with
        different values on re-renders, by passing that new value to the setter
        function returned by <code>useState</code> -- we'll get to this in the
        next section.
      </p>
      <pre>
        <code>
          {"const [board, setBoard] = useState(emptyBoard(6, 7));\n"}
          {'const [gameStatus, setGameStatus] = useState("ongoing");\n'}
          {"const [toPlayNext, setToPlayNext] = useState(firstPlayer);\n"}
        </code>
      </pre>
      <p>
        Note that <code>firstPlayer</code> is a parameter, and{" "}
        <code>emptyBoard</code> is a helper function.
      </p>
      <p>
        Notice that including move history (which, recall, would be necessary if
        we wanted to later implement an undo feature) is easy, so we'll do that.
      </p>
      <pre>
        <code>
          {"// a possible move history, corresponding to the above game\n"}
          {"[\n"}
          {"  { player: 0, row: 0, col: 5 },\n"}
          {"  { player: 1, row: 0, col: 4 },\n"}
          {"  { player: 0, row: 0, col: 2 },\n"}
          {"  { player: 1, row: 0, col: 3 },\n"}
          {"  { player: 0, row: 1, col: 3 },\n"}
          {"  { player: 1, row: 1, col: 2 },\n"}
          {"  { player: 0, row: 2, col: 3 },\n"}
          {"];\n"}
        </code>
      </pre>
      <pre>
        <code>{"const [moveHistory, setMoveHistory] = useState([]);\n"}</code>
      </pre>

      <h2>Updating a State</h2>

      <p>
        So what happens when a player clicks on a column to drop a piece into it
        (assuming the game is ongoing and it's their turn)? It seems pretty
        simple; we just update all the states. For now, let's just focus on the
        board state.
      </p>
      <p>
        Well, the player selected a column. We can use a helper function to find
        which row the piece will end up in when dropping into that column. Note
        that this function implicitly depends on the board constant (it's not
        passed into the function as a parameter), which may be a different value
        on each re-render. So this function is actually a different function on
        each re-render. (It also depends on <code>rows</code>, how many rows the
        board has.)
      </p>
      <pre>
        <code>
          {"function findEmptyRow(col) {\n"}
          {"  for (let row = 0; row < rows; row++) {\n"}
          {"    if (board[row][col] === null) {\n"}
          {"      return row;\n"}
          {"    }\n"}
          {"  }\n"}
          {"  return null;\n"}
          {"}\n"}
        </code>
      </pre>
      <p>
        Now, given the player, row, and column, we need to actually update the
        board state. Since the board is a constant, we can't change its value,
        but it is an array so we can change its contents. Then we could pass it
        to the board setter.
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {"    board[row][col] = player;\n"}
          {"    setBoard(board);\n"}
          {"  }"}
          {"}"}
        </code>
      </pre>
      <p>
        This won't work. There's a slight catch with setters; they only trigger
        a re-render if the value they receive is different from the current
        state, and this is checked by reference. Even though an entry in the
        array has changed, it's still the same array reference and so React
        won't trigger a re-render.
      </p>
      <p>
        The standard solution here (as far as I know) is to make a shallow copy
        of the array, and then proceed with that:
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {"    newBoard = [...board];\n"}
          {"    newBoard[row][col] = player;\n"}
          {"    setBoard(newBoard);\n"}
          {"  }"}
          {"}"}
        </code>
      </pre>
      <p>
        This is a bit annoying, and if we had to conditionally update multiple
        pieces on the board (such as in other games like Minesweeper or
        Othello), then we would be repeating these few lines of code often. This
        indicates that we should encapsulate the logic into the setter if
        possible. That's not directly possible, but we can accomplish this if we
        use a different hook instead of <code>useState</code>.
      </p>

      <h2>Using Dispatchers Instead of Setters</h2>

      <p>
        Instead of using the <code>useState</code> hook, we'll use the{" "}
        <code>useReducer</code> hook. Where the former produces a setter
        function which needs the new value, the latter produces a dispatch
        function which needs an action. So instead of each time making a shallow
        copy, modifying it, and then passing it to the setter, we can just call
        the dispatcher with the action "place a piece for this player in this
        row and this column" and encapsulate the shallow copy code within. This
        has the additional benefit of preventing the state from being modified
        in an unnatural way (for instance, we would never delete a row of pieces
        in this game, and nobody would be able to do that because we wouldn't
        program the dispatcher to recognize/perform such an action).
      </p>
      <p>
        Note that we need to supply a reducer function to{" "}
        <code>useReducer</code>, so that the dispatcher knows what to do with
        each action. This reducer function will be given the old state as an
        argument, as well as the action which we pass to the dispatcher.
      </p>
      <pre>
        <code>
          {"function reduceBoard(state, action) {\n"}
          {"  switch (action.type) {\n"}
          {'    case "drop":\n'}
          {"      newState = [...state];\n"}
          {"      newState[action.row][action.col] = action.player;\n"}
          {"      return newState;\n"}
          {"    default:\n"}
          {"      return state;\n"}
          {"  }\n"}
          {"}\n"}
          {"\n"}
          {
            "const [board, dispatchBoard] = useReducer(reduceBoard, emptyBoard(6, 7));\n"
          }
        </code>
      </pre>
      <p>
        The <code>placePiece</code> function is now shorter and easier to
        understand.
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {'    dispatchBoard({ type: "drop", player, row, col });\n'}
          {"  }\n"}
          {"}\n"}
        </code>
      </pre>
      <p>
        We can also change the move history from a setter to a dispatcher, since
        it also needs to make a shallow copy.
      </p>

      <h2>A Sequence of Setters and Dispatchers</h2>

      <p>
        Our <code>placePiece</code> function, which would be called when a
        player makes a move, so far only adds that piece to the appropriate spot
        on the board. It still needs to update the everything else: the game
        status, who's playing next, and the move history.
      </p>
      <p>
        Since we also switched the move history from a setter to a dispatcher in
        the previous section, it's easy enough to also update that:
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {'    dispatchBoard({ type: "drop", player, row, col });\n'}
          {'    dispatchHistory({ type: "add", player, row, col });\n'}
          {"  }\n"}
          {"}\n"}
        </code>
      </pre>
      <p>
        Whose turn is next seems like it should be easy, as we just flip it to
        the opposite player, but it's actually not that simple because the game
        might be over. If the game is over, there is no next turn, so the value
        should be null. (We don't have to do this I suppose, but it seems like
        the best practice in this case.)
      </p>
      <p>
        So we'd better update the game status first, since whose turn is next
        depends on that. It's easy but tedious to write a some helper functions
        -- which, like the earlier helper to find the empty row, implicitly
        depend on the board constant -- to help decide what the new game status
        should be, by checking if there are 4 pieces in a row, and whether the
        board is full.
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {'    dispatchBoard({ type: "drop", player, row, col });\n'}
          {'    dispatchHistory({ type: "add", player, row, col });\n'}
          {"    if (isWon()) {\n"}
          {"      setGameStatus(player);\n"}
          {"    } else if (isDraw()) {\n"}
          {'      setGameStatus("draw");\n'}
          {"    }\n"}
          {"  }\n"}
          {"}\n"}
        </code>
      </pre>
      <p>
        The problem is, this won't work -- it won't detect a winner. This is
        quite confusing if you're new to state management. If you're familiar
        with functional programming, that might help you understand what is
        going on here. Essentially, when the user clicks on a column, triggering
        the <code>placePiece</code> function to be called, a closure is created.
        This closure contains the values of all constants at the time the
        function was called, including the definition of <code>isWon</code>{" "}
        which depends on the board. Even though the third line of the function
        calls the dispatcher which leads to the board constant being updated and
        the page being re-rendered, within the evaluation of the{" "}
        <code>placePiece</code> function the closure still has the original
        value of board from when the user clicked. It's this old board value
        which is used by the <code>isWon</code> helper, and so{" "}
        <code>isWon</code> is working perfectly but is just checking the wrong
        board. (And no, we can't try and make the board an explicit parameter to
        the <code>isWon</code> helper because that function's parameters are
        also part of the closure -- we'll have the same problem.)
      </p>
      <p>
        This seems like a huge problem. If we want to update a sequence of
        states, later updates can't really depend on earlier updates. This
        didn't cause a problem with updating the board and updating the move
        history, because neither of those depends on the other. But the game
        status update most definitely does depend on the board update.
      </p>
      <p>
        One way around this problem is to call a helper function which
        acknowledges that it has the old state, and takes into account that it
        needs to pretend that there is a new piece when checking for a win or
        draw. This would work, but it seems a bit ridiculous -- why are we
        essentially updating the board twice (once for real, and once
        temporarily within this helper)? This is not a good solution at all.
      </p>
      <p>
        As a side note, for similar reasons, reducers (passed into{" "}
        <code>useReducer</code>) should be pure -- that is, not have an implicit
        dependence on values which might change. They should produce the same
        result from the same arguments, regardless of external values having
        changed. This is most easily achieved by placing the definition of each
        reducer outside the function body which it is used in -- now an error
        immediately comes up if you try to use values which may change. This was
        actually a big point of confusion for me for a time, but I've relegated
        it to a brief paragraph here without elaborating.
      </p>

      <h2>Adding Effects to the Sequence</h2>

      <p>
        After we update the board and the move history, all following state
        updates depend on those initial two states in some form -- they are side
        effects. This points us towards the <code>useEffect</code> hook. Unlike
        the other hooks we've used so far, this doesn't setup and update a
        stateful value. Rather, it is used to run side effects after other
        values are updated.
      </p>
      <p>
        So let's move the code to update the game status out of{" "}
        <code>placePiece</code> and into a side effect.
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {'    dispatchBoard({ type: "drop", player, row, col });\n'}
          {'    dispatchHistory({ type: "add", player, row, col });\n'}
          {"  }\n"}
          {"}\n"}
          {"useEffect(() => {\n"}
          {"  if (isWon()) {\n"}
          {"    setGameStatus(player);\n"}
          {"  } else if (isDraw()) {\n"}
          {'    setGameStatus("draw");\n'}
          {"  }\n"}
          {"});\n"}
        </code>
      </pre>
      <p>
        A side effect like this will run after every re-render of the page (and
        on the initial render). So whenever the board is updated via a
        dispatcher in <code>placePiece</code>, this side effect will be
        triggered and the game status will be updated. The key point is that
        since these side effects are triggered after re-renders, their closures
        are created with the up-to-date values of board and so on.
      </p>
      <p>
        We might still run into the same problem of having old state values in
        the closure, if we call multiple setters or dispatchers in a single
        effect, just like in the old <code>placePiece</code>. But if that's the
        case, we can likely just split those calls into individual side effects
        -- use a sequence of side effects, each doing one update, instead of one
        side effect doing a sequence of updates.
      </p>
      <p>
        Since these side effects run after each re-render, if they do update a
        stateful value and therefore trigger another re-render, they will be run
        again. If we do something convoluted, we may end up in an infinite loop
        of re-renders. But if we do something reasonable like update the game
        status state based on the board state, then the board state will be the
        same on that second render and so the second call to the effect will
        produce the same game status value, meaning no re-render is triggered
        (recall setters and dispatchers won't trigger a re-render if they are
        passed the same value that the state already has).
      </p>
      <p>
        Recall where we are at this point. When a user clicks a column to place
        a piece, <code>placePiece</code> is called. This function dispatches
        updates to the board and move history. These trigger the side effect we
        just added, which updates the game status. We still need to update whose
        turn is next.
      </p>
      <p>
        For updating whose turn is next, recall that usually we just want to
        flip the value to the opposite player. However in the event that the
        game has ended we want to set it to null (again, this is not strictly
        speaking necessary, but it is the most logical). Since this update does
        depend on the stateful values we've just updated, we can't just do this
        change after in the <code>placePiece</code> function -- that doesn't
        have access to the updated game status value. So let's put it in a side
        effect.
      </p>
      <pre>
        <code>
          {"useEffect(() => {\n"}
          {'  if (gameStatus === "ongoing") {\n'}
          {"    setGameStatus(1 - gameStatus);\n"}
          {"  } else {\n"}
          {"    setGameStatus(null);\n"}
          {"  }\n"}
          {"});\n"}
        </code>
      </pre>
      <p>
        This causes some problems. This side effect runs after every re-render,
        but we only want to update this once after the user clicks. This wasn't
        a problem in the first side effect, because updating the game status
        multiple times after a move would always return the same value. But this
        update involves toggling a value (assuming the game is ongoing), so
        doing it multiple times is (typically) not the same as doing it once.
      </p>
      <p>
        Fortunately, we can stop a side effect from running every re-render by
        additionally giving it an array. The side effect will only run after a
        re-render if one of the values in that array changes. However, if we use
        this feature, we need to include all stateful variables being referenced
        in the side effect (otherwise React won't update them at all and they
        will have old values, analogous to the closure issues earlier). So we
        must include the game status in this array.
      </p>
      <pre>
        <code>
          {"useEffect(() => {\n"}
          {'  if (gameStatus === "ongoing") {\n'}
          {"    setGameStatus(1 - gameStatus);\n"}
          {"  } else {\n"}
          {"    setGameStatus(null);\n"}
          {"  }\n"}
          {"}, [gameStatus]);\n"}
        </code>
      </pre>
      <p>
        The problem now is that if a player makes a move and the game isn't over
        (they didn't win or draw on that move), then the game status doesn't
        change (it's still ongoing), so this side effect won't be called. It
        needs to happen every time the <code>placePiece</code> function is
        called, and only happen once each time. If we add the board to the
        dependency array, then this side effect will happen after we update the
        board. (It will run again if the game status changes because of that
        board update, but that will only change at the end of the game, at which
        point there is no more toggling and we just want the value to be null.)
      </p>
      <p>
        So that seems to work. But it feels a bit fragile -- fundamentally, we
        want to change this value when the user does something in particular,
        not when other values change. If we later change things, to the point
        that the board is updated multiple times, or there are new possible game
        states, then this would break right away. It doesn't sound likely in
        Connect 4, but analogous things can happen in other games like
        Minesweeper and Othello. Though in fact, it is possible in Connect 4. We
        could add a "forfeit" game status (more on this later), or the board
        could be updated more times if it stores additional information (more on
        this now).
      </p>
      <p>
        Recall that we briefly mentioned the possibility of adding highlights
        earlier, to highlight 4 pieces when a player wins. Let's bring that in
        now. There are many ways to do this. The highlights could be a list of
        pieces to highlight -- but this is awkward to pass to the View component
        as it then has to check through the list each time it displays a single
        piece. So it seems best to be in a matrix structure just like the board.
        And if that's the case, then it may as well be combined with the board.
        (More on this combining vs keeping separate aspect later.)
      </p>
      <pre>
        <code>
          {
            "// a possible board (only first row shown -- other rows omitted for brevity)\n"
          }
          {"[\n"}
          {"  [\n"}
          {"    // row 0\n"}
          {"    { player: null, isHighlight: false },\n"}
          {"    { player: 1,    isHighlight: false },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: null, isHighlight: false },\n"}
          {"  ],\n"}
          {"  // rows 1 through 5 would be here\n"}
          {"];\n"}
        </code>
      </pre>
      <p>
        Back to the side effect we were just discussing. Since the highlights
        are now stored in the board, this side effect may be triggered again if
        the highlights are updated separately from the piece being placed into
        the board. If this were to happen, then the side effect would toggle
        whose turn is next too frequently, meaning that in fact this isn't going
        to work as is.
      </p>

      <h2>Removing Most State</h2>

      <p>
        As always, there are multiple ways to go about fixing things. Maybe
        combining the game status and whose turn is next into one value would be
        best -- instead of "ongoing" as a status, we could indicate whose turn
        is next, and when the game isn't ongoing we don't need to know whose
        turn is next.
      </p>
      <p>
        That would likely help. And there are other similar approaches. But
        there is one core thing which we've been doing this whole time:
        over-using state.
      </p>
      <p>
        The key observation is actually extremely simple -- you may have
        realized it right at the start of this post (but unfortunately I
        didn't). And that is that if a value can be calculated from another
        value, then it doesn't need to be stateful -- it can be a stateless
        constant. (It might still make sense to be stateful in some situations,
        but we'll get to that later.)
      </p>
      <p>
        The only state that we really need, if you think about it, is the move
        history. Everything else can be derived from that. The board can be
        created from that by starting with an empty matrix and iterating through
        the history, dropping pieces into the columns (basically simulating the
        game from the beginning). The game status can be calculated from this
        board directly, defined as a stateless constant -- there's no need to
        make it stateful. Whose turn is next can be directly calculated from the
        game status and the last move in the move history.
      </p>
      <pre>
        <code>
          {
            "const [moveHistory, dispatchHistory] = useReducer(reduceHistory, []);\n"
          }
          {"const board = applyMoves(emptyBoard(6, 7));\n"}
          {
            'const gameStatus = isWon() ? findWinner() : isDraw() ? "draw" : "ongoing";\n'
          }
          {"const toPlayNext =\n"}
          {'  gameStatus !== "ongoing"\n'}
          {"    ? null\n"}
          {"    : moveHistory.length === 0\n"}
          {"    ? firstPlayer\n"}
          {"    : 1 - moveHistory[moveHistory.length - 1].player;\n"}
        </code>
      </pre>
      <p>
        Note that many of the helper functions (<code>applyMoves</code>, etc.)
        will implicitly use the move history value.
      </p>
      <p>
        These constants will have the correct values when we use them, because
        whenever the move history is updated via the dispatcher, the page is
        re-rendered and all (non-stateful) constants are calculated from
        scratch, using the up-to-date move history.
      </p>
      <p>
        In a way, we're not actually doing much different. The calculation for
        the game status, based on the board, is the same. But instead of
        manually updating it when the user clicks, or instead of automatically
        updating it via a side effect when the board state changes, we just
        calculate it each time as the definition.
      </p>
      <p>
        Basically, we used too much state. We tried to manually manage a bunch
        of stuff which can happen naturally and automatically. Using less state
        simplifies a lot. Looking at the definitions (above) of these constants,
        we can easily understand what they are: we don't have to go looking for
        setters or dispatchers or side effects to figure out when they update;
        we just look at the definition (and any helper functions used in the
        definition). The <code>placePiece</code> function also becomes extremely
        simple. Just update the move history, and everything else is calculated
        correctly on re-render -- no side-effects necessary.
      </p>
      <pre>
        <code>
          {"function placePiece(col, player) {\n"}
          {"  row = findEmptyRow(col);\n"}
          {"  if (row !== null) {\n"}
          {'    dispatchHistory({ type: "add", player, row, col });\n'}
          {"  }\n"}
          {"}\n"}
        </code>
      </pre>

      <h2>Reintroducing Some More State</h2>

      <p>
        The only potential problem here is that we are doing a lot of extra
        work. Every time the user makes a move, the move history is updated, and
        then the board is calculated from scratch. In a small, 2-player game
        like this, that's almost certainly irrelevant (though I'm not an expert
        on efficiency, so I could be wrong here). But in a large, complex
        setting, computing everything from scratch on each re-render might not
        be a good idea. So, for the sake of learning, we'll assume that Connect
        4 is a large complex game and computing from scratch is a bad idea.
      </p>
      <p>
        There are hooks which we can use to prevent unneeded computations --
        these make sure a constant is only recalculated on re-render if there's
        a chance its value might change. But that doesn't help us here because
        we know the board value will change when the user makes a move. The only
        way (as far as I know) to prevent re-calculating the board each time a
        move is made is to make the board stateful and use the previous state to
        build the new state (via a dispatcher). But this is exactly what we had
        originally when everything was stateful. We're not going back to
        everything being stateful though -- just the move history and the board
        at this point.
      </p>
      <p>
        This is more efficient, because when a move is made, we calculate the
        new board from the old board, which just involves making a shallow copy
        and updating one cell, as opposed to iterating through the whole move
        history and adding each to a fresh board. (Keep in mind, this isn't a
        great example as far as being worthwhile of this optimization -- think
        of Othello instead, where on each move, we may need to flip multiple
        pieces, and pretend the Othello board is extremely large.)
      </p>

      <h2>When to use Stateful Values</h2>

      <p>
        So when should a value be stateful, and when should it be a stateless
        constant calculated from other constants (which themselves may be
        stateful or stateless)? Well, as far as I understand, it more or less
        comes down to what we mentioned with the game status in the previous
        section.
      </p>
      <p>
        If the value is easy to directly calculate from other (stateful or
        stateless) values, then just do that and make it stateless. This is good
        because it's simple and we never need to worry about whether the value
        is up-to-date.
      </p>
      <p>
        If the value cannot be calculated from other values, or is significantly
        easier to calculate using its old value, then make is stateful. This is
        annoying because we need to make sure it stays up-to-date via a side
        effect, or via dispatches within other functions. And that itself is not
        ideal because we don't automatically know where to find those side
        effects and dispatches if we just look at the definition. But it may be
        necessary and/or more efficient.
      </p>
      <p>
        The move history, for example, cannot be calculated from other values --
        the fact that a move was made needs to be stored somewhere! So that's
        stateful. The board can be calculated from the move history, but would
        be much easier with access the previous board state. So it could be
        stateless, but we'll make it stateful. The game status can be easily
        calculated from the board (especially if we also use the move history to
        only check the most recently placed piece for the win condition), and
        having the old game status doesn't help calculate the new one, so make
        that stateless. Whose turn is next is easy to calculate from the move
        history (except if the move history is empty, in which case we need to
        be told, likely via a parameter supplied when the whole setup was
        instantiated -- but that's not a problem) so that can be stateless.
      </p>
      <p>
        Finally, note that if we introduce new features later, we may (or may
        not) need to adjust some of these decisions. For instance, if we later
        add a forfeit feature, then the game status can no longer be calculated
        directly from the board -- if somebody forfeits, then the board appears
        to show an ongoing game, but in reality there is a winner and a loser.
        So while game status was originally a stateless value, it may need to be
        turned into a stateful value. (Though there are other solutions which
        keep the game status as stateless.) Another example to consider would be
        adding an undo feature, to take back the most recent move.
      </p>

      <h2>Combining vs Separating Values</h2>

      <p>
        You may have noticed that the one thing we didn't mention in the
        previous section was the highlights (highlighting 4 pieces once a player
        has won). As mentioned earlier on, the highlights are combined into the
        board, because that makes it very smooth and easy for the View component
        to display the board.
      </p>
      <pre>
        <code>
          {
            "// a possible board (only first row shown -- other rows omitted for brevity)\n"
          }
          {"[\n"}
          {"  [\n"}
          {"    // row 0\n"}
          {"    { player: null, isHighlight: false },\n"}
          {"    { player: 1,    isHighlight: false },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: 0,    isHighlight: true  },\n"}
          {"    { player: null, isHighlight: false },\n"}
          {"  ],\n"}
          {"  // rows 1 through 5 would be here\n"}
          {"];\n"}
        </code>
      </pre>
      <p>
        Making things easy for the view is good. But it does complicate our
        logic, because we only want to look for pieces to highlight if somebody
        has won the game, but we don't know if somebody has won the game until
        we calculate the game status, which is done based on the board. Things
        are getting circular here. We could just always check whether there are
        pieces to highlight, but that's not very satisfactory (and in other
        situations, may be impractical or inefficient).
      </p>
      <p>
        We might be able to mess around with some side effects to get this
        working, but it would likely be unpleasant if it works. To me, it seemed
        better to separate the pieces and the highlights into two separate
        values: have a pieces matrix and a (separate) highlights matrix. This
        seems a bit less ideal for the view, as we are now passing it two
        matrices which is combines to display. This itself isn't a problem, but
        it's generally better if the View does less logic rather than more.
      </p>
      <p>
        However, we can still have a board value and just pass that to the View.
        It can be a stateless constant, calculated directly from the pieces and
        highlights values. Or, it can be a stateful constant, with a side effect
        to recalculate it when either of those matrices updates. (We've just
        discussed the trade-offs between these two options in the previous
        section.) Now the view still has access to the single board constant.
        And in our chain of updates after a user makes a move, we can update the
        pieces, then the game status (and whose turn is next), then the
        highlights (if necessary), and finally combine the pieces and highlights
        into the board -- all without any issues or circular reasoning.
      </p>
      <p>
        Later, if we want to add more data to the board, we can just create a
        new matrix (stateless or stateful, as discussed earlier) and easily
        modify the board function to also merge this new matrix in along with
        the pieces and the highlights. And the View still has consistent access
        to the single board matrix to display however it needs to.
      </p>

      <h2>Custom Hooks</h2>

      <p>
        In my journey, custom hooks actually came much closer to the beginning.
        Although I was doing most of the above sections in the context of a
        custom hook, it didn't make a significant difference in what we were
        discussing, so I omitted that detail. I've left custom hooks for the end
        because they kind of interrupted the chain of thought above, which would
        have just reduced clarity.
      </p>
      <p>
        Wherever this Connect 4 game is being used/played, it probably has a lot
        of other stuff going on: setting up the players, figuring out their
        names and colours, matching up people to play, etc. There is a decent
        amount of code just to cover all the logic we're discussed already (most
        of which I didn't even show in this post, because it wasn't necessary),
        and it's not helpful to crowd it in this one main file.
      </p>
      <p>
        I recognized this early on, but at first didn't understand how to deal
        with the problem. We need the board and other values in the main file,
        to pass to the View and other components. If we define them elsewhere,
        then we no longer have access to them. Of course, we can import
        functions and values to the main file. But importing these values and
        functions individually won't work; they need some global parameters to
        get setup, and only work together as a unit.
      </p>
      <p>
        The solution, which again may seem natural if you're familiar with
        functional programming, is to indeed put them all in a separate file,
        but then wrap them into a single function which returns all the
        constants and functions which we need. We can then import that function
        in the main file, and supply it with the global parameters when we call
        it.
      </p>
      <p>
        This, it turns out, is called a custom hook, and the name should start
        with "use". So for Connect 4, I called it <code>useGame</code>.
      </p>
      <pre>
        <code>
          {"// App.js file\n"}
          {'import Game from "./Game.js";\n'}
          {'import { useGame } from "./useGame.js";\n'}
          {"\n"}
          {"function App() {\n"}
          {
            "  const {board, gameStatus, toPlayNext, placePiece} = useGame(0);\n"
          }
          {"  \n"}
          {"  return (\n"}
          {"    <Game\n"}
          {"      board={board}\n"}
          {"      gameStatus={gameStatus}\n"}
          {"      toPlayNext={toPlayNext}\n"}
          {"      placePiece={placePiece}\n"}
          {"    />\n"}
          {"  );\n"}
          {"}\n"}
        </code>
      </pre>
      <pre>
        <code>
          {"// useGame.js file\n"}
          {'import { useReducer } from "react";\n'}
          {"\n"}
          {"// definition of reducerHistory goes here\n"}
          {"\n"}
          {"function useGame(firstPlayer) {\n"}
          {
            "  const [moveHistory, dispatchHistory] = useReducer(reduceHistory, []);\n"
          }
          {"  const board = applyMoves(emptyBoard(6, 7));\n"}
          {
            '  const gameStatus = isWon() ? findWinner() : isDraw() ? "draw" : "ongoing";\n'
          }
          {"  const toPlayNext =\n"}
          {'    gameStatus !== "ongoing"\n'}
          {"      ? null\n"}
          {"      : moveHistory.length === 0\n"}
          {"      ? firstPlayer\n"}
          {"      : 1 - moveHistory[moveHistory.length - 1].player;\n"}
          {"  \n"}
          {"  function placePiece(col, player) {\n"}
          {"    row = findEmptyRow(col);\n"}
          {"    if (row !== null) {\n"}
          {'      dispatchHistory({ type: "add", player, row, col });\n'}
          {"    }\n"}
          {"  }\n"}
          {"  \n"}
          {"  // definitions of helper functions (isWon, etc.) go here\n"}
          {"  \n"}
          {"  return { board, gameStatus, toPlayNext, placePiece };\n"}
          {"}\n"}
        </code>
      </pre>
      <p>
        When making a custom hook, we should be able to start with the return
        value. What constants does the View need to have in order to display the
        relevant information, and what functionality does it need to have when
        the user interacts with it? Of course, we may not answer this question
        perfectly (especially if we don't fully understand our View yet), but we
        should get most of it right.
      </p>
      <p>
        In our case, it needs the board (inclusive of pieces and highlights),
        the game status, and whose turn is next to display to the user. When the
        user clicks to make a move, it needs a function to call to apply the
        changes -- but it doesn't need any of the dispatchers or helpers that
        such a function may call. It may also, depending on the situation, need
        a function to reset the board for a new game. And maybe an undo
        function. So before even writing any logic, we could start with this
        return line. It might change later on, but probably not too much. And
        even if it does, it gives us a direction to work in, in the meantime.
      </p>
      <pre>
        <code>
          {"function useGame(firstPlayer) {\n"}
          {"  // TODO: define constants and helpers\n"}
          {"  \n"}
          {
            "  return { board, gameStatus, toPlayNext, placePiece, reset, undo };\n"
          }
          {"}\n"}
        </code>
      </pre>
      <p>
        Even if we think we need to keep track of the move history, the View
        most likely won't need that, so it's not in the return. We can define
        non-returned things (like the move history)s inside the hook as we go
        when they become necessary.
      </p>
      <p>
        Given our initial intended return values (constants and functions), we
        can decide how to track the constants internally in the hook -- some
        will be stateless, some stateful; the stateful ones may be updated via
        side effects or via dispatches; some, like board, may be broken up
        internally into pieces and highlights then combined together at the end.
        Then we can define the functions, keeping any helpers hidden away in the
        hook, invisible to the main file. How to do all this was the main
        content of this post.
      </p>

      <h2>Testing</h2>

      <p>
        One of the main advantages of using a custom hook is that we can easily
        test it without getting mixed up with the View component, and isolate
        bugs before they get passed into the View.
      </p>
      <p>
        As said in the previous section, with a custom hook we can usually
        define the return right away. It seems like this is the best point to
        sit down and write some tests -- before we write anything significant in
        the custom hook file. We won't go into many details here, but there are
        libraries to help with testing hooks.
      </p>
      <pre>
        <code>
          {'import { renderHook, act } from "@testing-library/react-hooks";\n'}
        </code>
      </pre>
      <p>
        Briefly: Here we can setup as many tests as we need which describe how
        the constants and functions that our custom hook returns should work. We
        call the hook using <code>renderHook</code>, test the initial return
        values using <code>result.current</code>, do some actions (that is, use
        the functions it returns) via <code>act</code>, and then test the new
        return values.
      </p>
      <pre>
        <code>
          {'it("useGame initial states valid", () => {\n'}
          {"  const { result } = renderHook(() => useGame(0));\n"}
          {"  \n"}
          {'  expect(states.gameStatus).toBe("ongoing");\n'}
          {"  expect(states.toPlayNext).toBe(0);\n"}
          {"  expect(states.resetGame).toBeFunction;\n"}
          {"  // etc.\n"}
          {"});\n"}
          {"\n"}
          {'it("useGame detects horizontal win", () => {\n'}
          {"  const { result } = renderHook(() => useGame(0));\n"}
          {"  \n"}
          {"  // - - 1 1 1 - -\n"}
          {"  // - - 0 0 0 0 -    <- bottom row\n"}
          {"  \n"}
          {"  for (let i = 4; i < 11; i++) {\n"}
          {"    act(() =>\n"}
          {
            "      result.current.placePiece(Math.floor(i / 2), result.current.toPlayNext)\n"
          }
          {"    );\n"}
          {"  }\n"}
          {"  \n"}
          {
            "  validStates(result.current); // helper function defined elsewhere\n"
          }
          {"  expect(result.current.gameStatus).toBe(0);\n"}
          {"  \n"}
          {"  for (let col = 2; col < 6; i++) {\n"}
          {"    expect(result.current.board[0][col].isHighlight).toBe(true);\n"}
          {"  }\n"}
          {"  // etc.\n"}
          {"});\n"}
        </code>
      </pre>
      <p>
        (Do note that there are many alternative ways to test custom hooks,
        including other libraries (I think), or creating a very basic View
        purely for testing the hook.)
      </p>
      <p>
        It's good to do this before writing any substantial code in our hook to
        ensure we have a clear vision of what we're about to create. We can then
        create the core code without constantly worrying about what we've missed
        or forgotten in the later stages -- the tests can tell us at any point
        since they will fail.
      </p>
      <p>
        Plus, if we had a stateful value, say, and realized it would be better
        stateless (or vice-versa), we can make those changes internally, without
        affecting the View, and then confirm our updates worked by running the
        tests. The tests typically won't need any updates, as most changes will
        be internal.
      </p>
      <p>
        We already covered one example of this earlier: adding in the ability to
        forfeit the game. One way to handle this was changing the game status
        from stateless to stateful (though there are other solutions too). We'd
        need to do some refactoring inside our custom hook. But the point is, to
        an external component or person using the game status that the hook
        returns, it should still behave the same way. The same tests should
        still apply and pass. The components may need to add in some new code to
        deal with the new possible value of game status, but their old code
        should still otherwise work. We'll need to add new tests, to test
        forfeit scenarios and check (among other things) that the game status is
        correct in these situations, but the old tests usually shouldn't break.
      </p>
      <p>
        Similarly, if we had pieces and highlights combined into one value from
        the start, and only later on decided we wanted to split them apart and
        combine them with a calculation at the end, the same reasoning applies:
        make the changes inside the custom hook, and use the same tests.
        Ultimately a board constant still gets returned by the hook, so the
        tests should still work perfectly fine. And in this case, we likely
        wouldn't need to add any new tests either.
      </p>

      <h2>Summary</h2>

      <p>
        The point of this post wasn't simply to give out some tips and advice on
        state management in React -- if I wanted to just do that, this article
        could have been significantly shorter (and potentially clearer). The
        point was to walk through (more or less) the process that I went through
        to come to these conclusions. Having said that, it is easy to give a
        quick summary, though it will lack in context.
      </p>
      <ul>
        <li>
          If you have some kind of object, concept, or general entity which a
          user can interact with, you'll probably need to use state to
          accomplish this. And encapsulating it all in a custom hook is likely
          best.
        </li>
        <li>
          That doesn't mean you need to make all your constants stateful. If a
          constant can be calculated from other constants, then leaving it
          stateless is likely best.
        </li>
        <li>
          If a constant can be stateless but, for some reason (efficiency
          usually), that doesn't work well, then make it stateful and consider
          using side effects to update it.
        </li>
        <li>
          When working with multiple stateful constants, be careful about using
          a chain of dispatcher/setter calls, as you won't have access to the
          updated values of those constants later on in the chain.
        </li>
        <li>
          If a stateful constant is complex (an array or an object) consider
          using a dispatcher instead of a setter.
        </li>
        <li>
          Just because a View prefers a certain type of data for ease of use,
          doesn't mean you need to work with the data in that form inside your
          hook. You can unwrap it, maintain it separately, and then wrap it back
          together right before passing it out of the hook.
        </li>
        <li>
          Write tests for your hook (and for everything else) to make refactors
          less likely to break things, and do this before writing your code.
        </li>
      </ul>

      <h2>My Project</h2>

      <p>
        Since writing the initial draft of this post, I've made extensive
        progress on my own (as of now incomplete) Connect 4 game, and it looks
        different from what I describe in this article. Of course, all the
        principles we discussed still apply.
      </p>
      <p>
        In particular, I did add the forfeit functionality in. I now have a
        (stateless) <code>winner</code> value (which is null or the index of the
        winner), which calculates itself based on a (also new){" "}
        <code>forfeiter</code> value (null or index of forfeiter) and on the{" "}
        <code>pieces</code> value. I have not, at this point, added an undo
        feature. (Previously, the game status indicated the winner if the game
        was won. But that didn't work cleanly once a game status of forfeit was
        possible.)
      </p>
      <p>
        If you're curious, the code (including the full commit history) is on my
        GitHub{" "}
        <a
          href="https://github.com/kr-matthews/connect-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <h2>Update</h2>

      <p>
        My Connect 4 game is nearly done now, a few weeks after writing this
        article. I learnt a lot more about React (and JavaScript) since then,
        and a few of those things I learnt were related to state management, so
        I figured I'd include them here in a brief update.
      </p>
      <p>
        If you find yourself doing two or more things together repeatedly, it's
        natural to consider wrapping them up together in a helper function and
        just calling that repeatedly instead. However, if you <em>always</em> do
        those things together and never individually, then you could consider
        instead making one a side-effect.
      </p>
      <p>
        For example, if you frequently use <code>setWinner(true)</code> when the
        user wins, and then you always play some sound to let them know, then
        it's probably best to just use a side-effect which runs whenever{" "}
        <code>winner</code> updates and plays the sound if it's true. This may
        be better than a helper function which sets the winner and plays the
        sound, as this way you can easily out-source the sound effect into its
        own hook, say. Then in another context where you're using the game hook
        you've created but you don't want sound effects, you can just not call
        the sound effect hook. There's no need to edit any helper functions.
      </p>
      <p>
        When I tried to do something along these lines, I ran into a problem. I
        had added an option to mute all sounds, via <code>soundIsOn</code>. So
        my side effect (using a <code>useEffect</code>) must check whether that
        value is true and whether the user has won. So now both of these values
        must be in the dependency array, and the side effect will run whenever
        the user turns sound on. The specific problem arises when the user
        previously won the game (so <code>winner</code> is <code>true</code>)
        with sound off, and then they turn the sound on. The side effect is
        triggered and both values are true so the sound plays. But it should
        only play <em>when</em> the user wins (if sound is on).
      </p>
      <p>
        The workaround here is to essentially set a flag that a sound may need
        to be played. This flag is set in the original side effect above, which
        no longer directly plays the sound and no longer depends on{" "}
        <code>soundIsOn</code>. A separate side effect runs when that flag
        changes and, unless sound is muted, plays the sound, and then that same
        effect turns the flag off, regardless of whether sound is muted.
      </p>
      <p>
        That was a pretty quick explanation. See the{" "}
        <a
          href="https://stackoverflow.com/questions/69732411/react-useeffect-runs-too-often"
          target="_blank"
          rel="noopener noreferrer"
        >
          stack overflow question I asked
        </a>{" "}
        for more details.
      </p>
    </>
  );
}

export default Content;
