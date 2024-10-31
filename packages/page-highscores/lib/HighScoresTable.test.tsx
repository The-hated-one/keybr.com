import { test } from "node:test";
import { FakeIntlProvider } from "@keybr/intl";
import { Layout } from "@keybr/keyboard";
import { render } from "@testing-library/react";
import { assert } from "chai";
import { MemoryRouter } from "react-router";
import { HighScoresTable } from "./HighScoresTable.tsx";
import { type Entry } from "./types.ts";

test("render", () => {
  const r = render(
    <FakeIntlProvider>
      <MemoryRouter>
        <HighScoresTable
          entries={[
            {
              user: {
                id: null,
                name: "Deleted User",
                imageUrl: null,
              },
              layout: Layout.EN_US,
              speed: 750,
              score: 1000,
            } as Entry,
            {
              user: {
                id: "id",
                name: "Named User",
                imageUrl: null,
              },
              layout: Layout.EN_DVORAK,
              speed: 500,
              score: 500,
            } as Entry,
          ]}
        />
      </MemoryRouter>
    </FakeIntlProvider>,
  );

  assert.isNotNull(r.queryByText("Deleted User"));
  assert.isNotNull(r.queryByText("Named User"));

  r.unmount();
});
