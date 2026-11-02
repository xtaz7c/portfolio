import type { HTMLAttributes } from "react";

// Tipagem do web component <ion-icon> (pacote "ionicons") para uso em JSX.
declare module "react" {
   namespace JSX {
      interface IntrinsicElements {
         "ion-icon": HTMLAttributes<HTMLElement> & {
            icon?: string;
            name?: string;
            size?: "small" | "large";
         };
      }
   }
}
