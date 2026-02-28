# Prompt History

All prompts used while building this repo (from agent transcripts).

---

## 1. Initial app request

I would like a simple page with HTML and javascript that does the following:

Have the title of 'Minecraft Timer'
The whole thing should have a minecraft theme.
There should be two timers, one on either side of the page (fill the entire page)
It's a countdown timer, with a big circle showing the remaining time.

I should be able to click and edit the time of each timer (type it in minutes). One timer should be named 'Child 1', and the other 'Child 2'

It should be possible to pause either timer

---

## 2. Implement Minecraft Timer plan

Minecraft Timer Page

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

---

## 3. Open in browser

open it in the browser tab

---

## 4. index2.html: alarm, speech, localStorage

Create a new version, called index2.html.

This should add the following new features:
- When the timer runs out, turn that timer bright red and play an small alarm sound, then say 'Minecraft time is over!'
- Persist the time to localstorage

---

## 5. Persist remaining time and personalized announcement

It should persist the time remaining as well, so that when we refresh the page, continue to show from the remaining time.

It should continue tracking the time, even if the application is shut down.

The announcement should now include the name: "~Name~, your minecraft time is over! Please turn off your device and give it to Daddy"

---

## 6. Pause correctness across sessions

Does our state consider that we can pause the timer? We may end up with many sessions, and we need to keep track of it through that

---

## 7. Implement Persist Running Timers plan

Persist Running Timers Across Reloads

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

---

## 8. Dynamic timers: add, remove, edit name, tile

Now, let's add one more feature. Allow us to create an arbitrary number of timers at the same time. Tile them appropriately as needed. Allow us to update the name in the same way that we edit the time. Add a 'plus' button to the very top right of the screen to add a new timer, and 'x' buttons (with a styled confirmation screen) to close a timer. Persist the number of timers and names

---

## 9. Implement Dynamic Timers plan

Dynamic Timers: Add, Remove, Edit Name, Tile, Persist

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

---

## 10. Git prep: prompt history and readme

I'm going to add this to git. Create a new file, called 'PROMPT_HISTORY.md' -- include all prompts that I used in this repo.

Also create a readme explaining the project.
