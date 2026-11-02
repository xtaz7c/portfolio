import { defineCustomElement } from "ionicons/components/ion-icon.js";

// Registra o web component <ion-icon> uma única vez.
defineCustomElement();

type IconProps = {
   /** Ícone importado de "ionicons/icons" (ex.: menuOutline). */
   icon: string;
   className?: string;
};

function Icon({ icon, className }: IconProps) {
   return <ion-icon icon={icon} className={className} aria-hidden="true" />;
}

export default Icon;
