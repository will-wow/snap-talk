import React from "react";

import { Heading, Slide, SlideSet, Text } from "spectacle";

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

    <Slide>
      <Heading fit size={1}>
        Project 1: Animation
      </Heading>

      <Text>
        <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=derek%20dung&ProjectName=Ghostrider">
          Ghostrider
        </a>
      </Text>

      <Text>
        <a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=will-wow&ProjectName=Hangman">
          Hangman
        </a>
      </Text>

      <NoteList
        notes={["Here's an example from a student", "1 month in", "dope"]}
      />
    </Slide>
  </SlideSet>
);
