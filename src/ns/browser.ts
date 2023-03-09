import { Ableton } from "..";
import { Namespace } from ".";


export interface GettableProperties {
  test: string;
}

export interface TransformedProperties {

}

export interface SettableProperties {

}

export interface ObservableProperties {

}

export interface RawScene {

}

export class Scene extends Namespace<
  GettableProperties,
  TransformedProperties,
  SettableProperties,
  ObservableProperties
> {
  constructor(ableton: Ableton, public raw: RawScene) {
    super(ableton, "browser");

    this.transformers = {

    };

    this.cachedProps = {
    };
  }

  /**
   * Fire the scene directly. Will fire all clip slots
   * that this scene owns and select the scene itself.
   */

}
