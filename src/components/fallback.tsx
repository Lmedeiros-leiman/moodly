export interface FallbackProps {
   children: React.ReactNode;
   className?: string;
   condition: boolean;
   fallback?: React.ReactNode;
}

const Fallback: React.FC<FallbackProps> = ({
   children,
   className = "",
   condition,
   fallback = <></>
}) => {
   return (
      <div className={className}>
         {condition ? children : fallback}
      </div>
   );
};

export default Fallback;
