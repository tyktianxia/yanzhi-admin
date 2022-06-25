declare module "*.vue" {
  import { App, defineComponent } from "vue";

  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}

declare const myMap: Map<string, string>;

declare type Test = {
  a: string;
  num: number;
};
