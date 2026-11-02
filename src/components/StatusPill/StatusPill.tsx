import "./StatusPill.css";

type StatusPillProps = {
   label?: string;
};

function StatusPill({ label = "Online" }: StatusPillProps) {
   return (
      <span className="status-pill">
         <span className="status-pill__dot" aria-hidden="true" />
         <span className="status-pill__label">{label}</span>
      </span>
   );
}

export default StatusPill;
