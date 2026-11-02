import "./StatusPill.css";

type StatusPillProps = {
   label?: string;
};

function StatusPill({ label = "Disponível para projetos" }: StatusPillProps) {
   return (
      <span className="status-pill">
         <span className="status-pill__dot" aria-hidden="true" />
         {label}
      </span>
   );
}

export default StatusPill;
