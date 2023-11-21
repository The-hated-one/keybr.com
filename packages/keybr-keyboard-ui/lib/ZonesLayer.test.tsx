import { KeyboardContext, loadKeyboard } from "@keybr/keyboard";
import { Layout } from "@keybr/layout";
import test from "ava";
import TestRenderer from "react-test-renderer";
import { ZonesLayer } from "./ZonesLayer.tsx";

test("render", (t) => {
  const keyboard = loadKeyboard(Layout.EN_US);

  const testRenderer = TestRenderer.create(
    <KeyboardContext.Provider value={keyboard}>
      <ZonesLayer />
    </KeyboardContext.Provider>,
  );

  t.snapshot(testRenderer.toJSON());
});
