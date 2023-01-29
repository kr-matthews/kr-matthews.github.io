import "../../../css/code.css";

export default function Content() {
  return (
    <>
      <h2>Introduction</h2>
      <p>
        As I've been working on more personal programming projects over the past
        several months, I've noticed several actions that I either do on a
        regular basis (and are a bit tedious) or should do on a regular basis
        (but forget to). This is a brief article about how I improved my
        workflow to reduce friction and omissions. There are certainly other
        ways to achieve what I did, and many of those ways are probably better.
        But what I did is relatively simple and easy to set up and get started,
        without needing to install or learn anything significantly new. I'll
        walk through the steps I went through to end up where I am today -- and
        by the time you read this, I may have added further improvements and
        extensions.
      </p>
      <p>
        Note: I use Bash, but the same ideas and steps should apply to Zsh or
        any other shell, as far as I'm aware.
      </p>
      <p>
        Note: The examples code blocks throughout aren't literal copy-pastes of
        my own custom commands; they're essentially the same though, usually
        just with the path and/or name changed.
      </p>

      <h2>Simplifying a Repetitive Command</h2>

      <p>
        My projects are a few levels down in my directories, and so every time I
        open a terminal (which defaults to my home directory) to work on a
        project, I need to <code>cd</code> to the directory of that project via
        something along the lines of{" "}
        <code>cd Documents/Projects/Current/MyProject/SubFolder</code>. Yes, I
        can tab to auto-complete directories, but that's still annoying. In my
        home directory there's also the Downloads folder, and I frequently tab
        too early and Documents doesn't get auto-completed.
      </p>
      <p>
        Ultimately, this isn't a problem -- it's just a minor annoyance.
        However, if there's a simple way to reduce friction without introducing
        any new problems, it's usually worth it. I figured that there must be a
        way to create a shortcut or alias or text-expander or something along
        those lines to eliminate this friction. A quick search brought me to
        this{" "}
        <a
          href="https://medium.com/devnetwork/how-to-create-your-own-custom-terminal-commands-c5008782a78e"
          target="_blank"
          rel="noopener noreferrer"
        >
          article
        </a>{" "}
        which goes through how to set up custom commands to use in your
        terminal. I took it a few steps further, so I won't reference it
        directly, but that article is what got me set up initially. In fact, it
        goes into more detail on how some things work than I will here, so it
        may be worth reading.
      </p>
      <p>
        Start by creating a file where you'll write your custom commands.
        There's probably a 'best' place to store this file, but I'm not too
        familiar with these kinds of conventions. You might also want to set it
        up as a hidden file, meaning the name starts with a period and it won't
        show up by default when viewing directories. Call it{" "}
        <code>.customcommands.sh</code> or something. At the top put the line{" "}
        <code>#!/bin/bash</code>. Below that, create a function. For instance:
      </p>

      <pre>
        <code>
          {"#!/bin/bash\n"}
          {"\n"}
          {"function cdproj() {\n"}
          {"  cd ~/Documents/Projects/Current/MyProject/SubFolder\n"}
          {"}"}
        </code>
      </pre>

      <p>
        With just this file created, your new custom commands won't quite work.
        They need to be loaded when you open a new terminal. Open{" "}
        <code>~/.bashrc</code> (or the equivalent if you don't use Bash) and add
        a new line with <code>source ~/path/to/file/.customcommands.sh</code>{" "}
        (but modify the file path depending on where you saved it). Now, when
        opening a new terminal, you only need to type out <code>cdproj</code> ,
        instead of <code>cd</code> followed by the full path. And tab to
        auto-complete still works, so you probably only need to type the first
        three characters. If you have multiple projects, then create multiple
        functions in the file and name them whatever you want -- but remember
        that the point is to make them quick and easy to use.
      </p>

      <h2>Aggregating a Common Chain of Commands</h2>

      <p>
        After setting this up and using it for a while, I realized that after
        navigating to my current project's directory, the next thing I usually
        do is review what I was previously working on, and confirm what I need
        to work on next. There are many ways to do this, depending on your
        setup. If you use a nice IDE, such as Android Studio say, it may be able
        to automatically list out your TODOs right in the interface (and you may
        be able to customize how it finds them). If you use GitHub or GitLab,
        you may just review the issues listed there (possibly filtering them
        down based on some criteria). If you're working as part of a team, there
        may already be some other system setup for you. In any case, if you have
        a good workflow set up which works well, then stick with it.
      </p>
      <p>
        For me, working on a relatively small personal project, leavings
        comments tagged with "TODO" in the code is quite simple and effective.
        To check what I need to be working on after navigating to the project
        directory, I use <code>git grep TODO</code>. So I created a new custom
        command to automatically show me the project TODOs this way and wrapped
        it together with the previous navigation function. And to remind myself
        of my recent work, I can just review the log and status of the project.
      </p>

      <pre>
        <code>
          {"function cdproj() {\n"}
          {"  cd ~/Documents/Projects/Current/MyProject/SubFolder\n"}
          {"  git log\n"}
          {"  clear\n"}
          {"  git status\n"}
          {"  echo\n"}
          {'  echo "TODOs:"\n'}
          {"  git grep TODO\n"}
          {"}\n"}
        </code>
      </pre>

      <p>
        Note that <code>git log</code> waits for you to dismiss it before the
        next commands will execute, starting with <code>clear</code> -- assuming
        the log didn't fit on the screen. If the log is short, this won't happen
        and it will immediately be cleared so this won't work well. Also, if you
        have a lot of TODOs (more than fit on the screen below the status), then
        this probably isn't a good idea. So overall, still lots of room for
        improvement here -- but it's been working well enough for me so far.
      </p>

      <h2>Aggregating Forgotten Commands</h2>

      <p>
        This was great for sitting down and quickly getting to work with no
        unnecessary friction. However, I realized that something similar could
        help when I'm done working. It's not so much that the commands are
        tedious or repetitive when committing, pushing, and/or deploying work --
        rather, I would often forget to do certain things. For instance, I
        frequently deal with a TODO item, then commit and push the changes, only
        to sit down to work the next time and realize the TODO comment is still
        there and was part of the previous commit. (Yes, you can ammend commits,
        but this is a bad idea if you've already pushed to another repository.)
        This isn't a big deal, but it's potentially confusing to look back at
        previous commits and see TODOs which are already done, especially if
        they're brief and aren't clearly explained. Similarly, I would forget to
        remove temporary print/debug lines.
      </p>
      <p>
        That's easy enough to prevent. Create a new custom command which prompts
        you to check these:
      </p>

      <pre>
        <code>
          {"function precommit() {\n"}
          {"  git status\n"}
          {"  echo\n"}
          {'  echo "Temporary lines:"\n'}
          {"  git grep TEMP\n"}
          {"  echo\n"}
          {'  echo "TODOs:"\n'}
          {"  git grep TODO\n"}
          {"}\n"}
        </code>
      </pre>

      <p>
        As long as you remember to run <code>precommit</code> before doing a
        commit, this works quite well. Yes, you still have to remember to do
        something -- but it's just one thing to remember, instead of multiple
        things. (If you really wanted, there's probably some way to redefine{" "}
        <code>git commit</code> to do these checks for you and then ask for
        permission before proceeding with the commit -- but I didn't look into
        that.)
      </p>
      <p>
        A more significant issue which I was forgetting to deal with was tests
        -- in particular, failing tests. I don't write as many tests as I should
        for my personal projects. I often go a long time without thinking about
        them, only to run them and realize that a few are failing -- and have
        been failing for several commits now! Usually this ends up being because
        I changed the way the code should behave and the failing test is simply
        out-of-date, but in any case, your tests should probably all be passing
        before you commit unless you've assessed them and decided to fix them at
        a later point. So, throw those into the <code>precommit</code> routine:
      </p>

      <pre>
        <code>
          {"function precommit() {\n"}
          {"  npm test\n"}
          {"  git status\n"}
          {"  echo\n"}
          {'  echo "Temporary lines:"\n'}
          {"  git grep TEMP\n"}
          {"  echo\n"}
          {'  echo "TODOs:"\n'}
          {"  git grep TODO\n"}
          {"}\n"}
        </code>
      </pre>

      <p>
        Note that like <code>git log</code> earlier, the <code>npm test</code>{" "}
        waits for you to dismiss it, at which point the rest of the commands
        will run (starting with <code>git status</code>). This may work
        differently if you do tests differently.
      </p>

      <h2>Meta Custom Commands</h2>

      <p>
        I introduced a few other miscellaneous commands for myself, in addition
        to the above, and this eventually revealed two problems. First, I would
        always forget where my custom commands file was stored, and exactly what
        the name was -- which was a problem when trying to add or modify
        commands. So I added a command to open the file (from anywhere):
      </p>

      <pre>
        <code>
          {"function editcustomcommands() {\n"}
          {"  vim ~/path/to/file/.customcommands.sh\n"}
          {"}\n"}
        </code>
      </pre>

      <p>
        Second, I would sometimes forget the name of a command, especially if I
        don't use it very often. Opening the file and searching for it works,
        but isn't very efficient. So I added a command to simply print the names
        of all my custom commands, by category:
      </p>

      <pre>
        <code>
          {"function viewcustomcommands() {\n"}
          {'  echo "Navigation: cdproj, cdarch, cdweb"\n'}
          {
            '  echo "Projects:   cdproj, prework, precommit, fullreview, predeploy"\n'
          }
          {"  // and more which I've omitted\n"}
          {'  echo "Meta:       viewcustomcommands, editcustomcommands"\n'}
          {"}\n"}
        </code>
      </pre>

      <p>
        Again, with all of the above, auto-complete works so you only need to
        type out the first few characters. Any names that make sense to you and
        are quick to use are good names.
      </p>

      <h2>Conclusion</h2>

      <p>
        It's relatively simple and easy to get some basic custom commands setup.
        Once setup, they can improve your workflow by removing friction and
        doing steps which you would otherwise have forgotten to do. If you have
        a nice IDE, track issues on GitHub or GitLab, or work as part of a
        larger team with a more formal workflow setup, then some of the
        particular examples above may not be as useful -- but there's likely
        still some friction which you could remove with this type of thinking.
        I've barely scratched the surface here, so I'm sure there are lots of
        other useful things you could do with just a little bit more research
        yourself.
      </p>
    </>
  );
}
