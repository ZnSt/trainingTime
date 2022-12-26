import data from "../json/painting.json";
import events from "../json/upcoming-events.json";
import colorPickerOptions from "../json/colorPickerOptions";

import { Counter } from "./Counter";
import { Card } from "./Card";
import { Section } from "./Section";
import { PageTitle } from "./Calendar/PageTitle";
import { EventBoard } from "./Calendar/EventsBoard";

// State and SetState
import { StillCounter } from "./StillCounter";
import { Dropdown } from "./Dropdown";
import { Colorpicker } from "./Colorpicker";
import { TodoList } from "./ToDo/TodoList";
export const App = () => {
  return (
    <div>
      <Section title="Top Week" styles={{ textAlign: "center" }}>
        <Card data={data} />
        <Counter />
      </Section>

      <PageTitle title="24th Core Worlds Coalitions Conference" />
      <EventBoard events={events} />

      <StillCounter initialValue={0} />
      <Dropdown />
      <Colorpicker colors={colorPickerOptions} />

      <TodoList />
    </div>
  );
};
