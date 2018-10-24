import React from "react";

import { Heading, Slide, SlideSet, Text, Link } from "spectacle";

import NoteList from "../elements/NoteList";

export default (
  <SlideSet>
    <Slide bgImage="" bgSize="contain" bgRepeat="no-repeat">
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="tertiary"
        margin="1rem -2rem"
      >
        Intro to Intro to Programming
      </Heading>
      <Heading fit size={3} margin="1rem 0">
        Learning Programming with SNAP
      </Heading>
      <Text fit>
        Will Ockelmann-Wagner | @WowItsWillWow | wow@carbonfive.com
      </Text>

      <NoteList
        notes={[
          "intro to intro to programming",
          "this is what i've been up to on thursday and friday mornings"
        ]}
      />
    </Slide>

    <Slide bgColor="tertiary">
      <Heading fit size={1} textColor="primary">
        <Link
          textColor="primary"
          href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=derek%20dung&ProjectName=Ghostrider"
        >
          One Month In
        </Link>
      </Heading>

      <NoteList
        notes={["Here's an example from a student", "1 month in", "dope"]}
      />
    </Slide>

    <Slide>
      <Heading fit size={1}>
        <Link
          textColor="tertiary"
          href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=will-wow&ProjectName=Billy"
        >
          Hi Billy!
        </Link>
      </Heading>

      <NoteList notes={["Here's one I did to prepare for a later lesson"]} />
    </Slide>

    <Slide bgColor="tertiary">
      <Heading fit size={1}>
        <Link
          textColor="primary"
          href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=will-wow&ProjectName=Hangman"
        >
          Hangman
        </Link>
      </Heading>

      <NoteList
        notes={[
          "finally, here's one i did as summer homework",
          "functions",
          "yes, you can make reduce",
          "yes, I did",
          "even unit tests"
        ]}
      />
    </Slide>

    <Slide bgSize="contain" bgRepeat="no-repeat" bgImage="./img/billy.png">
      <Heading size={1}>
        Thanks!
      </Heading>

      <NoteList notes={["say thanks, billy!"]} />
    </Slide>
  </SlideSet>
);
